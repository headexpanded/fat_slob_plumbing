// define Customer Reviews section

import { CustomerReviewCard } from '@cards/CustomerReviewCard';
import { Typography } from '@typography/index';
import { Spacer } from '@utils/index';
import { size } from '@styles/breakpoints';

export type CustomerReview = {
  id: string;
  customerName: string;
  review: string;
  photo: string;
};

type CustomerReviewsSectionProps = {
  data: Array<CustomerReview>;
};

export const CustomerReviewsSection = ({
  data,
}: CustomerReviewsSectionProps) => {
  return (
    <>
      <section id="customerReviews" className="customerReviewsSection">
        <Spacer />
        <Spacer />
        <div>
          <Typography.SectionTitle
            content="Happy Customers"
            color="var(--clr-text-primary)"
          />
        </div>
        <Spacer />

        {/*  extract key from customerReviews, spread the rest into CustomerReviewCard component */}

        <div className="customerReviewCards">
          {data?.map(({ id, ...other }) => {
            return (
              <div key={id}>
                <CustomerReviewCard {...other} />
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
          grid-template-columns: repeat(auto-fit, minmax(40%, 400px));
          justify-content: space-evenly;
          margin-bottom: 4rem;
          place-items: center;
        }

        @media screen and (min-width: ${size.mobile}) {
          .customerReviewCards {
            inline-size: calc(80vw + 8rem);
            max-inline-size: 72rem;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};
