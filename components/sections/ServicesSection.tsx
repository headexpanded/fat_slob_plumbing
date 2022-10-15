// define div to hols Services Cards
import {Cards} from "../cards";


type ServicesSectionProps = {
    // content: Cards.ServicesCard (title="" content="");
}

export const ServicesSection = () => {
    return(
<>
<section className="servicesSection">
<Cards.ServicesCard title="hello" content="goodbye"/>
<Cards.ServicesCard title="hello" content="goodbye"/>
<Cards.ServicesCard title="hello" content="goodbye"/>
</section>
<style jsx>{`
.servicesSection{
    display:flex;
    flex-direction: row;
    gap:1.5rem;
    min-height: 500px;
    background-color:#B0840E;
    justify-content: space-between;
    
}

`}</style>


</>


    )
}
