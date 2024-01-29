import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { vote } from '../../store/votingSlice';
import styled, { keyframes } from 'styled-components';
import GaugeBar from './GaugeBar';


// Styled components
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

const VoteCardContainer = styled.div`
  animation: ${fadeIn} 0.5s, ${slideIn} 0.5s;
`;

const Button = styled.button`

`;


const GaugeBarWrapper = styled.div`
  width: 100%;

`;

interface VoteCardProps {
  data: {
    name: string;
    description: string;
    votes: {
      positive: number;
      negative: number;
    };
  };
}

const VoteCard: React.FC<VoteCardProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [selectedVote, setSelectedVote] = useState<'positive' | 'negative' | null>(null);
  const [thankYouText, setThankYouText] = useState('Thank you for your vote!');
  const [voteButtonText, setVoteButtonText] = useState('Vote Now');

  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleVote = () => {
    if (selectedVote) {
      dispatch(vote({ id: data.name, voteType: selectedVote }));
      setThankYouText('Thank you for your vote!');
      setVoteButtonText('Vote Again');
    }
  };

  const handleVoteAgain = () => {
    setSelectedVote(null);
    setThankYouText('Thank you for your vote!');
    setVoteButtonText('Vote Now');
  };

  const gaugePercentage = ((data.votes.positive / (data.votes.positive + data.votes.negative)) * 100) || 0;

  return (
    <VoteCardContainer>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <div className="vote-buttons">
        <Button
          className={selectedVote === 'positive' ? 'selected' : ''}
          onClick={() => setSelectedVote('positive')}
        >
          Thumbs Up
        </Button>
        <Button
          className={selectedVote === 'negative' ? 'selected' : ''}
          onClick={() => setSelectedVote('negative')}
        >
          Thumbs Down
        </Button>
        <Button
          className="vote-now-button"
          onClick={handleVote}
          disabled={!selectedVote}
        >
          {voteButtonText}
        </Button>
      </div>
      <GaugeBarWrapper>
        <GaugeBar positiveVotes={data.votes.positive} negativeVotes={data.votes.negative} />
      </GaugeBarWrapper>
      <p>{thankYouText}</p>
      {voteButtonText === 'Vote Again' && (
        <Button className="vote-again-button" onClick={handleVoteAgain}>
          Vote Again
        </Button>
      )}
    </VoteCardContainer>
  );
};

export default VoteCard;