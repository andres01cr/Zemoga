import React from 'react';
import styled from 'styled-components';
import thumbsUpIcon from './assets/img/thumbs-up.svg';
import thumbsDownIcon from './assets/img/thumbs-down.svg';

interface HeaderProps {
  // Define any props if needed
}

const HeaderStyle = styled.header`
  position: relative;
  overflow: hidden;
  height: 80vw;
  min-height: 35rem;
  max-height: 38rem;
  margin-bottom: 2rem;
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: -35vw;
  width: 160vw;
  height: 100%;
  object-fit: cover;
`;

const MaxCentered = styled.div`
  display: contents;
`;

const FeaturedCard = styled.div`
  position: relative;
  top: 5.5rem;
  left: 1rem;
  overflow: hidden;
  width: 55vw;
  max-height: 25rem;
`;

const GlassBackground = styled.div`
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: center no-repeat linear-gradient(var(--color-dark-background), var(--color-dark-background)), -25vw 0/160vw no-repeat url('../assets/img/pope-francis.png');
  filter: blur(1rem);
`;

const Content = styled.div`
  position: relative;
  padding: 1rem;
  color: var(--color-white);
`;

const Hairline = styled.p`
  margin: 0;
  font-weight: 300;
  white-space: nowrap;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
`;

const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  max-height: 10.5rem;
  margin: 1rem 0;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  font-weight: 300;
  -webkit-line-clamp: 6;
  text-overflow: ellipsis;
`;

const MoreInfo = styled.p`
  font-weight: 300;
`;

const MoreInfoLink = styled.a`
  color: var(--color-white);
  text-decoration: none;
  display: inline-block;
  margin: 0;
  font-weight: 300;
`;

const Cta = styled.p`
  font-weight: 700;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem -1rem;
`;

const IconButton = styled.button`
  width: 50%;
  height: 2.75rem;
  padding: 0;
  border: 0;
  background-color: transparent;
`;

const ClosingGauge = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: var(--color-light-background);
`;

const LeftGauge = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 .25rem 0 0;
  background-color: var(--color-dark-background);
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-white);
`;

const RightGauge = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 0 .75rem;
`;

const ClosingGaugeTitle = styled.span`
  /* Add styles if needed */
`;

const ClosingGaugeNumber = styled.span`
  color: var(--color-dark-gray);
  font-size: 1.5rem;
  font-weight: 400;
`;

const ClosingGaugeDesc = styled.span`
  font-size: 1.5rem;
  color: var(--color-dark-gray);
`;

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyle>
      <BackgroundImage
        className="hero__background"
        srcSet="assets/img/pope-francis.png 750w, assets/img/pope-francis.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="assets/img/pope-francis.png"
        alt="Pope Francis"
      />
      <MaxCentered>
        <FeaturedCard>
          <GlassBackground />
          <Content>
            <Hairline>What's your opinion on</Hairline>
            <Title>Pope Francis?</Title>
            <Description>
              He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
            </Description>
            <MoreInfo>
              <MoreInfoLink href="http://wikipedia.com">
                {/* Add your SVG component here */}
                More information
              </MoreInfoLink>
            </MoreInfo>
            <Cta>What’s Your Verdict?</Cta>
            <Buttons>
              <IconButton aria-label="thumbs up">
                <img src={'#'} alt="thumbs up" />
              </IconButton>
              <IconButton aria-label="thumbs down">
                <img src={'#'} alt="thumbs down" />
              </IconButton>
            </Buttons>
          </Content>
        </FeaturedCard>
      </MaxCentered>
      <ClosingGauge>
        <LeftGauge>
          <ClosingGaugeTitle>closing in</ClosingGaugeTitle>
        </LeftGauge>
        <RightGauge>
          <ClosingGaugeNumber>22</ClosingGaugeNumber>
          <ClosingGaugeDesc>days</ClosingGaugeDesc>
        </RightGauge>
      </ClosingGauge>
    </HeaderStyle>
  );
};

export default Header;