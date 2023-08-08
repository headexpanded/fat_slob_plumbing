// define Intro Section properties
import { useState, Suspense } from 'react';
import { Typography } from '../typography';
import { Utils } from '../utils';
import Image from 'next/image';
import staffPhoto from '../../assets/img/staffPhoto.png';
import { size } from '../../styles/breakpoints';

type HeroSectionProps = {};

export const HeroSection = () => {
  const [showBookingsDiv, setShowBookingsDiv] = useState(false);
  return (
    <>
      <section className="heroSection">
        <Utils.Spacer />
        <Utils.Spacer />
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
            <Suspense fallback={<div>Loading...</div>}>
              <Image
                alt="Photo of Fat Slob Plumbing staff"
                width={2609}
                height={3914}
                src={staffPhoto}
                loading="lazy"
              />
            </Suspense>
          </div>
        </div>
        <Utils.Spacer />

        <div className="buttonWrapper">
          {!showBookingsDiv ? (
            <div className="heroButtons">
              <Utils.Button
                btnText="BOOK NOW"
                onClick={() => setShowBookingsDiv(true)}
              />
              <Utils.Spacer />
              <a href="#franchisesSection">
                <Utils.Button btnText="FRANCHISES" />
              </a>
            </div>
          ) : (
            <div className="calendarBlocked animated fadeInUp">
              <Typography.ParaC
                content="Sorry mate. The calendar's completely blocked up."
                color="var(--clr-text-light)"
              />
              <Utils.CalendarButton
                btnText="CLOSE"
                onClick={() => setShowBookingsDiv(false)}
              />
            </div>
          )}
        </div>

        <Utils.Spacer />
        <Utils.Spacer />

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
          inline-size: min(100% - 4rem, 90rem);
        }

        .heroIntroText {
          max-width: 90%;
        }

        .buttonWrapper {
          display: flex;
          flex-direction: column;
          place-items: center;
        }

        .calendarBlocked {
          align-items: center;
          background: var(--clr-bg-secondary);
          border-radius: var(--borderRadius);
          display: flex;
          flex-direction: column;
          height: auto;
          justify-content: center;
          padding: 1.5rem;
          width: 80vw;
        }

        .calendarBlocked > p {
          width: calc(100% - 2rem);
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
          .heroButtons {
            display: flex;
            flex-direction: row;
            gap: 2rem;
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
            flex-direction: row;
            place-items: center;
          }
        }
      `}</style>
    </>
  );
};
