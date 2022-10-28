// define properties of Section Title Dark text

// define Section Title Dark type properties
type SectionTitleProps = {
  content?: string;
  color?: string;
};

export const SectionTitle = ({ content, color }: SectionTitleProps) => {
  return (
    <>
      <h2>{content}</h2>
      <style jsx>{`
        h2 {
          color: ${color ?? ""};

          text-transform: uppercase;
          font-size: 5rem;
          font-weight: 800;
          line-height: 1.1;
          padding: 48px 4px 80px 4px;
          text-align: center;
          font-size: 46px;
          letter-spacing: -0.1rem;
        }
      `}</style>
    </>
  );
};
