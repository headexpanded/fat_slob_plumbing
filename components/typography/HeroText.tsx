import styled, { keyframes } from "styled-components";

// define Hero text component
type HeroTextProps = {
  content: string;
  color?: string;
};

export const HeroText = ({ content, color }: HeroTextProps) => {
  return (
    <>
      <p>{content}</p>
    </>
  );
};

const animation = keyframes`
from {opacity:0; transform: translateY(20px);}
to {opacity:1;transform: translateY(0px);}
`;

const Wrapper = styled.span`
  animation-name: ${animation};
  animation-delay: 0s;
  animation-duration: 0s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
`;
