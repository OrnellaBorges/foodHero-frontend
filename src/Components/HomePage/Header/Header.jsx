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
      <Nav isLogged={props.isLogged} userId={props.userId} name={props.name} />
    </header>
  );
};

export default Header;
