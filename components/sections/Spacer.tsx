import styled from "styled-components";

// define Hero text component
type SpacerProps = {
  content?: string;
  color?: string;
};

export const Spacer = ({ content, color }: SpacerProps) => {
  return <Wrapper>{content}</Wrapper>;
};

const Wrapper = styled.div`
  color: var(??--solidBrown);
  font-size: 1.5rem;
  font-weight: 800;
  height: 1.5rem;
  opacity: 0;
  padding: 28px 0px 16px 0px;
  text-align: center;
  text-transform: uppercase;
`;
