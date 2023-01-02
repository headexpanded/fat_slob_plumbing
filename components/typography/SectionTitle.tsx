// define properties of Section Titles

type SectionTitleProps = {
  content?: string;
  color?: string;
};

export const SectionTitle = ({ content, color }: SectionTitleProps) => {
  return (
    <>
      <div className="sectionTitle">
        <h2>{content}</h2>
      </div>

      <style jsx>{`
        h2 {
          color: ${color ?? ""};
          font-size: clamp(1rem, 30vw, 60px);
        }
      `}</style>
    </>
  );
};
