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
        <div className="container px-4 pb-2">
            <div className="row gap-1">
                <div className="col"><Typography.Paragraph content="What's the capacity of <strong>your</strong> home's sewage system?"/></div>
            </div>
        </div>
    </section>

    <style jsx>{`
    .introSection{
        background-color: #CCB209;
        min-height: 500px;
    }
    
    `}</style>
    
    
    
    </>
);


};