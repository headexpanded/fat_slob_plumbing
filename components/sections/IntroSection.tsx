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
                    <Typography.SectionTitleDark content="What's the capacity of YOUR sewage system?"/>
                </div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row ">
                <div className="col-2"></div>
                <div className="col-8"><Typography.ParagraphC content = "Most home systems can't flush a big load."/></div>
                <div className="col-2"></div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row ">
                <div className="col-2"></div>
                <div className="col-8"><Typography.ParagraphC content = "Take our advice - you need to stress test your system, NOW!"/></div>
                <div className="col-2"></div>
            </div>
        </div>
        <div className="container text-center">
            <div className="row ">
                <div className="col-2"></div>
                <div className="col-8"><Typography.ParagraphC content = "Because no-one likes a surprise blockage!"/></div>
                <div className="col-2"></div>
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