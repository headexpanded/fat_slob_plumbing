// define properties of centered paragraph texts

type ParagraphCProps = {
  content: string;
  color?: string;
};

// define Paragraph component
export const ParagraphC = ({ content, color }: ParagraphCProps) => {
  return (
    <>
      <h2>{content}</h2>
      <style jsx>{`
        h2 {
          color: ${color ?? ""};
          font-size: 2rem;
          font-weight: 700;
          // text-align: center;
          // padding: 0px 0px 4px 0px;
        }
      `}</style>
    </>
  );
};
