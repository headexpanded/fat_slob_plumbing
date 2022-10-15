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
                    <Typography.Paragraph content="What's the capacity of YOUR home's sewage system?"/>
                    <Typography.Paragraph content = "Most people don't know. But you should! These days most homes just can't deal with non-standard loads."/>
                    <Typography.Paragraph content = "Take our advice - you need to stress test your system now. After all, no-one wants an unplanned blockage!"/>
                </div>
            </div>
        </div>
    </section>

    <style jsx>{`
    .introSection{
        background-color: #CCB209;
        min-height: 400px;
    }
    
    `}</style>
    
    </>
);


};