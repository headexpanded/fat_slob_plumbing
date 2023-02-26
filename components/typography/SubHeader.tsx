// define properties of Italic texts

// define Italic type properties
type SubHeaderProps = {
  content: string;
  color?: string;
};

// define Italic component. Use for sub-title slogans, customer reviews
export const SubHeader = ({ content, color }: SubHeaderProps) => {
  return (
    <>
      <h2>{content}</h2>
      <style jsx>{`
        p {
          color: ${color ?? "var(--defaultLight"};
          font-size: 2.5rem;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};
