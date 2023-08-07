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
    filter: 'grayscale(100%)',
  };

  return (
    <>
      <div className="partnerCard">
        <Suspense fallback={<div>Loading...</div>}>
          <h3>{title}</h3>
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
              color="var(--clr-text-secondary)"
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
            width: 320px;
          }
        }

        @media screen and (min-width: ${size.desktop}) {
          .partnerCard {
            width: 400px;
          }
        }

        .partnerCard h3 {
          color: var(--clr-text-secondary);
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
