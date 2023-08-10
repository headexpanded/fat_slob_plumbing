// define Customer Reviews section

import { CustReviewCard } from '@cards/CustReviewCard';
import { Typography } from '@typography/index';
import { Spacer } from '@utils/index';

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
            color="var(--clr-text-primary)"
          />
        </div>
        <Spacer />

        {/*  extract key from custReviews, spread the rest into CustReviewCard component */}

        <div className="customerReviewCards">
          {data?.map(({ id, ...other }) => {
            return (
              <div key={id}>
                <CustReviewCard {...other} />
              </div>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .customerReviewCards {
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
