import { Suspense } from 'react';
import { size } from '../../styles/breakpoints';

// define CustReviewCard properties
type CustReviewCardProps = {
  review: string;
  customerName: string;
  photo: string;
};

// define CustReviewCard component
export const CustReviewCard = ({
  review,
  customerName,
  photo,
}: CustReviewCardProps) => {
  return (
    <>
      <div className="custReviewCard">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="custReview">
            <img src={photo} alt="Customer photo" loading="lazy" />
            <p>{review}</p>
          </div>
          <div className="custNameWrapper">
            <div className="custName">
              <p>- {customerName}</p>
            </div>
          </div>

          <div className="imgWrapper"></div>
        </Suspense>
      </div>

      <style jsx>{`
        .custReviewCard {
          background-color: var(--clr-bg-light);
          border-radius: var(--borderRadius);
          padding: 0.5rem;
          box-shadow: var(--boxShadow);
          width: 320px;
        }
        @media screen and (min-width: ${size.mobile}) {
          .custReviewCard {
            width: 400px;
          }
        }

        p {
          color: var(--clr-text-hi-contrast);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 0px 0.5rem;
          margin: 0px;
        }

        .custReview {
          padding-top: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .custNameWrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin: 1rem;
        }

        .custName p {
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
