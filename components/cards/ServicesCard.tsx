// define ServicesCard properties
type ServicesCardProps = {
    content: string;
    title: string;
}

// define ServicesCard component
export const ServicesCard =({title, content}:ServicesCardProps) =>{
    return (
        <>
        <div className="servicesCard">some text here</div>
        <style jsx>{`
            .servicesCard{
                border: 2px solid #804D00;
                border-radius: 10px;
                height: 300px;
                margin: 1rem;
                max-width: 300px;
                text-align:left;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            
            .servicesCard h3 {
                font-size: 3rem;
                font-weight:bold;
            }
            .servicesCard p {
                font-size: 1.5rem;
            }
        
        
        
        
        
        `}</style>
        </>
    );
}