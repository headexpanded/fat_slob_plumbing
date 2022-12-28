import { Typography } from "../typography";

// define ServicesCard properties
type ServicesCardProps = {
  price: string;
  title: string;
};

// define ServicesCard component
export const ServicesCard = ({ title, price }: ServicesCardProps) => {
  const pound = "\u00a3";
  return (
    <>
      <div className="servicesCard">
        <h2>{title}</h2>
        <div className="nightBefore">
          <div className="servicesInfo">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="onTheDay"></div>
        <div>
          <div>
            <div>
              <Typography.SubHeader content="only" color="var(--richBrown)" />
            </div>

            <Typography.SectionTitle
              content={price}
              color="var(--solidBrown)"
            />
          </div>
        </div>
        <div>
          <div>
            <div className="col resLink p-0 m-0">
              <a href="#">
                <Typography.SubHeader
                  content="Make Your Reservation"
                  color="var(--solidBrown)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
            .servicesCard{
                background-color:var(--hintOfBrown);
                // border: 2px solid var(--solidBrown);
                border-radius: 10px;
                min-height: 400px;
                transition: color 0.15s ease, border-color 0.15s ease;
                filter: drop-shadow(2px 2px 4px var(--solidBrown));
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
                text-decoration: none;
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
