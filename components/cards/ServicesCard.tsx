import { Typography } from "../typography";

// define ServicesCard properties
type ServicesCardProps = {
  edible: string;
  price?: string;
  title?: string;
};

// define ServicesCard component
export const ServicesCard = ({ title, edible, price }: ServicesCardProps) => {
  const priceInPounds = "\u00a3" + price;
  return (
    <>
      <div className="px-1 mt-1 mb-1 servicesCard">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>{title}</h2>
              <div className="nightBefore">
                <div className="servicesInfo">
                  <ul>
                    <li>{edible}</li>
                  </ul>
                </div>
              </div>
              <div className="onTheDay">
                <Typography.ParagraphC
                  content="On the morning of your appointment, we will consume at least:"
                  color="var(--solidBrown)"
                />
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
            .servicesCard{
                background-color:var(--hintOfBrown);
                border: 2px solid var(--solidBrown);
                border-radius: 10px;
                min-height: 400px;
                transition: color 0.15s ease, border-color 0.15s ease;
                filter: drop-shadow(8px 8px 12px var(--solidBrown));
            }
            .servicesCard h2, p {
                color: var(--solidBrown);
                padding: 6px;
                
            }

            .servicesCard h2 {
                font-size: 2 rem;
                font-weight:bold;
                text-align: center;
            }
            
            .servicesCard p {
                font-size: 1.25rem
                margin: 0 0 1rem 0;
                
            }

            .nightBefore{
                min-height: 200px;
            }

            .onTheDay{
                min-height: 200px;    
            }

            .resLink{
                padding:0px;
            }
            .resLink a {
                text-decoration: underline;
            }

            .resLink a:hover {
                color: var(--lemonCurry);
                transform: scale(1.25);
            }

            .servicesInfo{
                min-height: 100px;
            }
        
        `}</style>
    </>
  );
};
