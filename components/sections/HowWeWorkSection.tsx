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
          width=""
        />
        <Typography.ParaL
          content="By the time we
                          leave, you'll know if your
                          toilet can take it - or not!"
          width=""
        />

        <Spacer />
        <Typography.SubHeader
          content="Regular Performance"
          color="var(--defaultLight)"
        />
        <Typography.ParaL
          content="Every day, we ingest a special blend of food and drink."
          width=""
        />
        <Typography.ParaL
          content="Curries. Kebabs. Lager. Full English. And so on."
          width=""
        />
        <Typography.ParaL
          content="This ensures regular performance."
          width=""
        />
        <Spacer />
        <Typography.SubHeader
          content="Fast Results"
          color="var(--defaultLight)"
        />
        <Typography.ParaL
          content="Each job starts with coffee & a few cigarettes."
          width=""
        />
        <Typography.ParaL
          content="This makes sure there's no waiting around."
          width=""
        />
        <Typography.ParaL
          content="Because you can't wait for results."
          width=""
        />
        <Typography.ParaL
          content="And we can't wait to get started."
          width=""
        />
        <Typography.ParaL
          content="At your request, we bring our own reading material."
          color="var(--defaultLight)"
          width=""
          fontWeight="900"
        />
        {/* <Typography.ParaL content="Don't wait - book us today!" />
        <Typography.ParaL content="Or sign up for a monthly plan." /> */}
        {/* <Typography.SubHeader
          content="refer a friend for a 10% discount!"
          color="var(--defaultLight)"
        /> */}
        <Spacer />
      </section>

      <style jsx>{`
        /* .howWeWorkText {
          display: flex;
          justify-content: space-around;
        } */
      `}</style>
    </>
  );
};
