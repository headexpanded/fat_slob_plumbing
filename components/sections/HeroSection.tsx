// define Intro Section properties
import { Typography } from "../typography";

import { Spacer } from "./Spacer";
import { HeroTextAnimation } from "../animations/HeroTextAnimation";

type HeroSectionProps = {};

export const HeroSection = () => {
  return (
    <>
      <section className="heroSection">
        <Typography.Title content="Fat Slob Plumbing" />

        <HeroTextAnimation></HeroTextAnimation>

        <Spacer />

        <Typography.Hero content="can" color="var(--solidBrown)" />
        <Typography.HeroEM content="your " color="var(--solidBrown)" />
        <Typography.Hero
          content="lav take a big load?"
          color="var(--solidBrown)"
        />

        <Spacer />

        <Typography.ParaC content="Imagine it." color="var(--solidBrown)" />

        <Typography.ParaC
          content="Got vistors - suddenly your lav blocks up."
          color="var(--solidBrown)"
        />

        <Typography.ParaC
          content="You don't need that."
          color="var(--solidBrown)"
        />

        <Typography.ParaC
          content="So hire us - we'll stress test it for you!"
          color="var(--solidBrown)"
        />

        <Typography.ParaC
          content="Not sure? Here's what our customers say..."
          color="var(--solidBrown)"
        />

        {/* <Button variant="outline-secondary">MAKE A BOOKING</Button>
            
            
              <Button variant="outline-secondary">BUY A FRANCHISE</Button> */}
      </section>

      <style jsx>{`
        .heroSection {
          height: 100vh;
          text-align: center;
        }
      `}</style>
    </>
  );
};
