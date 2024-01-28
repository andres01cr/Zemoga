import React, { FC } from 'react';
import styled from 'styled-components';

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
  background-color: rgba(235, 235, 235, 1); /* var(--color-light-gray) */
  /* background: url() no-repeat center center; */
  background-size: cover;

  &.banner-top {
    flex-direction: row;

    @media all and (min-width: 768px) {
      .banner__left { flex-basis: 20%; }
      .banner__right { flex-basis: 80%; }
    }
  }

  &.banner-bottom {
    flex-direction: column;
    padding: 1rem 3rem;
    margin-top: 2rem;

    @media all and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem 2rem;
    }
  }
`;

const BannerLeft = styled.div`
  /* Styles for the left side of the banner */
`;

const BannerRight = styled.div`
  /* Styles for the right side of the banner */
`;

const BannerTitle = styled.span`
  /* Styles for the banner title */
`;

const BannerText = styled.p`
  /* Styles for the banner text */
`;

const IconButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(var(--color-green-positive), 1); /* Example for hover state */
  }

  /* Adjust the SVG styles as needed */
  svg {
    width: 20px;
    height: 20px;
    stroke: #000;
    stroke-width: 2px;
  }
`;

const Banner: FC<BannerProps> = ({ position }) => {
  return (
    <StyledAside position={position} className={`banner-${position}`} role="doc-tip" aria-label={position === 'top' ? 'Speak Out' : 'Submit a name'}>
      <BannerLeft>
        <span className="banner__hairline">Speak out. Be heard.</span>
        <BannerTitle>Be counted</BannerTitle>
      </BannerLeft>
      <BannerRight>
        <BannerText>
          Rule of Thumb is a crowd-sourced court of public opinion where anyone and everyone can speak out and speak
          freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </BannerText>
      </BannerRight>
      <IconButton aria-label="close">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
            <path d="M1 19L19 1M1 1l18 18" />
          </g>
        </svg>
      </IconButton>
    </StyledAside>
  );
};

export default Banner;