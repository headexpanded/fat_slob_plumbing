// define Intro Section properties
import { useState } from 'react';
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';
import Image from 'next/image';
import staffPhoto from '../../assets/img/staffPhoto.png';
import { size } from '../../styles/breakpoints';

type HeroSectionProps = {};

export const HeroSection = () => {
  const [showBookingsDiv, setShowBookingsDiv] = useState(false);
  return (
    <>
      <section className="heroSection">
        <Spacer />
        <Spacer />
        <Typography.Title content="Fat Slob Plumbing" />

        <div className="heroStrap">
          <Typography.SubHeader content="can YOUR lav flush a big load?" />
        </div>

        <div className="heroBlock">
          <div className="heroIntroText">
            <Typography.ParaL content="Imagine it." />
            <Typography.ParaL content="Friends over - and your lav blocks up." />
            <Typography.ParaL content="You don't need that." />
            <Typography.ParaL content="So hire us." />
            <Typography.ParaL
              content="Fat Slob Plumbing."
              color="var(--clr-text-primary)"
            />
            <Typography.ParaL content="England's number 2 toilet testing service." />
            <Typography.ParaL content="We'll give it a good stress test." />
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
              <button onClick={() => setShowBookingsDiv(true)}>BOOKINGS</button>
              <Spacer />
              <a href="#franchisesSection">
                <button>FRANCHISES</button>
              </a>
            </div>
          ) : (
            <div className="calendarBlocked animated fadeInDown">
              <Typography.ParaC
                content="Sorry mate. The calendar's completely blocked up."
                color="var(--clr-text-light)"
              />
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

        <Typography.SubHeader content="Not sure? Here's what our customers say..." />
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
          margin-bottom: 1rem;
          width: clamp(240px, 60vw + 36px, 600px);
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
          background: var(--clr-bg-secondary);

          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: center;
          padding: 1.5rem;
          width: 100%;
        }

        .calendarButton {
          margin-top: 2rem;
          width: max(5vw, 120px);
          color: var(--clr-text-secondary);
          box-shadow: none;
        }

        @media screen and (min-width: ${size.mobile}) {
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

        @media screen and (min-width: ${size.desktop}) {
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
          }
        }
      `}</style>
    </>
  );
};
