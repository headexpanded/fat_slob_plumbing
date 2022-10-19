// define properties of Italic texts
// color may change when palette is finalised.

// define Italic type properties
type SubHeaderProps = {
  content: string;
  color?: string;
};

// define Italic component. Use for sub-title slogans, customer reviews
export const SubHeader = ({ content, color }: SubHeaderProps) => {
  return (
    <>
      <h4>{content}</h4>
      <style jsx>{`
        h4 {
          color: ${color ?? ""};
          font-size: 0.8rem;
          text-align: left;
          padding: 0px 0px 0px 442px;
          margin: -20px 0px 60px 0px;
        }
      `}</style>
    </>
  );
};
