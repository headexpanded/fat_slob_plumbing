import { size } from '../../styles/breakpoints';
import { Typography } from '../typography';

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
          <img src={photo} alt={'Photo of ' + title} loading="lazy" />
        </picture>
        <div className="partnerDesc">
          <Typography.ParaL
            color="var(--clr-text-secondary)"
            content={desc}
            fontSize="0.75rem"
            fontWeight="700"
            lineHeight="1rem"
            padding="1rem"
            width="90%"
          />
        </div>
      </div>

      <style jsx>{`
        .partnerCard {
          background-color: var(--clr-bg-light);
          border-radius: var(--borderRadius);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--clr-bg-light);
          align-items: center;
          justify-content: center;
          box-shadow: var(--boxShadow);
          min-height: 340px;
          width: 320px;
        }

        @media screen and (min-width: ${size.mobile}) {
          .partnerCard {
            width: 400px;
          }
        }

        @media screen and (min-width: ${size.desktop}) {
          .partnerCard {
            width: 500px;
          }
        }

        .partnerCard h3 {
          color: var(--clr-text-secondary);
          font-weight: 700;
          margin: 0;
          padding: 1rem 0;
        }

        .picture{
          width: 80%;
          display: flex:
          flex-direction: column;
          place-items: center;
        }

        .picture > img {
          background-size: cover;
          background-position: center;
          border: 1px solid var(--clr-bg-light);
          border-radius: var(--borderRadius);
          filter: grayscale(100%);
          height: 80%;
          aspect-ratio: 1/1;
          padding: 0px 20px;
        }

        .partnerDesc {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
