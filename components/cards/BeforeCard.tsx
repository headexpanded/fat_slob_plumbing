import { Typography } from "../typography";

// define BeforeCard properties
export type foodAndDrink = {
  edible: string;
  id: string;
};

type BeforeCardProps = {
  data: Array<foodAndDrink>;
};

// define beforeCard component
export const BeforeCard = ({ data }: BeforeCardProps) => {
  const priceInPounds = "\u00a3399.95";
  return (
    <>
      <div className="beforeCard">
        <Typography.SectionTitle
          content="Explosive"
          color="var(--solidBrown)"
        />

        <ul>
          {data?.map(({ ...edibles }) => {
            return <>{<li key={"id"}> {edibles.edible} </li>}</>;
          })}
        </ul>

        <div className="container d-flex flex-row align-items-center justify-content-center p-0 m-0">
          <div className="row align-items-baseline justify-content-center p-0 m-0">
            <div className="col p-0 m-0">
              <Typography.SubHeader content="only" color="var(--richBrown)" />
            </div>
            <div className="col p-0 m-0">
              <Typography.SectionTitle
                content={priceInPounds}
                color="var(--solidBrown)"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .beforeCard {
          background-color: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 10px;
          min-height: 400px;
          transition: color 0.15s ease, border-color 0.15s ease;
          filter: drop-shadow(8px 8px 12px var(--solidBrown));
        }
        .beforeCard p {
          color: var(--solidBrown);
          padding: 6px;
        }

        .beforeCard h3 {
          color: var(--solidBrown);
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          padding: 32px 8px 16px 8px;
        }

        .beforeCard ul {
          list-style-type: none;
          padding: 0px 12px;
        }

        .beforeCard li {
          color: var(--solidBrown);
          font-size: 1.25rem;
          font-style: italic;
          font-weight: bold;
          padding: 32px 8px 0px 12px;
          text-align: center;
          border-bottom: 0.05rem solid var(--richBrown);
          padding: 4px 4px 4px 4px;
        }

        .resLink {
          padding: 0px;
        }
        .resLink a {
          text-decoration: underline;
        }

        .resLink a:hover {
          color: var(--lemonCurry);
          transform: scale(1.25);
        }
      `}</style>
    </>
  );
};
