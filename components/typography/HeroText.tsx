
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


