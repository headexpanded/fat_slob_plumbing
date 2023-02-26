// define Intro Section properties
import { Typography } from "../typography";
import { Spacer } from "./Spacer";
import { HeroTextAnimation } from "../animations/HeroTextAnimation";

type HeroSectionProps = {};

export const HeroSection = () => {
  return (
    <>
      <section className="heroSection">
        <Spacer />
        <Typography.Title content="We Test Toilets" />

        {/* <HeroTextAnimation></HeroTextAnimation> */}

        
        <div className="heroStrap">
          
          <Typography.SubHeader
            content="can YOUR lav take a big load?"
            color="var(--defaultLight)"
          />
          
        </div>

        <Spacer />

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
            content="The U.K.'s Number Two toilet testing service."
            color="var(--defaultLight)"
            fontWeight="700"
          />
          <Typography.ParaL
            content="We'll give it a good stress test."
            color="var(--defaultLight)"
            fontWeight="700"
          />
        </div>
        <Spacer />
        <Spacer />
        <div className="heroButtons">
          <button className="heroButton btnBooking">MAKE A BOOKING</button>
          <Spacer />
          <button className="heroButton btnFranchise">BUY A FRANCHISE</button>
        </div>
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
        .heroIntroText {
        }

        @media screen and (min-width: 640px) {
          .heroIntroText {
            left: 200vw;
          }
        }

      `}</style>
    </>
  );
};
