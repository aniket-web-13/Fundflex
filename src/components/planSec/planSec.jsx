
import { PlanCard } from "../cardComponents/shared/card.jsx";
import { Centertitle } from "../cardComponents/shared/titles.jsx";


export function PlanSec() {
    return(
        <>
            <header>
                <div className="head-bg-img">
                    <div className="header-padding">
                        <div className="container">
                            <div className="head-plan-count">
                                <div className="head-top">
                                    <Centertitle 
                                        ceneterTitle={"Choose your Plan"}
                                    />                                    
                                </div>
                                <div className="head-plan-md">
                                    <p>Monthly</p>
                                    <div className="my-plan">
                                        <div className="my-circle"></div>
                                    </div>
                                    <p>Yearly</p>
                                </div>
                                <div className="head-btm-plan">
                                    <PlanCard />
                                    <div className="pop position-pop"><p>Popular</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}