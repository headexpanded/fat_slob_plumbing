
// define ServicesCard properties
type ServicesCardProps = {
    content: string;
    title: string;
}

// define ServicesCard component
export const ServicesCard =({title, content}:ServicesCardProps) =>{
    return (
        <>
        <div className="servicesCard"><h2>{title}</h2><p>{content}</p></div>
        <style jsx>{`
            .servicesCard{
                border: 2px solid #804D00;
                border-radius: 10px;
                height: 300px;
                margin: 1rem;
                max-width: 300px;
                padding: 1rem, 4rem;
                text-align:left;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            .servicesCard h2, p {
                color: #804d00;
                padding: 6px;
                margin: 0 0 1rem 0;
            }

            .servicesCard h2 {
                font-size: 1.5rem;
                font-weight:bold;
            }
            
            .servicesCard p {
                font-size: 1.25rem
                margin: 0 0 1rem 0;
                padding: 6px;
            }
        
        `}</style>
        </>
    );
}