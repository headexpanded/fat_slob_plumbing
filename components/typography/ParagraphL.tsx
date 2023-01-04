// define properties of paragraph texts

// define Paragraph type properties
type ParagraphLProps = {
  content: string;
  color?: string;
};

// define Paragraph component
export const ParagraphL = ({ content, color }: ParagraphLProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? ""};
          width: 90vw;
          text-align: left;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};
