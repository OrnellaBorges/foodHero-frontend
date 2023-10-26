import React from "react";

import "./header.css";

//import components
import Nav from "../Nav/Nav";

//import assets

/* import {useSelector} from "react-redux"
import {selectUser} from "../slices/userSlice"

 */

const Header = (props) => {
    return (
        <header className="header">
            <Nav />
        </header>
    );
};

export default Header;
