// define Footer section properties

import {Typography} from "../typography";

type FooterSectionProps ={
    content:string;
}

export const FooterSection = () => {
    return(
<>
<div className="footerSection">
    <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8"><p>We are not licenced plumbers. In case of emergency, you should contact a real plumber.</p></div>
            <div className="col-2"></div>
        </div>
    </div>
</div>
<style jsx>{`

.footerSection {
    background-color: var(--solidBrown);
    text-align: center;

}
.footerSection    p{
        color: var(--lemonCurry);
        font-size:small;
    }


`}</style>

</>

    )
}