
import manageImg from "../../assets/png/transaction-mangement.png"
import { GainsTitle } from "../cardComponents/shared/titles";
import { MainBtn } from "../cardComponents/shared/buttons";

const Manage = () => {
    return(
        <section>
            <div className="section-padding">
                <div className="container">
                    <div className="manage-main-count">
                        <div className="tm-left">
                            <GainsTitle
                                hTitle={"Take control of your transactions management"}
                                para={"Easily categorize, tag, and organize your transactions to gain a clear overview of your financial activity. Set custom rules to automatically categorize recurring transactions, saving you time and effort."}
                            />
                             <div className="hl-btn-count">
                                <MainBtn />                               
                             </div>
                        </div>
                        <div className="tm-right">
                            <div className="tm-img">
                                <img src={manageImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Manage;