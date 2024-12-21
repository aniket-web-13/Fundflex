
import { BrandImg } from "../cardComponents/shared/imgSec.jsx";

 const BrandSec = () => {
 

    return(
        <>
         <section>
            <div className="section-padding">
                <div className="container">
                    <div className="brand-main-count">
                        <div className="brand-sec-info">
                            <p>Trusted by thousands of companies worldwide</p>
                        </div>
                        <div className="brand-logo-count">
                           <BrandImg />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
       
    )
}

export default BrandSec;