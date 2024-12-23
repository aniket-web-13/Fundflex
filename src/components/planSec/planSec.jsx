
import { PlanCard } from "../cardComponents/shared/card";
import { Centertitle } from "../cardComponents/shared/titles";


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
                                    <p>Yearly</p>
                                </div>
                                <div className="head-btm-plan">
                                    <PlanCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}