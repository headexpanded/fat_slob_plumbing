// define properties of Section Titles

type SectionTitleProps = {
  content?: string;
  color?: string;
};

export const SectionTitle = ({ content, color }: SectionTitleProps) => {
  return (
    <>
      <div className="sectionTitle">
        <h1>{content}</h1>
      </div>

      <style jsx>{`
        h2 {
          color: var(--defaultDark);
          font-size: clamp(1rem, 30vw, 60px);
          letter-spacing: -0.1rem;
        }
      `}</style>
    </>
  );
};
