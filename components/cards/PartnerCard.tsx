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
        <picture className="picture">
          <img src={photo} alt={"Photo of " + title} loading="lazy" />
        </picture>
        <div className="partnerDesc">
          <p>{desc}</p>
        </div>
      </div>

      <style jsx>{`
        .partnerCard {
          background-color: var(--defaultLight);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--defaultLight);
          align-items: center;
          justify-content: center;
          box-shadow: var(--boxshadow);
          min-height: 340px;
          width: 320px;
        }

        /* @media screen and (min-width: 640px) {
          .partnerCard {
            // width: 320px;
          }
        } */

        .partnerCard > h3 {
          margin: 0;
          padding: 1rem 0;
        }

        .picture > img {
          background-size: cover;
          background-position: center;
          border: 1px solid var(--defaultLight);
          border-radius: var(--borderRadius);
          filter: grayscale(100%);
          height: 200px;
          aspect-ratio: 1/1;
        }

        .partnerDesc {
          // border: 2px solid red;
        }

        .partnerDesc > p {
          font-size: 0.75rem;
          font-weight: 700;
          text-align: left;
          margin: 0px;
          padding: 1rem;
          color: var(--defaultDark);
        }
      `}</style>
    </>
  );
};
