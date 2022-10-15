// define div to hols Services Cards
import {FSPCards} from "../fspcards";


type ServicesSectionProps = {
    // content: FSPCards.ServicesCard (title="" content="");
}

export const ServicesSection = () => {
    const serviceCards = [
    {
      key: "1",
      title: "Regular",
      content: "4x pints of lager"
    },
    {
      key: "2",
      title: "Strong",
      content: "5x pints of lager, 2x pints Ron's homebrew"
    },
    {
      key: "3",
      title: "Explosive",
      content: "5x pints of lager, 2x pints Ron's homebrew, 2x Moong Dhal"
    }
  ]
    return(
<>
<section className="servicesSection">
    {serviceCards.map(({key,...other}) => {
          return <FSPCards.ServicesCard key={key} {...other}/>
        })}
</section>
<style jsx>{`
.servicesSection{
    background-color:#B0840E;
    display:flex;
    flex-direction: row;
    gap:1.5rem;
    justify-content: space-between;
    min-height: 500px;
    padding: 12px 12px;
    width: 100%;
    
}

`}</style>


</>


    )
}
