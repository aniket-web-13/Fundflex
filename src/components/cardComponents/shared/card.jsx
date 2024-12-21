

export function FeatureCard({src,head,para}){
    
    return(
        <>
        <div className="ft-card">
             <div className="ft-card-top">
                 <div className="ft-icon">
                     <img src={src} alt="" />
                 </div>
                 <div className="ft-title">
                    <h2>{head}</h2>
                 </div>
             </div> 
             <div className="ft-card-btm">
                <p>{para}</p>
             </div>
        </div>            
        </>
    )
    
}
