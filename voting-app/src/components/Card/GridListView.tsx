import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VoteCardList from './VoteCardList';
import VoteCardGrid from './VoteCardGrid';
import styled from 'styled-components';
import { Card, RootState, FieldType } from '../../interfaces/types'
import Carousel from './Carousel';

const Container = styled.div``;

const Grid = styled.div`
  display: grid;

  gap: 1rem;
  padding: 0 7.125rem;
  @media all and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(15.625rem, 1fr));
  }
  @media all and (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(15.625rem, 1fr));
  }
`;

const SelectToggle = styled.select`
  padding: 0.7rem 1.25rem;
  color: rgba(0, 0, 0, .8);
  border: 2px solid rgba(0, 0, 0, .8);
  background-color: white;


  @media all and (min-width: 768px) {
    height: 3rem;
  }

  @media all and (min-width: 1100px) {
    height: 2.5rem;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  padding: 0 7.125rem;
  flex-direction: row;
  margin-bottom: 3.3125rem;
  justify-content: space-between;
  align-items: center;


`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 7.125rem;
`;

const TitleH2 = styled.h2`
  font-size: 3.1875rem;
  font-weight: 100;
  margin:0;
  @media all and (min-width: 500px) {
    padding: 0 0 0 .75rem;
  }

  @media all and (min-width: 768px) {
    padding: 0;
  }
`;

const GridViewListView: React.FC = () => {

  const data = useSelector((state: RootState) => state.voting.data);

  const [viewType, setViewType] = useState<'grid' | 'list'>('list');
  const [isMobile, setIsMobile] = useState(window.innerWidth < FieldType.Medium);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < FieldType.Medium);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getTitle = () =>  <TitleH2>Previous Rulings</TitleH2>;

  return (
    <>
      {isMobile && 
        <>
          {getTitle()}
          <Carousel data={data} />
        </>
      }

      {!isMobile && (
        <Container>
          <ViewToggle>
            {getTitle()}
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
                <VoteCardGrid key={item.name} data={item} />
              ))}
            </Grid>
          ) : (
            <List>
              {data.map((item: Card) => (
                <VoteCardList key={item.name} data={item} />
              ))}
            </List>
          )}
        </Container>
      )}
    </>
  );
};

export default GridViewListView;
