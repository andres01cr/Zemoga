import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface BannerProps {
  position: 'top' | 'bottom';
}

const StyledAside = styled.aside<{ position: 'top' | 'bottom' }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  background-color: rgba(235, 235, 235, 1);
  background-size: cover;

  ${({ position }) => position === 'top' && css`
    flex-direction: row;

    @media all and (min-width: 768px) {
      .banner__left { flex-basis: 20%; }
      .banner__right { flex-basis: 80%; }
    }
  `}

  ${({ position }) => position === 'bottom' && css`
    flex-direction: column;
    padding: 1rem 3rem;
    margin-top: 2rem;

    @media all and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem 2rem;
    }
  `}
`;


const BannerLeft = styled.div`
`;

const BannerRight = styled.div`
`;

const BannerTitle = styled.span`
`;

const BannerText = styled.p`
`;

const BannerHairline = styled.span`
`;

const IconButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(var(--color-green-positive), 1); 
  }


  svg {
    width: 20px;
    height: 20px;
    stroke: #000;
    stroke-width: 2px;
  }
`;

const CloseIcon = () => (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
        <path d="M1 19L19 1M1 1l18 18" />
      </g>
    </svg>
  );
  
  const TopBannerContent = () => (
    <>
      <BannerLeft>
        <BannerHairline>Speak out. Be heard.</BannerHairline>
        <BannerTitle>Be counted</BannerTitle>
      </BannerLeft>
      <BannerRight>
        <BannerText>
          Rule of Thumb is a crowd-sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </BannerText>
      </BannerRight>
      <IconButton aria-label="close">
        <CloseIcon />
      </IconButton>
    </>
  );
  
  
  const BottomBannerContent = () => (
    <>
      <BannerLeft>
        <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
      </BannerLeft>
      <BannerRight>
        <button className="banner__cta">
          Submit a name
        </button>
      </BannerRight>
    </>
  );
  
  const Banner: FC<BannerProps> = ({ position }) => {
    return (
      <StyledAside position={position} className={`banner-${position}`} role="doc-tip" aria-label={position === 'top' ? 'Speak Out' : 'Submit a name'}>
        {position === 'top' ? <TopBannerContent /> : <BottomBannerContent />}
      </StyledAside>
    );
  };
  
  export default Banner;