// define Intro Section properties
import { useState } from "react";
import { Typography } from "../typography";
import { Cards } from "../cards";
import { Spacer } from "./Spacer";
import { HeroTextAnimation } from "../animations/HeroTextAnimation";

type HeroSectionProps = {};

export const HeroSection = () => {
  const [showBookingsDiv, setShowBookingsDiv] = useState(false);
  return (
    <>
      <section className="heroSection">
        <Spacer />
        <Typography.Title content="We Test Toilets" />

        {/* <HeroTextAnimation></HeroTextAnimation> */}

        <div className="heroStrap">
          <Typography.SubHeader
            content="can YOUR lav flush a big load?"
            color="var(--defaultLight)"
          />
        </div>

        <Spacer />

        <div className="heroBlock">
          <div className="heroIntroText">
            <Typography.ParaL
              content="Imagine it."
              color="var(--defaultLight)"
              fontWeight="700"
            />
            <Typography.ParaL
              content="Friends over - and your lav blocks up."
              color="var(--defaultLight)"
              fontWeight="700"
            />
            <Typography.ParaL
              content="You don't need that."
              color="var(--defaultLight)"
              fontWeight="700"
            />
            <Typography.ParaL
              content="So hire us."
              color="var(--defaultLight)"
              fontWeight="700"
            />
            <Typography.ParaL
              content="Fat Slob Plumbing."
              color="var(--defaultDark)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="The U.K.'s number 2 toilet testing service."
              color="var(--defaultLight)"
              fontWeight="700"
            />
            <Typography.ParaL
              content="We'll give it a good stress test."
              color="var(--defaultLight)"
              fontWeight="700"
            />
          </div>
          <div className="heroCustomerCard">
            {/* <div className="custReviewCards">
              {data?.map(({ id, ...other }) => {
                return (
                  <div key={id}>
                    <Cards.CustReviewCard {...other} />
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
        <Spacer />
        <Spacer />

        {!showBookingsDiv ? (
          <div className="heroButtons">
            <button
              className="heroButton btnBooking"
              onClick={() => setShowBookingsDiv(true)}
            >
              MAKE A BOOKING
            </button>
            <Spacer />
            <a href="#franchisesSection">
              <button className="heroButton btnFranchise">
                BUY A FRANCHISE
              </button>
            </a>
          </div>
        ) : (
          <div className="calendarBlocked">
            <Typography.ParaC content="Sorry mate, the calendar's completely blocked up." />
            <button
              className="calendarButton"
              onClick={() => setShowBookingsDiv(false)}
            >
              CLOSE
            </button>
          </div>
        )}

        <Spacer />
        <Spacer />

        <Typography.ParaC
          content="Not sure? Here's what our customers say..."
          color="var(--defaultLight)"
        />
      </section>

      <style jsx>{`
        .heroSection {
        }

        .heroStrap {
          display: flex;
          align-items: baseline;
          /* align-items: baseline;
          display: flex;
          justify-content: space-evenly;
          margin-top: 1rem;
          width: clamp(240px, 60vw + 36px, 600px);
          .heroStrap p:last-child {
            // padding-right: 1rem;
          } */
        }
        .heroBlock {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
        }

        .heroIntroText {
          // border: 1px solid yellow;
          width: 100%;
        }

        .calendarBlocked {
          align-items:center;
          background: red;
          // border: 2px solid var(--defaultDark);
          box-shadow: var(--boxshadow);
          display: flex;
          flex-direction:column;
          height: auto;
          justify-content: center;
          padding: 1.5rem;
          width: 80%;
        }
        .heroCustomerCard {
          // border: 1px solid white;
          display: none;
        }

        @media screen and (min-width: 640px) {
          .heroBlock {
            flex-direction: row;
            justify-content: space-between;
          }
          .heroIntroText {
            left: 200vw;
          }
          .heroCustomerCard {
            // display:none;
          }
        }

        @media screen and (min-width: 1028px) {
          .heroIntroText {
            padding-left: 20px;
            width: 50%;
          }
          .heroCustomerCard {
            display: inline-block;
            width: 50%;
          }
        }
      `}</style>
    </>
  );
};
