import React from 'react';

interface GaugeBarProps {
  positiveVotes: number;
  negativeVotes: number;
}

const barContainerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  backgroundColor: '#e0e0e0',
  borderRadius: '4px',
  overflow: 'hidden'
};

const fillStyle = (width: number, backgroundColor: string): React.CSSProperties => ({
  backgroundColor,
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '12px',
  animation: 'widthGrow 0.5s ease-in-out',
  animationFillMode: 'forwards',
  width: `${width}%` 
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
          <div style={fillStyle(positivePercentage, '#4caf50')}>
            {roundNumber(positivePercentage)}%
          </div>
          <div style={fillStyle(negativePercentage, '#f44336')}>
            {roundNumber(negativePercentage)}%
          </div>
        </>
      )}
    </div>
  );
};

export default GaugeBar;
