// define Customer Reviews section

import { Cards } from "../cards";
import { Typography } from "../typography";

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
        <div>
          <Typography.SectionTitle
            content="Happy Customers"
            color="var(--defaultFontColor)"
          />
        </div>

        {/*  extract key from custReviews, spread the rest into CustReviewCard component */}
        {data?.map(({ id, ...other }) => {
          return (
            <div key={id}>
              <Cards.CustReviewCard {...other} />
            </div>
          );
        })}
      </section>

      <style jsx>{`
        .custReviewsSection {
        }
      `}</style>
    </>
  );
};
