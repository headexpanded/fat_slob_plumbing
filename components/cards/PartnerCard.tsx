import Image from 'next/image';
import { size } from '../../styles/breakpoints';
import { Typography } from '../typography';
import { Suspense } from 'react';

// define PartnerCard properties

type PartnerCardProps = {
  title: string;
  desc: string;
  photo: string;
};

// define PartnerCard component
export const PartnerCard = ({ title, desc, photo }: PartnerCardProps) => {
  // define image style
  const imageStyle = {
    filter: 'grayscale(100%) contrast(90%) brightness(90%)',
  };

  return (
    <>
      <div className="partnerCard">
        <Suspense fallback={<div>Loading...</div>}>
          <h1>{title}</h1>
          <picture className="picture">
            <Image
              alt={'Photo of ' + title}
              src={photo}
              width={300}
              height={225}
              loading="lazy"
              style={imageStyle}
            />
          </picture>
          <div className="partnerDesc">
            <Typography.ParaL
              color="var(--clr-text-dark)"
              content={desc}
              fontSize="0.75rem"
              fontWeight="700"
              lineHeight="1rem"
              padding="1rem"
              width="90%"
            />
          </div>
        </Suspense>
      </div>

      <style jsx>{`
        .partnerCard {
          align-items: center;
          background-color: var(--clr-bg-light);
          border: 1px solid var(--clr-bg-light);
          border-radius: var(--borderRadius);
          box-shadow: var(--boxShadow);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 340px;
          inline-size: 320px;
        }

        .partnerCard h1 {
          color: var(--clr-text-dark);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          padding: 1rem 0;
          text-align: center;
        }

        @media screen and (min-width: ${size.desktop}) {
          .partnerCard {
            inline-size: 400px;
          }
        }

        .partnerCard h3 {
          color: var(--clr-text-dark);
          font-weight: 700;
          margin: 0;
          padding: 1rem 0;
        }

        .partnerDesc {
          display: flex;
          flex-direction: row;
          justify-content: center;
          text-align: center;
          width: calc(100% - 1rem);
        }
      `}</style>
    </>
  );
};
