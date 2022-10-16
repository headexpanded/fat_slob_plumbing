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
                    <div className="container">
                        <div className = "row">
                            <div className = "col-3" /></div>
                            <div className = "col-6"><Typography.Paragraph content = "A lot of people don't know. But you should! Most home systems can't flush a big load. Take our advice - you need to stress test your system, NOW! Why? Because no-one likes a blockage!"/></div>
                            <div className = "col-3" /></div>
                        </div>
                    </div>
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