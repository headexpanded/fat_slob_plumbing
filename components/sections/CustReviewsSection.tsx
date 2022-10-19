// define div to hold Customer Review cards
import { Cards } from "../cards";
import { Typography } from "../typography";
import { request, gql } from "graphql-request";
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
      <section className="custReviewsSection">
        <div className="custReviewsTitle">
          <Typography.SectionTitle content="Customer Reviews" color="#7b6e4d" />
        </div>
        <div className="container d-flex flex-row align-items-center justify-content-center px-4 pb-2">
          <div className="row  gap-3">
            {/*  extract key from custReviews, spread the rest into CustReviewCard component */}

            {data?.map(({ id, ...other }) => {
              return (
                <div className="col-lg" key={id}>
                  <Cards.CustReviewCard {...other} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        .custReviewsSection {
          background-color: var(--coffee);
          min-height: 100vh;
          padding: 28px 0px 0px 0px;
        }

        .custReviewsTitle {
        }
      `}</style>
    </>
  );
};
