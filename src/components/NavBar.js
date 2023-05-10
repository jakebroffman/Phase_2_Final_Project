import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div className="nav-bar">
            <br></br>
            <div className="home-link">
            <NavLink style={{ marginRight: "10px" }} to="/">
                Home
            </NavLink>
            </div>
            <div className="auction-link">
            <NavLink style={{ marginRight: "10px" }} to="/art">
                Art for Sale
            </NavLink>
            </div>
            <div className="seller-link">
            <NavLink style={{ marginRight: "10px" }} to="/sellers">
                List a Work to Sell
            </NavLink>
            </div>
        </div>
    )
}

export default NavBar;