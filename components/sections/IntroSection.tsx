// define Intro Section properties
import { Typography } from "../typography";

type IntroSectionProps = {};

export const IntroSection = () => {
  return (
    <>
      <section className="introSection">
        <div className="container d-flex flex-row justify-content-center">
          <div className="row ">
            <div className="col-12 introTitle">
              <Typography.MainTitle
                content="Fat Slob Plumbing"
                color="var(--solidBrown)"
              />
            </div>
          </div>
        </div>

        <div className="introText">
          <div className="container text-center">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <Typography.ParagraphC
                  content="Most home systems can't flush a big load."
                  color="var(--solidBrown)"
                />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="container text-center">
            <div className="row mx-5">
              <div className="col-2"></div>
              <div className="col-8">
                <Typography.ParagraphC
                  content="Take our advice - you need to stress test your system, NOW!"
                  color="var(--solidBrown)"
                />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <Typography.ParagraphC
                  content="Because no-one likes a surprise blockage!"
                  color="var(--solidBrown)"
                />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .introSection {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 160px 0px 0px 0px;
          text-align: center;
        }
        .introText {
          padding: 0px 0px 12px 0px;
        }
      `}</style>
    </>
  );
};
