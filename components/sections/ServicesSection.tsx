// define div to hols Services Cards
import {FSPCards} from "../fspcards";


type ServicesSectionProps = {
    // content: FSPCards.ServicesCard (title="" content="");
}

export const ServicesSection = () => {
    return(
<>
<section className="servicesSection">
<FSPCards.ServicesCard title="hello" content="goodbye"/>
<FSPCards.ServicesCard title="hello" content="goodbye"/>
<FSPCards.ServicesCard title="hello" content="goodbye"/>
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
