// define How We Work Section
import {Typography} from "../typography";

type HowWeWorkSectionProps ={

}

export const HowWeWorkSection = () => {
    
    return (
        <>
        <section className="howWeWorkSection">
            <div className="howWeWorkTitle"><Typography.SectionTitleLight content="How We Work"/></div>
            <div className="container px-4 pb-2">
                <div className="row gap-3">
                    
                </div>
            </div>
        </section>

        <style jsx>{`
        .custReviewsSection{
            background-color: var(--solidBrown);
            min-height: 400px;
            padding:0px 0px 12px 0px;
        }
        
        `}</style>
        
        </>
    )
}