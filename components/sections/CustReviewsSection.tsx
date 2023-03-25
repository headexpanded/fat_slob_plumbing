// define Customer Reviews section

import { Cards } from "../cards";
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

export type CustomerReview = {
  id: string;
  customerName: string;
  review: string;
  photo: string;
};

type CustReviewsSectionProps = {
  data: Array<CustomerReview>;
};

export const CustReviewsSection = ({ data }: CustReviewsSectionProps) => {
  return (
    <>
      <section id="custReviews" className="custReviewsSection">
        <Spacer />
        <Spacer />
        <div>
          <Typography.SectionTitle
            content="Happy Customers"
            color="var(--defaultFontColor)"
          />
        </div>
        <Spacer />

        {/*  extract key from custReviews, spread the rest into CustReviewCard component */}

        <div className="custReviewCards">
          {data?.map(({ id, ...other }) => {
            return (
              <div key={id}>
                <Cards.CustReviewCard {...other} />
              </div>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .custReviewCards {
          width: 90vw;
          display: grid;
          gap: 5rem;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          justify-content: space-evenly;
          margin-bottom: 4rem;
          place-items: center;
        }
      `}</style>
    </>
  );
};
