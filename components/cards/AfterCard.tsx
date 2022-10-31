import { Typography } from "../typography";

// define AfterCard properties
export type foodAndDrink = {
  edible: string;
  id: string;
};

type AfterCardProps = {};

// define afterCard component
export const AfterCard = () => {
  const priceInPounds = "\u00a3";

  return (
    <>
      <div className="afterCard px-1 mt-1 mb-1">
        <div className="container">
          <div className="row">
            <div className="col p-0 m-0">
              <div>
                <Typography.ParagraphC
                  content="Your cart"
                  color="var(--solidBrown)"
                />
              </div>
              <div className="servicesInfo">
                {/* <ul>
                  {data?.map(({ ...edibles }) => {
                    return <>{<li key={"id"}> {edibles.edible} </li>}</>;
                  })}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
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
        <div className="container  d-flex flex-row align-items-center justify-content-center p-0 m-0">
          <div className="row align-items-baseline justify-content-center p-0 m-0"></div>
        </div>
      </div>
      <style jsx>{`
            .afterCard{
                background-color:var(--hintOfBrown);
                border: 2px solid var(--solidBrown);
                border-radius: 10px;
                min-height: 400px;
                transition: color 0.15s ease, border-color 0.15s ease;
                filter: drop-shadow(8px 8px 12px var(--solidBrown));
            }
            .afterCard h2, p {
                color: var(--solidBrown);
                padding: 6px;
                
            }

            .afterCard h2 {
                font-size: 2 rem;
                font-weight:bold;
                text-align: center;
            }
            
            .afterCard li {
                font-size: 1.25rem
                margin: 0 0 1rem 0;
                
            }

            .servicesInfo{
                min-height: 300px;
                color: var(--solidBrown);
            }
        
        `}</style>
    </>
  );
};
