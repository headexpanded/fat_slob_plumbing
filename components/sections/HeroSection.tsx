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

        <Typography.Hero content="can" color="var(--defaultFontColor)" />
        <Typography.HeroEM content="your " color="var(--defaultFontColor)" />
        <Typography.Hero
          content="lav take a big load?"
          color="var(--defaultFontColor)"
        />

        <Spacer />

        <Typography.ParaC
          content="Imagine it."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="Got vistors - suddenly your lav blocks up."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="You don't need that."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="So hire us - we'll stress test it for you!"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="Not sure? Here's what our customers say..."
          color="var(--defaultFontColor)"
        />

        {/* <Button variant="outline-secondary">MAKE A BOOKING</Button>
            
            
              <Button variant="outline-secondary">BUY A FRANCHISE</Button> */}
      </section>

      <style jsx>{`
        .heroSection {
        }
      `}</style>
    </>
  );
};
