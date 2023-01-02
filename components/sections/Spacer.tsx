// define Hero text component
type SpacerProps = {
  content?: string;
};

export const Spacer = ({ content }: SpacerProps) => {
  return (
    <>
      <div className="spacer">{content}</div>
      <style jsx>{`
        .spacer {
          height: 2rem;
        }
      `}</style>
    </>
  );
};
