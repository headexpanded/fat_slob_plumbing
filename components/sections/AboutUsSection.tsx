// define About Us section
import { Typography } from "../typography";

type AboutUsSectionProps = {};

export const AboutUsSection = () => {
  const employees = [
    {
      id: "1",
      title: "Ron",
      content: "",
    },
    { id: "2", title: "Dave", content: "" },
    { id: "3", title: "Trish", content: "" },
  ];
  return (
    <>
      <section id="about" className="aboutUs">
        <div className="aboutUsTitle">
          <Typography.SectionTitle
            content="About Us"
            color="var(--solidBrown)"
          />
        </div>

        <Typography.ParaC
          content="Our domestic sewage system always blocked up after a good night."
          color="var(--solidBrown)"
        />

        <Typography.ParaC
          content="We got tired of the nasty early morning surprises. So we decided to do something about it."
          color="var(--solidBrown)"
        />

        {employees.map(({ id, ...other }) => {
          return (
            <div className="col-8" key={id}>
              {other.title}
            </div>
          );
        })}
      </section>

      <style jsx>{`
        .aboutUs {
          background-color: var(--hintOfBrown);
          min-height: 100vh;
          padding: 40px 0px 20px 0px;
        }
      `}</style>
    </>
  );
};
