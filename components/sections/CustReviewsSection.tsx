// define div to hold Customer Review cards
import {Cards} from "../cards";
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
        content: "My husband invited his football team over, so I chose the Explosive option a few days before. I'm glad I did!",
        customer: "Noreen Davis"}
    ]
    return (
        <>
        <section className="custReviewsSection">
            <div className="custReviewsTitle"><Typography.SectionTitle content="Customer Reviews" color="var(--hintOfBrown)"/></div>
            <div className="container px-4 pb-2">
                <div className="row gap-3">
            {/*  extract key from custReviews, spread the rest into CustReviewCard component */}
                    {custReviews.map(({key, ...other}) =>{
                        return <Cards.CustReviewCard key={key} {...other}/>
                    })}
                </div>
            </div>
        </section>

        <style jsx>{`
        .custReviewsSection{
            background-color: var(--solidBrown);
            min-height: 400px;
            padding:28px 0px 0px 0px;
        }
        
        `}</style>
        
        </>
    )
}