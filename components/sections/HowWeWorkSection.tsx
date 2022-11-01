// define How We Work Section
import { Typography } from "../typography";

type HowWeWorkSectionProps = {};

export const HowWeWorkSection = () => {
  return (
    <>
      <section className="howWeWorkSection">
        <div className="howWeWorkTitle">
          <Typography.SectionTitle
            content="How We Work"
            color="var(--solidBrown)"
          />
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphC
                content="We're experts in
                        stress-testing domestic sewage systems."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphL
                content="Our experienced
                        professionals come to your home in the morning. By the time we
                        leave, you'll know for sure if your
                        system can take it - or not!"
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphL
                content="The night before your appointment, 
                    your Fat Slob Plumber ingests a carefully formulated blend of food and drink to ensure optimal performance."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphL
                content=" 
                    We then consume a mix of supplementary nutriments on the morning of your appointment, to make sure there's no waiting around."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Typography.ParagraphL
                content="The precise blend and quantity of solids and liquids 
                    consumed by Fat Slob Plumbing depends on the Service Level you choose: see below."
                color="var(--solidBrown)"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .howWeWorkSection {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }

        .howWeWorkTitle {
        }
      `}</style>
    </>
  );
};
