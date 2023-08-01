import { useCustomerReviewsContext } from '../providers/CustomerReviewsContextProvider';
import { Typography } from '../typography';
import { size } from '../../styles/breakpoints';

const CustomerReviewModal = (props) => {
  const { selectedCustomerReview, setSelectedCustomerReview } =
    useCustomerReviewsContext();
  console.log(selectedCustomerReview);
  if (!selectedCustomerReview) {
    return null;
  }
  const { review, customerName, photo } = selectedCustomerReview;
  return (
    <>
      <div className="modalWrapper">
        <div className="modalDetails">
          {/* <img className="" src={photo} />  */}
          <Typography.ParaC
            content={customerName}
            color={'var(--clr-text-secondary)'}
          ></Typography.ParaC>
          <Typography.ParaL
            content={review}
            color={'var(--clr-text-secondary)'}
          ></Typography.ParaL>

          <button
            className="btnCustReview"
            type="button"
            onClick={() => {
              setSelectedCustomerReview(null);
            }}
          >
            Close
          </button>
        </div>
      </div>
      <style jsx>{`
        .modalWrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modalDetails {
          display: flex;
          flex-direction: column;
          background-color: var(--clr-bg-light);
          overflow-y: auto;
          border-radius: var(--borderRadius);
          padding: 1rem;
          width: 90vw;
          max-width: 600px;
          height: 60vh;
          position: relative;
          z-index: 2;
        }

        .btnCustReview {
          width: min(24vw, 140px);
          margin: auto;
        }

        @media screen and (min-width: ${size.mobile}) {
          .modalWrapper {
            display: grid;
            place-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default CustomerReviewModal;
