import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/votingSlice';
import VoteCard from './VoteCard';
import styled from 'styled-components';
import { Card } from '../../interfaces/types'
import Carousel from './Carousel';

const Container = styled.div`
   
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(15.625rem, 1fr));
  gap: 1rem;
  padding: 0 7.125rem;
`;
const SelectToggle = styled.select`
  padding: 0.7rem 1.25rem;
  color: rgba(0, 0, 0, .8);
  border: 2px solid rgba(0, 0, 0, .8);
  background-color: white;
`;
const ViewToggle = styled.div`
  display: flex;
  padding: 0 7.125rem;
  flex-direction: row-reverse;
  margin-bottom: .3125rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 7.125rem;
`;

interface RootState {
  voting: {
    data: Card[];
  };
}

const GridViewListView: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.voting.data);

  const [viewType, setViewType] = useState<'grid' | 'list'>('list');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      {isMobile && <Carousel data={data} />}

      {!isMobile && (
        <Container>
          <ViewToggle>
          <SelectToggle
           onChange={(e) => setViewType( e.target.value as 'grid' | 'list' )}
          >
            <option value="list">List View</option>
            <option value="grid">Grid View</option>
          </SelectToggle>
          </ViewToggle>

          {viewType === 'grid' ? (
            <Grid>
              {data.map((item: Card) => (
                <VoteCard key={item.name} data={item} />
              ))}
            </Grid>
          ) : (
            <List>
              {data.map((item: Card) => (
                <VoteCard key={item.name} data={item} />
              ))}
            </List>
          )}
        </Container>
      )}
    </>
  );
};

export default GridViewListView;
