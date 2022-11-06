// define properties of Main Title
// color is #804D00 until project color palette is finalised

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
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: -0.1rem;
          line-height: 1.1;
          text-align: center;
        }
      `}</style>
    </>
  );
};
