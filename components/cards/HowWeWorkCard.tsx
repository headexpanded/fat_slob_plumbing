
type HowWeWorkCardProps = {
  title: string;
  desc: string;
};

// define HowWeWorkCard component

export const HowWeWorkCard = ({ title, desc }: HowWeWorkCardProps) => {
    return (
        <>
            <style jsx>{`
                .howWeWorkCard {
                  background-color: var(--defaultLight);
                  border-radius: 4px;
                  display: flex;
                  flex-direction: column;
                  border: 1px solid var(--defaultLight);
                  align-items: center;
                  justify-content: center;
                  box-shadow: var(--boxShadow);
                  min-height: 340px;
                  width: 320px; 
                }

                @media screen and (min-width: 640px) {
                  .howWeWorkCard {
                    width: 400px;
                  }
                }

                @media screen and (min-width: 1028px){
                  .howWeWorkCard {
                    width: 480px;
                  }
                }

                .howWeWorkCard > h3 {
                  margin: 0;
                  padding: 1rem 0;
                }

                .howWeWorkDesc > p {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    text-align: center;
                    padding: 1rem 0;
                    color: var(--defaultDark);
                }
            `}</style>
        </>
    )
}