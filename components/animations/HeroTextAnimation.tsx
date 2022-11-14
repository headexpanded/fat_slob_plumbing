import styled, { keyframes } from "styled-components";

type HeroTextAnimationProps = {};

export const HeroTextAnimation = () => {
  const HeroText = "Stress Testing Domestic Sewage Systems since 2013".split(
    ""
  );
  return (
    <HeroTexts>
      {HeroText.map((text, index) => (
        <span key={index}>{text}</span>
      ))}
    </HeroTexts>
  );
};

const animation = keyframes`
0% {opacity:0; }
100% {opacity:1;}
`;

const HeroTexts = styled.span`
  animation-name: ${animation};
  animation-delay: 1s;
  animation-duration: 0.25s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  color: var(--solidBrown);
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 600;
  margin-top: -32px;
  opacity: 0;
  padding: -20px 0px 4px 0px;
  text-align: center;
  text-transform: uppercase;
`;
