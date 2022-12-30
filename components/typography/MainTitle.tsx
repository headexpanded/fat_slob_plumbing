// define properties of Main Title

//  define MainTitle type properties
type MainTitleProps = {
  content: string;
  color?: string;
};

// define MainTitle component
export const MainTitle = ({ content, color }: MainTitleProps) => {
  return (
    <>
      <h1>{content}</h1>
      <style jsx>{`
        h1 {
          color: ${color ?? ""};
        }
      `}</style>
    </>
  );
};
