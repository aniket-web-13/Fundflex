import NavLogo from '../../assets/svg/nav-logo.svg';



const Nav = () => {
return(
   <nav>
        <div className="nav-padding">
            <div className="container">
                <div className="nav-main-count">
                    <div className="nav-left">
                        <img src={NavLogo} alt="" />
                    </div>
                    <div className="nav-mid">
                        <ul>
                            <li><div className="navlink"><a href="#home">All Page</a></div></li>
                            <li><div className="navlink"><a href="#pricing">Pricing</a></div></li>
                            <li><div className="navlink"><a href="#about">About</a></div></li>
                            <li><div className="navlink"><a href="#contact">Contact Us</a></div></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <button className="nav-btn">Get Started</button>
                    </div>
                 </div>
             </div>      
         </div>        
   </nav>
)
};

export default Nav;