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

        <Typography.ParaL content=" " color="var(--solidBrown)" />

        <Typography.ParaL
          content=" Our experienced
                professionals visit your home."
          color="var(--solidBrown)"
        />

        <Typography.ParaL
          content="By the time we
                        leave, you'll know for sure if your
                        system can take it - or not!"
          color="var(--solidBrown)"
        />

        <div>
          <div>
            <div></div>
            <div>
              <Typography.ParaL
                content="In the 24 hours before your appointment, 
                    your Fat Slob Plumber ingests a carefully formulated blend of food and drink to ensure optimal performance."
                color="var(--solidBrown)"
              />
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <div>
              <Typography.ParaL
                content=" 
                    We also consume a mix of supplementary nutriments when we arrive at your home - like coffee, cigarettes, & Coke - to make sure there's no waiting around."
                color="var(--solidBrown)"
              />
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>
            <div></div>
            <div>
              <Typography.ParaL
                content="The precise blend and quantity of solids and liquids 
                    consumed by Fat Slob Plumbing depends on the Service Level you choose: see below."
                color="var(--solidBrown)"
              />
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .howWeWorkSection {
          height: 100vh;
        }

        .howWeWorkTitle {
        }
      `}</style>
    </>
  );
};
