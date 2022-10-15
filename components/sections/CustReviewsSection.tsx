// define div to hold Customer Review cards
import {FSPCards} from "../fspcards";
import {Typography} from "../typography";

type CustReviewsSectionProps ={

}

export const CustReviewsSection = () => {
    const custReviews = [
        {key: "1",
        content: "Ron & Dave turned up, and 20 minutes later my facilities were blocked. Great work, would highly recommend!",
        customer:"Bill Skinner"
        },
        {key:"2",
        content: "New flat, didn't want no problems with my lav. Ron unloaded, & it passed the test! A lot of stress off my mind.",
        customer: "Vic Walker"},
    
        {key: "3",
        content: "I took the Explosive option & I'm glad I did! Don't wait until it's too late - Fat Slob Plumbers are the best!",
        customer: "Noreen Davis"}
    ]
    return (
        <>
        <section className="custReviewsSection">
            <div className="custReviewsTitle"><Typography.SectionTitle content="Customer Reviews"/></div>
            <div className="container px-4">
                <div className="row gap-5">
            {/*  extract key from custReviews, spread the rest into card component */}
                    {custReviews.map(({key, ...other}) =>{
                        return <FSPCards.CustReviewCard key={key} {...other}/>
                    })}
                </div>
            </div>
        </section>

        <style jsx>{`
        .custReviewsSection{
            background-color: #875E04;
            color: #CCB209;
            min-height: 300px;

        }
        
        `}</style>
        
        </>
    )
}