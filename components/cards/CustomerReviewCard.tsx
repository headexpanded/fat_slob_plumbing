import { Suspense } from 'react';

import { size } from '@styles/breakpoints';

// define CustomerReviewCard properties
type CustomerReviewCardProps = {
  review: string;
  customerName: string;
  photo: string;
};

// define CustomerReviewCard component
export const CustomerReviewCard = ({
  review,
  customerName,
  photo,
}: CustomerReviewCardProps) => {
  return (
    <>
      <div className="customerReviewCard">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="customerReview">
            <img src={photo} alt="Customer photo" loading="lazy" />
            <p>{review}</p>
          </div>
          <div className="customerNameWrapper">
            <div className="customerName">
              <p>- {customerName}</p>
            </div>
          </div>

          <div className="imgWrapper"></div>
        </Suspense>
      </div>

      <style jsx>{`
        .customerReviewCard {
          background-color: var(--clr-bg-light);
          border-radius: var(--borderRadius);
          padding: 0.5rem;
          box-shadow: var(--boxShadow);
          width: 320px;
          overflow: hidden;
        }
        @media screen and (min-width: ${size.mobile}) {
          .customerReviewCard {
            width: 400px;
          }
        }

        .customerReview {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        @media screen and (min-width: ${size.mobile}) {
          .customerReview {
            flex-direction: row;
          }
        }

        .customerReview p {
          color: var(--clr-text-hi-contrast);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 0px 0.5rem;
          margin: 0px;
        }

        .customerNameWrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin: 1rem;
        }

        .customerName p {
          font-size: 1rem;
        }

        img {
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          filter: grayscale(90%) contrast(90%) brightness(90%);
          height: 140px;
          aspect-ratio: 1/1;
        }
      `}</style>
    </>
  );
};
