import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import VoteCard from './VoteCard';
import { Card } from '../../interfaces/types'

// Styled components
const CarouselContainer = styled.div`
  overflow: hidden;
  cursor: grab;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
  width: 25rem;
`;

interface Props {
  data: Card[];
}

const Carousel: React.FC<Props> = ( {data} ) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDragStart = useCallback((event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const positionX = event.type.includes('mouse') ? 
      (event as React.MouseEvent<HTMLDivElement>).clientX : 
      (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
    setStartX(positionX);
  }, []);

  const handleDragMove = useCallback((event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }
    const currentPosition = event.type.includes('mouse') ? 
      (event as React.MouseEvent<HTMLDivElement>).clientX : 
      (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
    const newTranslate = currentTranslate + currentPosition - startX;
    setCurrentTranslate(newTranslate);
    setStartX(currentPosition);
  }, [isDragging, currentTranslate, startX]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <CarouselContainer
      ref={carouselRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <CarouselInner style={{ transform: `translateX(${currentTranslate}px)` }}>
        {data.map((item:Card, index) => (
          <CarouselItem key={index}>
           <VoteCard data={item} />
          </CarouselItem>
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export default Carousel;
