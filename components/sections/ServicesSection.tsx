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
{/*  extract key from serviceCards, spread the rest into card component */}
<section className="servicesSection">
  <div className="container-sm">
    <div className="row gx-3 align-items-center">
      
          {serviceCards.map(({key,...other}) => {
              return <FSPCards.ServicesCard key={key} {...other}/>
          })}
      
    </div>
  </div>
</section>
<style jsx>{`
.servicesSection{
    background-color:#B0840E;
    min-height: 500px;
    width:100%;
    
    
    
}

`}</style>


</>


    )
}
