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
        <div className="partnerDesc">
          <p>{desc}</p>
        </div>
      </div>

      <style jsx>{`
        .partnerCard {
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius);
          place-items: center;
          box-shadow: var(--boxshadow);
        }

        .partnerCard > img {
          background-size: cover;
          background-position: center;
          border-radius: var(--borderRadius);
          filter: grayscale(100%);
          height: 200px;
          aspect-ratio: 1/1;
        }
        .partnerDesc {
          min-height: 20%;
        }

        .partnerDesc > p {
          padding: 0.75rem;
          font-size:.75rem;
        }
      `}</style>
    </>
  );
};
