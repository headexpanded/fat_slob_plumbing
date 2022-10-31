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
  return (
    <>
      <div className="beforeCard px-1 mt-1 mb-1">
        <div>
          <Typography.ParagraphC
            content="Your choices."
            color="var(--solidBrown)"
          />
        </div>
        <div className="servicesInfo">
          <ul>
            {data?.map(({ ...edibles }) => {
              return <>{<li key={"id"}> {edibles.edible} </li>}</>;
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
            .beforeCard{
                background-color:var(--hintOfBrown);
                border: 2px solid var(--solidBrown);
                border-radius: 10px;
                min-height: 400px;
                transition: color 0.15s ease, border-color 0.15s ease;
                filter: drop-shadow(8px 8px 12px var(--solidBrown));
            }
            .beforeCard h2, p {
                color: var(--solidBrown);
                padding: 6px;
                
            }

            .beforeCard h2 {
                font-size: 2 rem;
                font-weight:bold;
                text-align: center;
            }
            .beforeCard ul{
              list-style-type: none;
              
            }

            .beforeCard li {
                font-size: 1.25rem
                margin: 0 0 1rem 0;
                border-bottom: .08rem solid var(--richBrown);
                padding: 4px 0px 4px 0px;
                
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
                min-height: 300px;
                color: var(--solidBrown);
            }
        
        `}</style>
    </>
  );
};
