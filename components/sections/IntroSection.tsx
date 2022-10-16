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
                    <Typography.Paragraph content = "A lot of people don't know. But you should!"/>
                    <Typography.Paragraph content="Most home systems can't flush a big load."/>
                    <Typography.Paragraph content = "Take our advice - you need to stress test your system, NOW!"/>
                    <Typography.Paragraph content = "Why? Because no-one wants a blockage!"/>
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