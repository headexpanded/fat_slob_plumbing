// define How We Work Section
import { Typography } from "../typography";
import { Spacer } from "./Spacer";

type HowWeWorkSectionProps = {};

export const HowWeWorkSection = () => {
  return (
    <>
      <section className="howWeWorkSection">
        <Spacer />
        <Typography.SectionTitle
          content="How We Work"
          color="var(--defaultDark)"
        />

        <Typography.ParaL
          content=" Our experienced,
                professional toilet testers visit your home."
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content="By the time we
                        leave, you'll know for sure if your
                        system can take it - or not!"
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content="Every day, your Fat Slob Plumber ingests a carefully formulated blend of food and drink - curries, kebabs, lager, full English, and so on."
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content="This ensures optimal performance."
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content=" 
                    We also consume a mix of supplementary nutriments when we're at your home - like coffee, cigarettes, & Coke - to make sure there's no waiting around."
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content=" 
                    At your request, we bring our own reading material."
          color="var(--defaultLight)"
          fontWeight="700"
        />

        {/* <Typography.ParaL
          content="Want to know the precise blend and quantity of solids and liquids 
                    consumed by Fat Slob Plumbing?"
          color=""
        /> */}
        <Spacer />
      </section>

      <style jsx>{``}</style>
    </>
  );
};
