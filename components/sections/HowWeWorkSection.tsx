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
        <Typography.SubHeader
          content="Dedicated Experts"
          color="var(--defaultLight)"
        />
        <Typography.ParaL
          content=" Our professional toilet testers visit your home."
        />
        <Typography.ParaL
          content="By the time we
                          leave, you'll know if your
                          toilet can take it - or not!"
        />

        <Spacer />
        <Typography.SubHeader
          content="Regular Performance"
          color="var(--defaultLight)"
        />
        <Typography.ParaL content="Every day, we ingest a special blend of food and drink." />
        <Typography.ParaL content="Curries. Kebabs. Lager. Full English. And so on." />
        <Typography.ParaL content="This ensures regular performance." />
        <Spacer />
        <Typography.SubHeader content="100% Commitment" color="var(--defaultLight)" />
        <Typography.ParaL content="Every morning starts with coffee, & a few cigarettes." />
        <Typography.ParaL content="This makes sure there's no waiting around." />
        <Typography.ParaL content="Because you can't wait for results." />
        <Typography.ParaL content="And we can't wait to get started." />
        <Typography.ParaL
          content="At your request, we bring our own reading material."
          color="var(--defaultLight)"
          fontWeight="900"
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
