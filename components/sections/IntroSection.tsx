// define div to hold Customer Review cards
import {Typography} from "../typography";

type IntroSectionProps = {

};

export const IntroSection = () =>{
return (
    <>
    <section className="introSection">
        <div className="introSub"><Typography.SubHeader content="Welcome to"/></div>
        <div className="introTitle"><Typography.MainTitle content = "Fat Slob Plumbing"/></div>
        <div className="introSub"><Typography.SubHeader content="Stress testing domestic sewage systems since 2013"/></div>
        <div className="container px-2 pb-1">
            <div className="row gap-1">
                <div className="col-sm">
                    <Typography.SectionTitle content="What's the capacity of YOUR home's sewage system?"/>
                    <Typography.SectionTitle content = "Most people don't know. But you should!"/>
                    <Typography.SectionTitle content="These days most homes just can't deal with non-standard loads."/>
                    <Typography.SectionTitle content = "Take our advice - you need to stress test your system, NOW!"/>
                    <Typography.SectionTitle content = "After all, no-one wants an unplanned blockage!"/>
                </div>
            </div>
        </div>
    </section>

    <style jsx>{`
    .introSection{
        background-color: var(--hintOfBrown);
        min-height: 380px;
    }
    
    `}</style>
    
    </>
);


};