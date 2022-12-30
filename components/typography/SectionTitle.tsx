// define properties of Section Titles

// define Section Title Dark type properties
type SectionTitleProps = {
  content?: string;
  color?: string;
};

export const SectionTitle = ({ content, color }: SectionTitleProps) => {
  return (
    <>
      <div className="sectionTitle">
        <h2>{content}</h2>
        <div className="topLink">
          <a href="#">Back To Top</a>
        </div>
      </div>

      <style jsx>{`
        h2 {
          color: ${color ?? ""};
        }
        .topLink {
        }
      `}</style>
    </>
  );
};
