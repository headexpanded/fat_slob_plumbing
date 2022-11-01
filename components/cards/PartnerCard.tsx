// define PartnerCard properties

import { Typography } from "../typography";

type PartnerCardProps = {
  title: string;
  desc: string;
  photo: string;
};

export const PartnerCard = ({ title, desc, photo }: PartnerCardProps) => {
  return (
    <>
      <div className="partnerCard">
        <h3>{title}</h3>
        <img src={photo} alt={"Photo of" + title} />
        <p>{desc}</p>
      </div>
      <style jsx>{`
        .partnerCard {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 10px;
          color: var(--solidBrown);
          filter: drop-shadow(8px 8px 12px var(--solidBrown));
          padding: 4px 8px 12px 8px;
        }

        .partnerCard h3 {
          color: var(--solidBrown);
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          padding: 32px 8px 16px 8px;
        }

        .partnerCard p {
          color: var(--solidBrown);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 32px 8px 0px 12px;
          text-align: center;
        }

        img {
          background-size: cover;
          background-position: center;
          border: 2px solid var(--solidBrown);
          border-radius: 10%;
          filter: grayscale(100%);
          height: 300px;
          width: 300px;
        }
      `}</style>
    </>
  );
};
