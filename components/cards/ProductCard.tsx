import { Typography } from "../typography";

// define ProductCard properties
export type foodAndDrink = {
  edible: string;
  id: string;
};

type ProductCardProps = {
  data: Array<foodAndDrink>;
};

// define ProductCard component
export const ProductCard = ({ data }: ProductCardProps) => {
  const priceInPounds = "\u00a3399.95";
  const PRODUCTS = [
    {
      category: "Food",
      price: "29.95",
      stocked: true,
      name: "Large bowl Moog Dhal",
    },
    {
      category: "Food",
      price: "34.95",
      stocked: true,
      name: "Large chili Kebab",
    },
    {
      category: "Food",
      price: "17.95",
      stocked: true,
      name: "500g Jar Sauerkraut",
    },
    {
      category: "Food",
      price: "44.95",
      stocked: true,
      name: "Extra Hot Chicken Vindaloo",
    },
    {
      category: "Food",
      price: "38.95",
      stocked: true,
      name: "Mexican Bean Dip",
    },
    {
      category: "Food",
      price: "38.95",
      stocked: true,
      name: "Thai Red Lentil Curry",
    },
    { category: "Drinks", price: "8.00", stocked: true, name: "Pint of Lager" },
    {
      category: "Drinks",
      price: "6.00",
      stocked: true,
      name: "Pint of Ron's Home Brew",
    },
    {
      category: "Drinks",
      price: "6.00",
      stocked: true,
      name: "500ml Metamucil",
    },
    {
      category: "Drinks",
      price: "8.95",
      stocked: true,
      name: "500ml Prune Juice",
    },
    {
      category: "Extras",
      price: "8.95",
      stocked: true,
      name: "Dr Schulz's Formula #2",
    },
    {
      category: "Extras",
      price: "16.95",
      stocked: true,
      name: "4-ply Toilet Paper",
    },
    {
      category: "Extras",
      price: "10.00",
      stocked: true,
      name: "Recent newspaper/magazine",
    },
    {
      category: "Extras",
      price: "25.00",
      stocked: true,
      name: "Lavendar AAir Freshener",
    },
  ];
  return (
    <>
      <div className="productCard">
        <div>
          <h3>Options</h3>
        </div>

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
              <h3>{priceInPounds}</h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .productCard {
          background-color: var(--hintOfBrown);
          border: 2px solid var(--solidBrown);
          border-radius: 10px;
          min-height: 400px;
          transition: color 0.15s ease, border-color 0.15s ease;
          filter: drop-shadow(8px 8px 12px var(--solidBrown));
        }
        .productCard p {
          color: var(--solidBrown);
          padding: 6px;
        }

        .productCard h3 {
          color: var(--solidBrown);
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          padding: 32px 8px 16px 8px;
        }

        .productCard ul {
          list-style-type: none;
          padding: 0px 12px;
        }

        .productCard li {
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
