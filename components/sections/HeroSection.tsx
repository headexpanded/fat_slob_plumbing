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
        <Typography.Title content="Fat Slob Plumbing" />

        <HeroTextAnimation></HeroTextAnimation>

        {/* <Spacer /> */}
        <div className="heroStrap">
          <Typography.ParaC content="can" color="var(--defaultLight)" />
          <Typography.SubHeader content=" your " color="var(--defaultLight)" />
          <Typography.ParaC
            content="lav take a big load?"
            color="var(--defaultLight)"
          />
        </div>

        <Spacer />

        <div className="heroIntroText">
          <Typography.ParaL content="Imagine it." color="var(--defaultLight)" />
          <Typography.ParaL
            content="Friends over - and your lav blocks up."
            color="var(--defaultLight)"
          />
          <Typography.ParaL
            content="You don't need that."
            color="var(--defaultLight)"
          />
          <Typography.ParaL content="So hire us." color="var(--defaultLight)" />
          <Typography.ParaL
            content="We'll give it a good stress test."
            color="var(--defaultLight)"
          />
        </div>
        <Spacer />
        <Spacer />
        <div className="heroButtons">
          <button className="btnBooking">MAKE A BOOKING</button>
          <Spacer />
          <button className="btnFranchise">BUY A FRANCHISE</button>
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
          position: relative;
        }

        .heroStrap {
          align-items: baseline;
          display: flex;
          justify-content: space-evenly;
          margin-top: 1rem;
          width: clamp(240px, 60vw + 36px, 200px);
          .heroStrap p:last-child {
            padding-right: 1rem;
          }
        }
        .heroIntroText {
          position: absolute;
          top: 40vh;
          left; 10vw;
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
