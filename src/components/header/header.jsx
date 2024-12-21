
import { MainBtn } from "../cardComponents/shared/buttons.jsx";
import { HeadTitle } from "../cardComponents/shared/titles.jsx";
import { HeadImg } from "../cardComponents/shared/imgSec.jsx";

// import headBgImg from "../assets/png/header-bg-img.png";


const Head = () => {
  return (
    <header>
        <div className="head-bg-img">
            <div className="header-padding">
                <div className="container">
                    <div className="head-main-count">
                        <div className="head-left">
                            <HeadTitle />
                             <div className="hl-btn-count">
                                    <MainBtn />             
                             </div>
                        </div>
                        <div className="head-right">
                            <HeadImg />
                         </div>                    
                     </div> 
                </div>
            </div>              
         </div>          
    </header>
  );
};

export default Head;