import styled, { keyframes } from "styled-components";

// define Hero text component
type HeroTextProps = {
  content: string;
  color?: string;
};

export const HeroText = ({ content, color }: HeroTextProps) => {
  return <Wrapper>{content}</Wrapper>;
};

const animation = keyframes`
from {opacity:0; transform: translateY(20px);}
to {opacity:1;transform: translateY(0px);}
`;

const Wrapper = styled.h4`
  animation-name: ${animation};
  animation-delay: 0.1s;
  animation-duration: 0.25s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  color: var(--solidBrown);
  font-size: 2rem;
  font-weight: 800;
  margin-top: 56px;
  opacity: 0;
  padding: 0px 0px 4px 0px;
  text-align: center;
  text-transform: uppercase;
`;
