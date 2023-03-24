// define properties of centered paragraph texts

type ParagraphCProps = {
  content: string;
  color?: string;
  fontWeight?: string;
};

// define Paragraph component
export const ParagraphC = ({ content, color, fontWeight }: ParagraphCProps) => {
  return (
    <>
      <h2>{content}</h2>
      <style jsx>{`
        h2 {
          color: ${color ?? ""};
          font-size: 2rem;
          font-weight: ${fontWeight ?? "700"};
          // text-align: center;
          // padding: 0px 0px 4px 0px;
        }
      `}</style>
    </>
  );
};
