// define Customer Reviews section

import { Cards } from "../cards";
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export type CustomerReview = [
  {
    id: string;
    customerName: string;
    review: string;
    photo: string;
  }
];

type CustReviewsSectionProps = {
  data: Array<CustomerReview>;
};

export const CustReviewsSection = ({ data }: CustReviewsSectionProps) => {
  return (
    <>
      <section id="custReviews" className="custReviewsSection">
        <div>
          <Typography.SectionTitle
            content="Happy Customers and fings"
            color="var(--solidBrown)"
          />
        </div>
        <Container>
          <Row className="gap-3">
            {/*  extract key from custReviews, spread the rest into CustReviewCard component */}
            {data?.map(({ id, ...other }) => {
              return (
                <div className="col d-flex justify-content-center" key={id}>
                  <Cards.CustReviewCard {...other} />
                </div>
              );
            })}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .custReviewsSection {
          background-image: linear-gradient(
            185deg,
            var(--hintOfBrown),
            var(--hintOfBrown)
          );
          min-height: 80vh;
          padding: 40px 0px 20px 0px;
        }
      `}</style>
    </>
  );
};
