import React from "react";

import bean from "../images/coffee/arabica.png"


const NavBar=()=>{
    return(
        <nav>
            <ul>
                {/* <img src="../images/coffee/arabica.png"></img> */}
                <img src={bean} className="nav-img" alt="logo" />
                <li><a href="#" >Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Service</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;