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
    background-color:#B0840E;
    display:flex;
    flex-direction: row;
    gap:1.5rem;
    justify-content: space-between;
    min-height: 500px;
    padding: 4px 12px;
    width: 100%;
    
}

`}</style>


</>


    )
}
