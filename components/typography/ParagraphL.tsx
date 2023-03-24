// define properties of paragraph texts

// define Paragraph type properties
type ParagraphLProps = {
  content: string;
  color?: string;
  fontWeight?: string;
  tagged?: boolean;
};

// define ParagraphL component
export const ParagraphL = ({
  content,
  color,
  fontWeight,
  tagged,
}: ParagraphLProps) => {
  return (
    <>
      <p>{content}</p>
      <style jsx>{`
        p {
          color: ${color ?? ""};
          font-size: 1.5rem;
          font-weight: ${fontWeight ?? "700"};
          text-align: left;
          //width: 90%;
          tagged: ${tagged ?? false};
          line-height: 2.25rem;
        }
      `}</style>
    </>
  );
};
