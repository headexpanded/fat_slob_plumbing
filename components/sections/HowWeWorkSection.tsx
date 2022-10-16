// define How We Work Section
import {Typography} from "../typography";

type HowWeWorkSectionProps ={

}

export const HowWeWorkSection = () => {
    
    return (
        <>
        <section className="howWeWorkSection">
            <div className="howWeWorkTitle"><Typography.SectionTitle content="How We Work" color="var(--hintOfBrown)"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8" ><Typography.ParagraphL content ="We're experts in
                        stress testing domestic sewage systems. Our experienced
                        team of professionals - Ron & Dave - come to your home and by the time we
                        leave, you'll know for sure if your
                        system can take it - or not!" color="#fefceb"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8" ><Typography.ParagraphL content ="The night before your appointment, 
                    we consume suitable amounts of food and drink to ensure optimal performance 
                    when we arrive at your home the next day." color="#fefceb"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8" ><Typography.ParagraphL content ="Then, on the morning of your appointment, 
                    we also ingest a carefully planned mix of supplementary nutriments, so there's no waiting around." color="#fefceb"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8" ><Typography.ParagraphL content ="The exact blend and quantity of solids and liquids 
                    depends on the Service Level you choose: see below." color="#fefceb"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
        </section>

        <style jsx>{`
        .howWeWorkSection{
            background-color: var(--solidBrown);
            min-height: 400px;
            padding:20px 0px 20px 0px;
        }
        
        `}</style>
        
        </>
    )
}