import { IoMdArrowForward } from "react-icons/io";
import manageImg from "../../assets/png/transaction-mangement.png"

const Manage = () => {
    return(
        <section>
            <div className="section-padding">
                <div className="container">
                    <div className="manage-main-count">
                        <div className="tm-left">
                            <div className="tm-head">
                                <h2>Take control of your transactions management</h2>
                            </div>
                            <div className="tm-para">
                                <p>
                                Easily categorize, tag, and organize your transactions to gain a clear overview of your financial activity. Set custom rules to automatically categorize recurring transactions, saving you time and effort.
                                </p>
                            </div>
                             <div className="hl-btn-count">
                                <button className="head-btn-1">Get Started</button>
                                <a href="#learMore" className="hl-link">Learn More <IoMdArrowForward style={{fontSize:"1.25rem"}}/></a>                               
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