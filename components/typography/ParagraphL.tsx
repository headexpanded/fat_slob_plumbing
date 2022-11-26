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
          font-size: 1.25rem;
          line-height: 1.2;
          text-align: left;
        }
      `}</style>
    </>
  );
};
