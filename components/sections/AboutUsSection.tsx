// define About Us section
import { Typography } from "../typography";

type AboutUsSectionProps = {

};

export const AboutUsSection =() => {
    const employees = [
        {
            key: "1",
            title: "Ron",
            content: ""
        },
        {   key:"2",
            title: "Dave",
            content: ""
        },
        {   key:"3",
            title: "Trish",
            content :""
        }
    ]
    return(
        <>
        <div className="aboutUs">
            <Typography.SectionTitle content = "About Us" color="var(--solidBrown)"/>
        </div>
        <style jsx>{`
        .aboutUs {
        background-color: var(--lagerYellow);
        padding: 0px 0px 12px 0px;
        min-height: 500px;
        }
        
        `}</style>
        </>
    )
}