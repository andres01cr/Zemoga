import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { vote } from '../../store/votingSlice';
import styled, { keyframes } from 'styled-components';
import GaugeBar from './GaugeBar';
import ThumbsUp from '../../utils/img/thumbs-up.svg';
import ThumbsDown from '../../utils/img/thumbs-down.svg';
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

const ButtonVote = styled.button`
  padding: 0.7rem 1.25rem;
  color: white;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, .8);
`;

const VoteButtons = styled.div`
  flex-direction: row;
  justify-content: end;
  display:flex;
  align-items: center;
`;

const NameContainer  = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionWrapper  = styled.p`
  min-width: 0;
`;
const DescriptionContainer  = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ButtonThumbsUp = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: rgba(60, 187, 180, .8);
    padding:0;  
    border:0;
    margin-right: .625rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const ButtonThumbsDown = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: rgba(249, 173, 29, .8);
    padding:0;
    border:0;
    margin-right: .625rem;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex: 0 0 2rem;
  justify-content: center;
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex: 0 0 80%;
`;



const ImgThumbsUp = styled.img`
    background-image: ('/utils/img/thumbs-up.svg');
`
const ImgThumbsDown = styled.img`
    background-image: ('/utils/img/thumbs-down.svg');
`
const ResponsiveVoteCardContainer = styled(VoteCardContainer)<{$picture: string}>`
  background-color: rgba(50, 50,50, .8);
  //background-image: url(${ (props:any) => `utils/img/${props.$picture}`});
  @media all and (max-width: 500px) {
    // Small screen styles
  }

  @media all and (min-width: 501px) and (max-width: 768px) {
    // Medium screen styles
  }

  @media all and (min-width: 769px) {
    // Large screen styles
  }
`;

const GaugeBarWrapper = styled.div`
  width: 100%;
`;

interface VoteCardProps {
  data: {
    name: string;
    description: string;
    picture: string;
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

  useEffect(() => {
    // Add any useEffect logic if needed
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
    <ResponsiveVoteCardContainer $picture={data.picture}>
      <Row>
        <Column1>
        {data.votes.positive >= data.votes.negative
            ?   <ButtonThumbsUp> <ImgThumbsUp src={ThumbsUp}/></ButtonThumbsUp>
            :   <ButtonThumbsDown>  <ImgThumbsDown src={ThumbsDown}/>  </ButtonThumbsDown>
          }
                 </Column1>
           <Column2>
          <h3>{data.name}</h3>
          </Column2>
      </Row>
      <Row>
      <Column1>
      </Column1>
        <Column2>
        <DescriptionWrapper>
          <DescriptionContainer>
            {data.description}
          </DescriptionContainer>
        </DescriptionWrapper>
      </Column2>
      </Row>
      <Row>
        <Column1>
        </Column1>
        <Column2>
          <VoteButtons>
            <ButtonThumbsUp
              className={selectedVote === 'positive' ? 'selected' : ''}
              onClick={() => setSelectedVote('positive')}
            >
              <ImgThumbsUp src={ThumbsUp}/>
            </ButtonThumbsUp>
            <ButtonThumbsDown

              className={selectedVote === 'negative' ? 'selected' : ''}
              onClick={() => setSelectedVote('negative')}
            >
              <ImgThumbsDown src={ThumbsDown}/>
            </ButtonThumbsDown>
            <ButtonVote
              className="vote-now-button"
              onClick={handleVote}
              disabled={!selectedVote}
            >
              {voteButtonText}
            </ButtonVote>
          </VoteButtons>
        </Column2>
      </Row>
      <GaugeBarWrapper>
        <GaugeBar positiveVotes={data.votes.positive} negativeVotes={data.votes.negative} />
      </GaugeBarWrapper>
      <p>{thankYouText}</p>
      {voteButtonText === 'Vote Again' && (
        <Button className="vote-again-button" onClick={handleVoteAgain}>
          Vote Again
        </Button>
      )}
    </ResponsiveVoteCardContainer>
  );
};

export default VoteCard;


export interface Card {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
      positive: number;
      negative: number;
  };
}