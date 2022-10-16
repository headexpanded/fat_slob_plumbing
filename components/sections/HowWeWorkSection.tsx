// define How We Work Section
import {Typography} from "../typography";

type HowWeWorkSectionProps ={

}

export const HowWeWorkSection = () => {
    
    return (
        <>
        <section className="howWeWorkSection">
            <div className="howWeWorkTitle"><Typography.SectionTitleLight content="How We Work"/></div>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8" ><Typography.ParagraphL content ="We're experts in
                        stress testing domestic sewage systems. Our experienced
                        professionals, Ron & Dave, come to your home and by the time we
                        leave, you'll know for sure if your
                        system can take it - or not!" color="#fefceb"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
        </section>

        <style jsx>{`
        .howWeWorkSection{
            background-color: var(--solidBrown);
            min-height: 400px;
            padding:0px 0px 12px 0px;
        }
        
        .howWeWorkSection p{
            color: var(--hintOfBrown);
            font-size: 1.25rem;
            font-weight: bold;
        }
        
        `}</style>
        
        </>
    )
}