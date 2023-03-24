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
      </div>

      <style jsx>{`
        .custReviewCard {
          background-color: var(--defaultLight);
          border-radius: 4px;
          padding: 0.5rem;
          box-shadow: 1px 0px 10px 0px var(--defaultDark);
        }
        @media screen and (min-width: 640px) {
          .custReviewCard {
            min-width: 400px;
          }
        }

        p {
          color: var(--defaultDark);
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
          border: 2px solid var(--defaultLight);
          border-radius: 50%;
          filter: grayscale(90%) contrast(90%) brightness(90%);
          height: 80px;
          aspect-ratio: 1/1;
        }
      `}</style>
    </>
  );
};
