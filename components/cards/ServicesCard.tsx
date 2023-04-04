import { Typography } from "../typography";

// define ServicesCard properties
type ServicesCardProps = {
  price: string;
  title: string;
};

// define ServicesCard component
export const ServicesCard = ({ title, price }: ServicesCardProps) => {
  const pound = "\u00a3";
  const apiKey = "qMK2y5AV5ye1BPFQqX0REQlwGYQ76yMf";
  const location = "Manchester";
  let mapImage;

  /* const mapUrl =
    "https://api.os.uk/maps/raster/v1/wmts?" +
    "request=GetTile&service=WMTS&version=1.0.0&layer=Light_3857&" +
    "style=default&format=image/png&tileMatrixSet=EPSG:3857&" +
    "tileMatrix={z}&tileRow={y}&tileCol={x}&" +
    "apiKey=qMK2y5AV5ye1BPFQqX0REQlwGYQ76yMf";

  mapImage = <img src={mapUrl} alt="Map of Manchester" />; */

   fetch(
    "https://api.os.uk/maps/raster/v1/wmts?" +
    "request=GetCapabilities&service=WMTS&version=2.0.0&layer=Light_3857&" +
    "style=default&format=image/png&tileMatrixSet=EPSG:3857&" +
    "tileMatrix=2&tileRow=1&tileCol=2" +
    "&key=qMK2y5AV5ye1BPFQqX0REQlwGYQ76yMf"
  )
    .then((resp) => resp.json())
    .then((data) => {
      //const mapUrl = `https://api.os.uk/maps/raster/v1/zxy/Outdoor_27700/{z}/{x}/{y}.png?key=${apiKey}&height=600&width=800&layer=base`;
      mapImage = <img src="" alt="Map of Manchester" />;
      console.log(data.results);
    });
  console.log("Hello"); 

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
              <Typography.SubHeader
                content="only"
                color="var(--defaultLight)"
              />
            </div>

            <div className="mapImage">{mapImage}</div>

            {/* <Typography.SectionTitle
              content={price}
              color="var(--defaultLight)"
            /> */}
          </div>
        </div>
        <div>
          <div>
            <div className="col resLink p-0 m-0">
              <a href="#">
                <Typography.SubHeader
                  content="{{location}}"
                  color="var(--defaultLight)"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
            .servicesCard{
                background-color:var(--defaultDark);
                // border: 2px solid var(--defaultLight);
                border-radius: 10px;
                height: 300px;
                transition: color 0.15s ease, border-color 0.15s ease;
                filter: drop-shadow(2px 2px 4px var(--defaultLight));
            }
            .servicesCard h2, p {
                color: var(--defaultLight);
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
                color: var(--defaultLight);
                transform: scale(1.25);
            }

            .servicesInfo{
                min-height: 100px;
            }
        
        `}</style>
    </>
  );
};
