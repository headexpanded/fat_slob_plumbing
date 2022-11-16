// define Customer Reviews section

import { Cards } from "../cards";
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export type CustomerReview = {
  customerName: string;
  review: string;
  id: string;
  photo: string;
};

type CustReviewsSectionProps = {
  custData: Array<CustomerReview>;
};

export const CustReviewsSection = ({ custData }: CustReviewsSectionProps) => {
  return (
    <>
      <section id="custReviews" className="custReviewsSection">
        <div>
          <Typography.SectionTitle
            content="Happy Customers"
            color="var(--solidBrown)"
          />
        </div>
        <Container>
          <Row className="gap-3">
            {custData.map(({ id, ...other }) => {
              return (
                <div className="col-lg" key={id}>
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
