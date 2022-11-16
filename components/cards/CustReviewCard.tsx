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
      <div className="custReviewCard px-1 my-3 ">
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
          border-radius: 10px;
          filter: drop-shadow(2px 2px 4px var(--solidBrown));
          min-height: 280px;
          width: 280px;

          position: relative;
          text-align: left;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        p {
          color: var(--solidBrown);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 4px 8px 0px 8px;
        }

        .custReview p {
          padding-top: 52px;
        }

        .custNameWrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: 20px;
        }

        img {
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          filter: grayscale(90%) contrast(90%) brightness(90%);
          height: 80px;
          width: 80px;
        }

        .imgWrapper {
          background: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 50%;
          // filter: drop-shadow(1px 1px 2px var(--solidBrown));
          position: absolute;
          top: -15%;
          left: 40%;
        }
      `}</style>
    </>
  );
};
