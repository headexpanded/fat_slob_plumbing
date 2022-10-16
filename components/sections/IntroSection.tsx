// define div to hold Customer Review cards
import {Typography} from "../typography";

type IntroSectionProps = {

};

export const IntroSection = () =>{
return (
    <>
    <section className="introSection">
        <div className="introSub"><Typography.SubHeader content="Welcome to" color="var(--lemonCurry)"/></div>
        <div className="introTitle"><Typography.MainTitle content = "Fat Slob Plumbing" color="var(--solidBrown)"/></div>
        <div className="introSub"><Typography.SubHeader content="Stress testing domestic sewage systems since 2013" color="var(--lemonCurry)"/></div>
        <div className="container px-2 pb-1">
            <div className="row gap-3">
                <div className="col-sm">
                    <Typography.SectionTitle content="What's the capacity of YOUR sewage system?" color="var(--solidBrown)"/>
                </div>
            </div>
        </div>
        <div className="introText">
            <div className="container text-center">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8"><Typography.ParagraphC content = "Most home systems can't flush a big load." color="var(--solidBrown)"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row ">
                    <div className="col-2"></div>
                    <div className="col-8"><Typography.ParagraphC content = "Take our advice - you need to stress test your system, NOW!" color="var(--solidBrown)"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8"><Typography.ParagraphC content = "Because no-one likes a surprise blockage!" color="var(--solidBrown)"/></div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    </section>

    <style jsx>{`
    .introSection{
        background-color: var(--hintOfBrown);
        min-height: 600px;
        padding:28px 0px 0px 0px;
    }
    .introText{
        padding: 24px 0px 12px 0px;
    }
    
    `}</style>
    
    </>
);


};