import React from "react";

import "./button.css";

const SubmitButton = (props) => {
    return (
        <button type="submit" className="submit btn">
            {props.text}
        </button>
    );
};

export default SubmitButton;
