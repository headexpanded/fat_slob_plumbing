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
      <section id="about" className="aboutUsSection">
        <div className="aboutUsTitle">
          <Typography.SectionTitle
            content="About Us"
            color="var(--defaultFontColor)"
          />
        </div>

        <Typography.ParaC
          content="Our domestic sewage system always blocked up after a good night."
          color="var(--defaultFontColor)"
        />

        <Typography.ParaC
          content="We got tired of the nasty early morning surprises. So we decided to do something about it."
          color="var(--defaultFontColor)"
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
        .aboutUsSection {
        }
      `}</style>
    </>
  );
};
