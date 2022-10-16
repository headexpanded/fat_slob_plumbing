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
      content: "4 x pints of lager, 1 x chicken vindaloo",
      price: "199.95"
    },
    {
      key: "2",
      title: "Strong",
      content: "5 x pints of lager, 1 x pint Ron's homebrew",
      price: "299.95"
    },
    {
      key: "3",
      title: "Explosive",
      content: `{<ul><li>6 x pints of lager</li><li>2 x pints Ron's homebrew</li><li>2 x Moong Dhal</li><li>1 x 350g jar Sauerkraut</li><li>500ml prune juice</li></ul>}`,
      price: "399.95"
    }
  ]
    return(
<>
{/*  extract key from serviceCards, spread the rest into card component */}
<section className="servicesSection">
  <div className="servicesTitle"><Typography.SectionTitleDark content="Choose Your Service Level"/></div>
  <div className="servicesIntro">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Typography.ParagraphL content ="We're experts in
                        stress testing domestic sewage systems. Our experienced
                        professionals, Ron & Dave, come to your home and by the time we
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
        background-color:var(--lemonCurry);
        color: var(--hintOfBrown);
        min-height: 500px;
        padding: 0px 0px 12px 0px;
    }

`}</style>


</>


    )
}
