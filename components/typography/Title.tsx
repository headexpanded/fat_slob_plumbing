// define properties of Main Title

type TitleProps = {
  content: string;
};

// define TitleText component
export const Title = ({ content }: TitleProps) => {
  return (
    <>
      <h1>{content}</h1>
    </>
  );
};
