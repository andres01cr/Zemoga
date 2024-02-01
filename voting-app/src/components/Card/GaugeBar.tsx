import React from 'react';
import styled, { keyframes } from 'styled-components';

interface GaugeBarProps {
  positiveVotes: number;
  negativeVotes: number;
}

const barContainerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  backgroundColor: '#e0e0e0',
  overflow: 'hidden'
};

const ImgThumbsUp = styled.div`
    background: url('assets/img/thumbs-up.svg');
    background-size: contain;
    width: 1.0625rem;
    height: 1.0625rem;
    background-repeat: no-repeat;
    margin: 0 .625rem;
`;

const ImgThumbsDown = styled.div`
    background: url('assets/img/thumbs-down.svg');
    background-size: contain;
    width: 1.0625rem;
    height: 1.0625rem;
    background-repeat: no-repeat;
    margin: 0 .625rem;
`;

const fillStyle = (width: number, backgroundColor: string, justifyContent: string): React.CSSProperties => ({
  backgroundColor,
  height: '35px',
  display: 'flex',
  justifyContent: `${justifyContent}`,
  alignItems: 'center',
  color: 'white',
  fontSize: '20px',
  animation: 'widthGrow 0.5s ease-in-out',
  animationFillMode: 'forwards',
  width: `${width}%` ,
  opacity:0.8
});

const GaugeBar: React.FC<GaugeBarProps> = ({ positiveVotes, negativeVotes }) => {
  const totalVotes: number = positiveVotes + negativeVotes;
  const positivePercentage: number = totalVotes > 0 ? (positiveVotes / totalVotes) * 100 : 0;
  const negativePercentage: number = totalVotes > 0 ? (negativeVotes / totalVotes) * 100 : 0;

  const roundNumber = (percentage: number): number => {
    return Math.round(percentage * 10) / 10;
  };

  return (
    <div style={barContainerStyle}>
      {totalVotes > 0 && (
        <>
          <div style={fillStyle(positivePercentage, '#3cbbb4', 'left')}>
          <ImgThumbsUp/> {roundNumber(positivePercentage)}%
          </div>
          <div style={fillStyle(negativePercentage,  '#f9ad1d', 'right')}>
          {roundNumber(negativePercentage)}%  <ImgThumbsDown />
          </div>
        </>
      )}
    </div>
  );
};

export default GaugeBar;
