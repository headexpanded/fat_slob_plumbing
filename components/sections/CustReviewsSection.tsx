// define Customer Reviews section

import { Cards } from "../cards";
import { Typography } from "../typography";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export type CustomerReview = {
  customerName: string;
  review: string;
  id: string;
  photo?: string;
};

type CustReviewsSectionProps = {
  data: Array<CustomerReview>;
};

export const CustReviewsSection = ({ data }: CustReviewsSectionProps) => {
  return (
    <>
      <section id="custReviews" className="custReviewsSection">
        <div className="custReviewsTitle">
          <Typography.SectionTitle
            content="You What?"
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
            var(--hinOfBrown)
          );
          min-height: 80vh;
          padding: 40px 0px 20px 0px;
        }

        .custReviewsTitle {
        }
      `}</style>
    </>
  );
};
