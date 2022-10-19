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
        <p>{review}</p>
        <p>
          - {customerName}
          <img className="img-fluid" src={photo} alt="Customer photo" />
        </p>
      </div>
      <style jsx>{`
        .custReviewCard {
          background-color: var(--hintOfBrown);
          border: 2px solid #7b6e4d;
          border-radius: 10px;
          height: auto;
          position: relative;
          text-align: left;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .custReviewCard p {
          color: #7b6e4d;
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          margin: 1rem 0 1rem 0;
          padding: 12px 0px 0px 4px;
        }
        .custReviewCard img {
          border-radius: 50% 50%;
          filter: grayscale(100%);
          position: absolute;
          top: -50px;
          left: -90px;
          padding-left: 24px;
        }
      `}</style>
    </>
  );
};
