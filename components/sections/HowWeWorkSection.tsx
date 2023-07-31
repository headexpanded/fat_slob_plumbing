// define How We Work Section
import { Cards } from '../cards';
import { Typography } from '../typography';
import { Spacer } from '../utils/Spacer';

export type HowWeWorkBlurb = {
  title: string;
  desc: string;
};

export const HowWeWorkSection = () => {
  return (
    <>
      <section className="howWeWorkSection">
        <Spacer />
        <Typography.SectionTitle
          content="How We Work"
          color="var(--clr-text-primary)"
        />
        <div className="howWeWorkBlurb">
          <div className="howWeWorkSingleBlurbWrapper">
            
              <Typography.SubHeader
                content="Dedicated Experts"
              />
            
            <div className="howWeWorkDesc">
              <Typography.ParaC
                content=" Our professional toilet testers visit your home."
                fontSize="1.5rem"
                fontWeight="700"
              />
              <Typography.ParaC
                content="By the time we
                                leave, you'll know if your
                                toilet can take it - or not!"
                fontSize="1.5rem"
                fontWeight="700"
              />
            </div>
          </div>
          <Spacer />
          <div className="howWeWorkSingleBlurbWrapper">
            
              <Typography.SubHeader
                content="Regular Performance"
                color="var(--defaultLight)"
              />
            
            <div className="howWeWorkDesc">
              <Typography.ParaC
                content="Every day, we ingest a special blend of food and drink."
                fontSize="1.5rem"
                fontWeight="700"
              />
              <Typography.ParaC
                content="Curries."
                fontSize="1.5rem"
                fontWeight="700"
              />

              <Typography.ParaC
                content="Kebabs."
                fontSize="1.5rem"
                fontWeight="700"
              />

              <Typography.ParaC
                content="Lager."
                fontSize="1.5rem"
                fontWeight="700"
              />

              <Typography.ParaC
                content="Full English."
                fontSize="1.5rem"
                fontWeight="700"
              />

              <Typography.ParaC
                content="This ensures regular performance."
                fontSize="1.5rem"
                fontWeight="700"
              />
            </div>
          </div>
          <Spacer />
          <div className="howWeWorkSingleBlurbWrapper animated fadeInDown">
            <div className="howWeWorkSubHeader">
              <Typography.SubHeader
                content="Fast Results"
                color="var(--defaultLight)"
              />
            </div>
            <div className="howWeWorkDesc">
              <Typography.ParaC
                content="No waiting around."
                fontSize="1.5rem"
                fontWeight="700"
              />
              <Typography.ParaC
                content="Each job starts with coffee & a few cigarettes."
                fontSize="1.5rem"
                fontWeight="700"
              />
              <Typography.ParaC
                content="Even prune juice sometimes."
                fontSize="1.5rem"
                fontWeight="700"
              />
              <Typography.ParaC
                content="Because you can't wait for results!"
                fontSize="1.5rem"
                fontWeight="700"
              />
              <Typography.ParaC
                content="And we can't wait to get started."
                fontSize="1.5rem"
                fontWeight="700"
              />
            </div>
          </div>
        </div>
        <Spacer />
        <Typography.SubHeader
          content="At your request, we bring our own reading material."
          color="var(--clr-text-light)"
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
        .howWeWorkSingleBlurbWrapper {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        

        .howWeWorkDesc {
          //border: red 1px solid;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </>
  );
};
