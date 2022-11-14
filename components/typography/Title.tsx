// define properties of Main Title
import styled, { keyframes } from "styled-components";

type TitleProps = {
  content: string;
};

// define MainTitle component
export const Title = ({ content }: TitleProps) => {
  return (
    <>
      <TitleText>{content}</TitleText>
    </>
  );
};

const animation = keyframes`
0% {opacity:0; transform: translateY(-32px); }
100% {opacity:1;transform: translateY(0px) ;}
`;

const TitleText = styled.h1`
  animation-name: ${animation};
  animation-delay: 0.1s;
  animation-duration: 0.25s;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  color: var(--solidBrown);
  font-size: 6rem;
  font-weight: 800;
  letter-spacing: -0.15rem;
  line-height: 1.1;
  margin-bottom: -20px;
  opacity: 0;
  text-align: center;
`;
