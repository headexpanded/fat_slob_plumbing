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
          font-size: 1.5rem;
          text-align: center;
          margin: 20px 0px 0px 0px;
        }
      `}</style>
    </>
  );
};
