import { IoMdArrowForward } from "react-icons/io";

export const NavLinkBtn = ({data, link, index}) => {
    return(
        <>
           <a href={link} key={index}>{data}</a>
        </>
    )
}

export const NavBtn = () => {
    return(
        <>
           <button className="nav-btn">Get Started</button>
        </>
    )
}

export const MainBtn = () =>{
    return(
        <>
        <button className="head-btn-1">Get Started</button>
        <a href="#learMore" className="hl-link">Learn More <IoMdArrowForward style={{fontSize:"1.25rem"}}/></a>
        </>
    )
}