// define properties of centered paragraph texts

type FooterTextProps = {
  content: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  paddingTop?: string;
};

// define Paragraph component
export const FooterText = ({
  content,
  color,
  fontSize,
  fontWeight,
  paddingTop,
}: FooterTextProps) => {
  return (
    <>
      <span>{content}</span>
      <style jsx>{`
        span {
          color: ${color ?? ''};
          font-size: ${fontSize ?? '2rem'};
          font-weight: ${fontWeight ?? '700'};
          padding-top: ${paddingTop ?? '0rem'};
          text-align: center;
        }
      `}</style>
    </>
  );
};
