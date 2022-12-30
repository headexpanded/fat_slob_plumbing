// define PartnerCard properties

type PartnerCardProps = {
  title: string;
  desc: string;
  photo: string;
};

// define PartnerCard component
export const PartnerCard = ({ title, desc, photo }: PartnerCardProps) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={photo} alt={"Photo of " + title} />
      <p>{desc}</p>

      <style jsx>{`
        p {
          width: 80%;
        }
        img {
          background-size: cover;
          background-position: center;
          border: 0;
          border-radius: var(--borderRadius);
          filter: grayscale(100%);
          width: 300px;
          aspect-ratio: 1/1;
        }
      `}</style>
    </>
  );
};
