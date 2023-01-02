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

        <Spacer />
        <div className="heroStrap">
          <Typography.Hero content="can" color="var(--defaultLight)" />
          <Typography.HeroEM content="your" color="var(--defaultLight)" />
          <Typography.Hero
            content="lav take a big load?"
            color="var(--defaultLight)"
          />
        </div>

        <Spacer />

        <div className="heroIntroText">
          <Typography.ParaL content="Imagine it." color="var(--defaultLight)" />
          <Typography.ParaL
            content="Got vistors - suddenly your lav blocks up."
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

        <Typography.ParaC
          content="Not sure? Here's what our customers say..."
          color="var(--defaultLight)"
        />

        {/* <Button variant="outline-secondary">MAKE A BOOKING</Button>
            
            
              <Button variant="outline-secondary">BUY A FRANCHISE</Button> */}
      </section>

      <style jsx>{`
        .heroSection {
          position: relative;
        }

        .heroStrap {
          display: flex;
          justify-content: center;
          align-items: baseline;

          .heroStrap p:first-child {
            padding-right: 12px;
          }
        }
        .heroIntroText {
          border: 2px solid red;
          position: absolute;
          top: 40vh;
          left: 10vw;
        }
      `}</style>
    </>
  );
};
