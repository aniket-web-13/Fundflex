import lightBox from "../../assets/svg/brand-lightbox.svg";
import featherDev from "../../assets/svg/brand-fatherdev.svg";
import boltShift from "../../assets/svg/brand-boltshift.svg";
import nietzSche from "../../assets/svg/brand-nietzshc.svg";
import globalBank from "../../assets/svg/brand-globalbank.svg";

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
                            <img src={lightBox} alt="" />
                            <img src={featherDev} alt="" />
                            <img src={boltShift} alt="" />
                            <img src={nietzSche} alt="" />
                            <img src={globalBank} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
       
    )
}

export default BrandSec;