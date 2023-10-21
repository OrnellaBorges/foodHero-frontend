import React from "react";

import "./header.css";

//import components
import Nav from ".././Nav/Nav";

//import assets

/* import {useSelector} from "react-redux"
import {selectUser} from "../slices/userSlice"
import {selectBasket} from "../slices/basketSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome, faPersonFalling, faGears, faBeerMugEmpty , faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
 */

const Header = (props) => {
    return (
        <header className="header">
            <Nav isLogged={props.isLogged} />
        </header>
    );
};

export default Header;
