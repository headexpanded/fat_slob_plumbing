// define div to hold Services Cards
import {FSPCards} from "../fspcards";
import {Typography} from "../typography";


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
  <div className="servicesTitle"><Typography.SectionTitle content="Our Services"/></div>
  <div className="servicesIntro">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Typography.Paragraph content ="We're experts in
                        stress testing domestic sewage systems. Our experienced
                        experts, Ron & Dave, come to your home and by the time we
                        leave, you'll know for sure if your
                        system can take it - or not!"/>
        </div>
      </div>
    </div>
    </div>
  <div className="container px-4 pb-2">
    <div className="row gap-3">
      
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
        color: #804d00;
    }

`}</style>


</>


    )
}
