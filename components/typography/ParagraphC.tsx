// define properties of centered paragraph texts

type ParagraphCProps = {
  content: string;
  color?: string;
};

// define Paragraph component
export const ParagraphC = ({ content, color }: ParagraphCProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? ""};
          /* font-size: 1.1rem;
          font-weight: 500;
          text-align: center;
          padding: 0px 0px 4px 0px; */
        }
      `}</style>
    </>
  );
};
