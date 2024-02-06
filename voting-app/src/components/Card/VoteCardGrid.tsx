
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { vote } from '../../store/votingSlice';
import styled, { keyframes } from 'styled-components';
import GaugeBar from './GaugeBar';
import { Card } from '../../interfaces/types'

// Styled components
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(1.25rem); }
  to { transform: translateY(0); }
`;

const VoteCardContainer = styled.div`
  animation: ${fadeIn} 0.5s, ${slideIn} 0.5s;
`;

const ButtonVote = styled.button`
  padding: 0.7rem 1.25rem;
  color: white;
  border: .125rem solid white;
  background-color: rgba(0, 0, 0, .8);
  width: 7.5rem;
`;

const TitleH3 = styled.h3`
  margin: 10px 0 20px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ButtonVoteP = styled.p`
  font-size: .8125rem;
`;

const ButtonVoteContainer= styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgCover = styled.img`
  object-fit: cover;
  width: 12.5rem;
`
const VoteButtons = styled.div`
  flex-direction: row;
  justify-content: end;
  display:flex;
  align-items: end;
  margin-bottom: .9375rem;
`;

const VoteButtonsP = styled.p`
  font-size: .8125rem;
`;

const VoteAgain = styled.div`
  flex-direction: column;
  justify-content: end;
  display:flex;
  align-items: end;
  margin-bottom: .9375rem;
`;

const DescriptionWrapper  = styled.div`
  min-width: 0;
  flex: 0 0 60%;
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
  cursor: pointer;
  margin-bottom: .325rem;
  &:hover {
    background: rgba(60, 187, 180, .5);
  }
  &:focus {
    background: rgba(60, 187, 180, .2);
  }
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
  cursor: pointer;
  margin-bottom: .325rem;
  &:hover {
    background: rgba(249, 173, 29, .5);
  }

  &:focus {
    background: rgba(249, 173, 29, .2);
  }

`;

const ButtonThumbsUpTitle = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: rgba(60, 187, 180, .8);
  padding:0;  
  border:0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonThumbsDownTitle = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: rgba(249, 173, 29, .8);
  padding:0;
  border:0;
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
  flex: 0 0 2.4rem;
  justify-content: center;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex: 0 0 83%;
  width: 80%;
`;

const ImgThumbsUp = styled.div`
    background: url('assets/img/thumbs-up.svg');
    background-size: contain;
    width: 1.0625rem;
    height: 1.0625rem;
    background-repeat: no-repeat;
`;

const ImgThumbsDown = styled.div`
    background: url('assets/img/thumbs-down.svg');
    background-size: contain;
    width: 1.0625rem;
    height: 1.0625rem;
    background-repeat: no-repeat;
`;

const ResponsiveVoteCardContainerGradient = styled.div`
  background: rgb(179,179,179);
  background: linear-gradient(90deg, rgba(179,179,179,1) 12%, rgba(116,116,116,1) 84%);
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

const ResponsiveVoteCardContainer = styled(VoteCardContainer)<{picture: string}>`
  color: white;
  background: url(${ (props:any) => `assets/img/${props.picture}`});
  background-repeat: no-repeat;
  background-size: contain;
 
`;

const GaugeBarWrapper = styled.div`
  width: 100%;
`;

interface Props {
  data: Card;
}

const VoteCardGrid: React.FC<Props> = ({data}) => {

  const dispatch = useDispatch();
  const [selectedVote, setSelectedVote] = useState<'positive' | 'negative' | null>(null);
  const [thankYouText, setThankYouText] = useState('Thank you for your vote!');
  const [voteButtonText, setVoteButtonText] = useState('Vote Now');

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

  return (
    <ResponsiveVoteCardContainerGradient>
      <ResponsiveVoteCardContainer picture={data.picture}>
        <Row>
          <Column1>
          {data.votes.positive >= data.votes.negative
              ?   <ButtonThumbsUpTitle> <ImgThumbsUp /></ButtonThumbsUpTitle>
              :   <ButtonThumbsDownTitle>  <ImgThumbsDown />  </ButtonThumbsDownTitle>
            }
            </Column1>
            <Column2>
            <TitleH3>{data.name}</TitleH3>
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
          { voteButtonText === 'Vote Now' &&
            <VoteButtons>
              <ButtonThumbsUp
                onClick={() => setSelectedVote('positive')}
              >
                <ImgThumbsUp />
              </ButtonThumbsUp>
              <ButtonThumbsDown
                onClick={() => setSelectedVote('negative')}
              >
                <ImgThumbsDown />
              </ButtonThumbsDown>
              <ButtonVoteContainer>
                <ButtonVoteP>
                  {data.dateDescription}
                </ButtonVoteP>
                <ButtonVote
                  onClick={handleVote}
                  disabled={!selectedVote}
                >
                {voteButtonText}
                </ButtonVote>
              </ButtonVoteContainer>
            </VoteButtons>
          }
          {voteButtonText === 'Vote Again' && (
          <VoteAgain>
                  <VoteButtonsP>{thankYouText}</VoteButtonsP>
                <ButtonVote  onClick={handleVoteAgain}>
                  Vote Again
                </ButtonVote>
          </VoteAgain>
        )}
          </Column2>
        </Row>
        <GaugeBarWrapper>
          <GaugeBar positiveVotes={data.votes.positive} negativeVotes={data.votes.negative} />
        </GaugeBarWrapper>

    
      </ResponsiveVoteCardContainer>
    </ResponsiveVoteCardContainerGradient>
  );
};

export default VoteCardGrid;