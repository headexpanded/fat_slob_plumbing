// define CustReviewCard properties
type CustReviewCardProps = {
  review: string;
  customerName: string;
  photo?: string;
};

// define CustReviewCard component
export const CustReviewCard = ({
  review,
  customerName,
  photo,
}: CustReviewCardProps) => {
  return (
    <>
      <div className="px-1 mt-1 mb-1 custReviewCard">
        <div className="custReview">
          <p>{review}</p>
        </div>
        <div className="custNameWrapper">
          <div className="custName">
            <p>- {customerName}</p>
          </div>
        </div>

        <div className="imgWrapper">
          <img src={photo} alt="Customer photo" />
        </div>
      </div>
      <style jsx>{`
        .custReviewCard {
          background-color: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 10px;
          height: auto;
          position: relative;
          text-align: left;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .custReview p {
          color: var(--solidBrown);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 52px 8px 0px 8px;
        }

        .custNameWrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: 20px;
        }
        .custName p {
          color: var(--solidBrown);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 4px 8px 0px 8px;
        }
        img {
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          filter: sepia(100%);
          height: 80px;
          width: 80px;
        }

        .imgWrapper {
          background: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 50%;
          position: absolute;
          top: -40px;
          left: 150px;
        }
      `}</style>
    </>
  );
};
