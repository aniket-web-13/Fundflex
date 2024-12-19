import { IoMdArrowForward } from "react-icons/io";



import hrBigImg from "../../assets/png/header-right-big-img.png"
import hrSmallImg from "../../assets/svg/header-right-small-img.svg"

// import headBgImg from "../assets/png/header-bg-img.png";


const Head = () => {
  return (
    <header>
        <div className="head-bg-img">
            <div className="header-padding">
                <div className="container">
                    <div className="head-main-count">
                        <div className="head-left">
                            <div className="hl-info">
                                <h1>Empowering Your Financial Journey.</h1>
                            </div>
                            <div>
                                <p>Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.</p>
                             </div>
                             <div className="hl-btn-count">
                                <button className="head-btn-1">Get Started</button>
                                <a href="#learMore" className="hl-link">Learn More <IoMdArrowForward style={{fontSize:"1.25rem"}}/></a>                               
                             </div>
                        </div>
                        <div className="head-right">
                            <div className="hr-img-big">
                                <img src={hrBigImg} alt="" />
                            </div>
                            <div className="hr-img-small">
                                <img src={hrSmallImg} alt="" />
                            </div>
                         </div>                    
                     </div> 
                </div>
            </div>              
         </div>          
    </header>
  );
};

export default Head;