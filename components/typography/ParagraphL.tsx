// define properties of paragraph texts

// define Paragraph type properties
type ParagraphLProps = {
  content: string;
  color?: string;
  fontWeight?: string;
};

// define ParagraphL component
export const ParagraphL = ({ content, color, fontWeight }: ParagraphLProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? ""};
          font-size: 1.5rem;
          font-weight: ${fontWeight ?? ""};
          text-align: left;
          width: 90vw;
        }
      `}</style>
    </>
  );
};
