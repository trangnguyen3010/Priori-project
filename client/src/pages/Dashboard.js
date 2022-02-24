import React, {useState} from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from "react-router-dom"
import {Sidebardata} from "./Sidebardata"
import "../App.css"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return(
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {Sidebardata.map((item, index)=>{
                    return (
                        <li key={index} className={item.classname}>
                            <Link to={item.path}>
                                {item.icon}
                                    <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Navbar