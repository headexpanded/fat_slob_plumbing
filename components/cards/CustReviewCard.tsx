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
          <img src={photo} alt="Customer photo" />
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
          height: 220px;
          padding: 0.5rem;
          width: 360px;
          // border-bottom: 1px solid var(--defaultLight);
          box-shadow: 0px 0px 200px 0px white;
        }

        p {
          color: var(--defaultLight);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 0px .5rem;
          margin:0px;
        }

        .custReview {
          padding-top: 1rem;
          display:flex;
          align-items: center;
          gap: .5rem;
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
