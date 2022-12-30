// define Intro Section properties
import { Typography } from "../typography";

type IntroSectionProps = {};

export const IntroSection = () => {
  return (
    <>
      <section id="intro" className="introSection">
        <div className="introTitle">
          <Typography.Hero
            content="Fat Slob Plumbing"
            color="var(--solidBrown)"
          />
        </div>

        <div className="introText">
          <Typography.ParaC
            content="Can your home system flush a big load?"
            color="var(--solidBrown)"
          />

          <Typography.ParaC
            content="Take our advice - you need to stress test your facilities, NOW!"
            color="var(--solidBrown)"
          />

          <Typography.ParaC
            content="Because no-one likes a surprise blockage!"
            color="var(--solidBrown)"
          />
        </div>
      </section>

      <style jsx>{`
        .introSection {
          height: 100vh;
        }
        .introText {
        }
      `}</style>
    </>
  );
};
