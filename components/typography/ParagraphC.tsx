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
      <span>{content}</span>
      <style jsx>{`
        span {
          color: ${color ?? ""};
          font-size: ${fontSize ?? "2rem"};
          font-weight: ${fontWeight ?? "700"};
          padding-top: 0.8rem;
          text-align: center;
        }
      `}</style>
    </>
  );
};
