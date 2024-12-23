import { IoMdArrowForward } from "react-icons/io";

import { NavBtn } from "../cardComponents/shared/buttons";
import { GainsTitle } from "../cardComponents/shared/titles";
import { ExpImg } from "../cardComponents/shared/imgSec";
import expRightImg from "../../assets/png/experience-right-img.png"
import expRound from "../../assets/png/exp-round-img.png"

export function Experience() {
    return(
        <>
            <section>
                <div className="section-padding">
                    <div className="container">
                        <div className="exp-main-count">
                            <div className="exp-left">
                                    <div>
                                    <GainsTitle 
                                        hTitle={"Ready to Transform Your Experience?"}
                                        para={"Get Started Now and Explore New Possibilities with Our Comprehensive Resources."}
                                    />
                                    </div>                               
                                <NavBtn navTitle={"Get started now"} arrow={<IoMdArrowForward style={{fontSize:"1.25rem"}}/>}/>
                            </div>
                            <div className="exp-right">
                                <ExpImg expImg1={expRightImg} expLogo={expRound} />                       
                            </div>                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}