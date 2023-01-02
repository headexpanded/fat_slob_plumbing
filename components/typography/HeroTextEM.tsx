// define Hero text component
type HeroTextEMProps = {
  content: string;
  color?: string;
};

export const HeroTextEM = ({ content, color }: HeroTextEMProps) => {
  return (
    <>
      <span className="heroTextEM">{content}</span>
      <style jsx>{`
        .heroTextEM {
          color: ${color ?? ""};
          font-size: 2rem;
          font-weight: 800;
          padding: 0px .5rem;
          text-align: center;
          text-transform: uppercase;
        }

        


      `}</style>
    </>
  );
};
