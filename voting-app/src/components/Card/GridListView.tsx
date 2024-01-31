import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/votingSlice';
import VoteCard from './VoteCard';
import styled from 'styled-components';
import { Card } from '../../interfaces/types'
import Carousel from './Carousel';

const Container = styled.div`
  // Add your styles here
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
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
          <div className="view-toggle">
            <button onClick={() => setViewType('list')}>List View</button>
            <button onClick={() => setViewType('grid')}>Grid View</button>
          </div>

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
