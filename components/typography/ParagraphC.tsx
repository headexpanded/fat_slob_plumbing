// define properties of centered paragraph texts

type ParagraphCProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};

// define Paragraph component
export const ParagraphC = ({ content, color, fontSize, fontWeight }: ParagraphCProps) => {
  return (
    <>
      <h2>{content}</h2>
      <style jsx>{`
        h2 {
          color: ${color ?? ""};
          font-size: ${fontSize ?? "2rem"};
          font-weight: ${fontWeight ?? "700"};
        }
      `}</style>
    </>
  );
};
