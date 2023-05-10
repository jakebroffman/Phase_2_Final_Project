import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div className="nav-bar">
            <br></br>
            <div className="home-link">
            <NavLink style={{ marginRight: "10px" }} to="/">
                <img className="navBar-icon" alt="house icon" src="http://www.clipartbest.com/cliparts/dcr/6oj/dcr6ojkoi.png"/>
                Home
            </NavLink>
            </div>
            <div className="auction-link">
            <NavLink style={{ marginRight: "10px" }} to="/art">
                <img className="art-icon" alt="paint pallet icon" src="http://www.clipartbest.com/cliparts/xig/LRo/xigLRo6pT.png"/>
                Art for Sale
            </NavLink>
            </div>
            <div className="seller-link">
            <NavLink style={{ marginRight: "10px" }} to="/sellers">
                <img className="navBar-icon" alt="gavel" src="http://www.clipartbest.com/cliparts/nTX/pAo/nTXpAo7Mc.png" />
                List a Work to Sell
            </NavLink>
            </div>
        </div>
    )
}

export default NavBar;