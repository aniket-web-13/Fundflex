import { GainsTitle } from "../cardComponents/shared/titles";
import  navImg  from "../../assets/svg/nav-logo.svg";
import { FootInput, FootLinks1, FootLinks2, SocialMedia } from "../cardComponents/shared/buttons";

export function Footer() { 
    return(
        <>      
            <footer>
                <div className="footer-padding">
                    <div className="container">
                        <div className="foot-main-count">
                            <div className="foot-top">
                                <div className="foot-left">
                                     <img src={navImg} alt="" />
                                     <GainsTitle hTitle={""} para={"Effortlessly Track, Manage, and Optimize Your Personal Finances."}/>
                                </div>
                                <div className="foot-mid">
                                    <FootLinks1 />  
                                    <FootLinks2 /> 
                                </div>
                                <div className="foot-right">
                                    <GainsTitle 
                                        hTitle={"Join Our Newsletter to get regular updates"}
                                        para={"Subscribe our newsletter to get more free design course and resource"}
                                    />
                                    <FootInput />
                                </div>
                            </div>
                            <div className="foot-btm">
                                <p>Copyright © 2024 FundFlex. All Rights Reserved</p> 
                                <SocialMedia />
                            </div>                            
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}