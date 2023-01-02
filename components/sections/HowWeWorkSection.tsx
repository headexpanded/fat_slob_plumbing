// define How We Work Section
import { Typography } from "../typography";

type HowWeWorkSectionProps = {};

export const HowWeWorkSection = () => {
  return (
    <>
      <section className="howWeWorkSection">
        <Typography.SectionTitle
          content="How We Work"
          color="var(--defaultFontColor)"
        />

        <Typography.ParaL
          content=" Our experienced
                professionals visit your home."
          color=""
        />

        <Typography.ParaL
          content="By the time we
                        leave, you'll know for sure if your
                        system can take it - or not!"
          color=""
        />

        <Typography.ParaL
          content="In the 24 hours before your appointment, 
                    your Fat Slob Plumber ingests a carefully formulated blend of food and drink to ensure optimal performance."
          color=""
        />

        <Typography.ParaL
          content=" 
                    We also consume a mix of supplementary nutriments when we arrive at your home - like coffee, cigarettes, & Coke - to make sure there's no waiting around."
          color=""
        />

        <Typography.ParaL
          content="The precise blend and quantity of solids and liquids 
                    consumed by Fat Slob Plumbing depends on the Service Level you choose: see below."
          color=""
        />
      </section>

      <style jsx>{``}</style>
    </>
  );
};
