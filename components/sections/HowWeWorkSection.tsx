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
                          leave, you'll know if your
                          toilet can take it - or not!"
        />
        <Spacer />
        <Typography.SubHeader
          content="Dedicated Experts"
          color="var(--defaultLight)"
        />
        <Typography.ParaL content="Every day, your Fat Slob Plumber ingests a carefully formulated blend of food and drink - curries, kebabs, lager, full English, and so on." />

        <Typography.ParaL
          content="This ensures optimal performance."
          color=""
        />
        <Spacer />
        <Typography.SubHeader
          content="Attention To Detail"
          color="var(--defaultLight)"
        />
        <Typography.ParaL
          content=" 
                    We also consume a mix of supplementary nutriments when we're at your home - like coffee, cigarettes, & Coke - to make sure there's no waiting around."
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content="At your request, we bring our own reading material."
          color="var(--defaultLight)"
          fontWeight="700"
        />

        <Typography.ParaL
          content="Don't wait - book us today!"
          color=""
          fontWeight="700"
        />

        <Typography.ParaL
          content="Or sign up for a monthly plan."
          color=""
          fontWeight="700"
        />
        {/* <Typography.SubHeader
          content="refer a friend for a 10% discount!"
          color="var(--defaultLight)"
        /> */}
        <Spacer />
      </section>

      <style jsx>{`
        .howWeWorkText {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
};
