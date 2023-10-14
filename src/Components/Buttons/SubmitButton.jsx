import React from "react";

import "./button.css";

const SubmitButton = (props) => {
    return <button className="submit btn">{props.text}</button>;
};

export default SubmitButton;
