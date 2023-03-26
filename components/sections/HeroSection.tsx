// define Intro Section properties
import { useState } from "react";
import { Typography } from "../typography";
import { Spacer } from "./Spacer";
import Image from "next/image";
import staffPhoto from "../../assets/img/staffPhoto.png";
import { HeroTextAnimation } from "../animations/HeroTextAnimation";

type HeroSectionProps = {};

export const HeroSection = () => {
  const [showBookingsDiv, setShowBookingsDiv] = useState(false);
  return (
    <>
      <section className="heroSection">
        <Spacer />
        <Typography.Title content="Fat Slob Plumbing" />

        {/* <HeroTextAnimation></HeroTextAnimation> */}

        <div className="heroStrap">
          <Typography.SubHeader
            content="can YOUR lav flush a big load?"
            color="var(--defaultLight)"
          />
        </div>

       

        <div className="heroBlock">
          <div className="heroIntroText">
            <Typography.ParaL
              content="Imagine it."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="Friends over - and your lav blocks up."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="You don't need that."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="So hire us."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="Fat Slob Plumbing."
              color="var(--defaultDark)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="England's number 2 toilet testing service."
              color="var(--defaultLight)"
              fontWeight="900"
            />
            <Typography.ParaL
              content="We'll give it a good stress test."
              color="var(--defaultLight)"
              fontWeight="900"
            />
          </div>
          <div className="heroFatSlobs">
            <Image
              alt="Photo of Fat Slob Plumbing staff"
              width={2609}
              height={3914}
              src={staffPhoto}
              priority
            />
          </div>
        </div>
        <Spacer />
        <Spacer />

        <div className="buttonWrapper">
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
              <Typography.ParaC content="Sorry mate. The calendar's completely blocked up." />
              <button
                className="calendarButton"
                onClick={() => setShowBookingsDiv(false)}
              >
                CLOSE
              </button>
            </div>
          )}
        </div>

        <Spacer />
        <Spacer />
        

        <Typography.SubHeader
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
          display: flex;
          justify-content: space-evenly;
          margin-top: 1rem;
          width: clamp(240px, 60vw + 36px, 600px);
          .heroStrap p:last-child {
            // padding-right: 1rem;
          } */
        }
        .heroBlock {
          display: flex;
          flex-direction: column;
          place-items: center;
        }

        .heroIntroText {
          max-width: 90%;
        }

        .buttonWrapper {
          display: flex;
          place-items: center;
        }

        .calendarBlocked {
          align-items: center;
          background: red;
          box-shadow: var(--boxshadow);
          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: center;
          padding: 1.5rem;
          width: 100%;
        }
        .heroFatSlobs {
          display: none;
        }

        @media screen and (min-width: 640px) {
          .heroBlock {
            flex-direction: row;
            justify-content: space-between;
          }
          .heroIntroText {
            left: 200vw;
            padding-left: 20px;
            width: 50%;
          }
          .heroFatSlobs {
            display: inline-block;
            height: 400px;
            overflow: hidden;
            margin-top: -40px;
            margin-left: 20px;
            width: 50%;
          }
        }

        @media screen and (min-width: 1028px) {
          .heroIntroText {
            margin-left: 40px;
          }
          .heroFatSlobs {
            height: 440px;
            margin-right: 60px;
            margin-top: -44px;
            overflow: hidden;
            z-index: 1;
          }

          .buttonWrapper {
            flex-direction: column;
            place-items: center;
            z-index: +2;
          }
        }
      `}</style>
    </>
  );
};
