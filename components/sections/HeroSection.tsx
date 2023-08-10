// define Intro Section properties
import { useState, Suspense } from 'react';
import Image from 'next/image';

import { Title, SubHeader, ParaL, ParaC } from '@typography/index';
import { Spacer, Button, CalendarButton, Spinner } from '@utils/index';
import { size } from '@styles/breakpoints';
import staffPhoto from '@assets/img/staffPhoto.png';

type HeroSectionProps = {};

export const HeroSection = () => {
  const [showBookingsDiv, setShowBookingsDiv] = useState(false);

  return (
    <>
      <section className="heroSection">
        <Spacer />
        <Spacer />
        <Title content="Fat Slob Plumbing" />

        <div className="heroStrap">
          <SubHeader content="can YOUR lav flush a big load?" />
        </div>

        <div className="heroBlock">
          <div className="heroIntroText">
            <ParaL content="Imagine it." />
            <ParaL content="Friends over - and your lav blocks up." />
            <ParaL content="You don't need that." />
            <ParaL content="So hire us." />
            <ParaL
              content="Fat Slob Plumbing."
              color="var(--clr-text-primary)"
            />
            <ParaL content="England's number 2 toilet testing service." />
            <ParaL content="We'll give it a good stress test." />
          </div>
          <div className="heroFatSlobs">
            <Suspense fallback={<Spinner />}>
              <Image
                alt="Photo of Fat Slob Plumbing staff"
                width={2609}
                height={3914}
                src={staffPhoto}
                priority
              />
            </Suspense>
          </div>
        </div>
        <Spacer />

        <div className="buttonWrapper">
          {!showBookingsDiv ? (
            <div className="heroButtons">
              <Button
                btnText="BOOK NOW"
                onClick={() => setShowBookingsDiv(true)}
              />
              <Spacer />
              <a href="#franchisesSection">
                <Button btnText="FRANCHISES" />
              </a>
            </div>
          ) : (
            <div className="calendarBlocked animated fadeInUp">
              <ParaC
                content="Sorry mate. The calendar's completely blocked up."
                color="var(--clr-text-light)"
              />
              <CalendarButton
                btnText="CLOSE"
                onClick={() => setShowBookingsDiv(false)}
              />
            </div>
          )}
        </div>

        <Spacer />
        <Spacer />

        <SubHeader content="Not sure? Here's what our customers say..." />
      </section>

      <style jsx>{`
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
