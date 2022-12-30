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
      <div className="partnerCard">
        <h3>{title}</h3>
        <img src={photo} alt={"Photo of " + title} />
        <p>{desc}</p>
      </div>
      <style jsx>{`
        .partnerCard {
          border-radius: var(--borderRadius);
          color: var(--defaultFontColor);
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          place-items: center;
          text-align: center;
        }

        .partnerCard h3 {
          font-size: 2rem;
          font-weight: 700;
          padding: inherit;
        }

        .partnerCard p {
          font-size: 1rem;
          font-style: italic;
          font-weight: 400;
          padding: inherit;
        }

        img {
          background-size: cover;
          background-position: center;
          border: 2px solid var(--coffee);
          border-radius: var(--borderRadius);
          filter: grayscale(100%);
          height: 16rem;
          aspect-ratio: 1/1;
        }
      `}</style>
    </>
  );
};
