import React from "react";
import "./style.css";

function Button({children, onClick }){
    return(
        <button onClick={onClick} className="btn waves-effect waves-light">{children}</button>
    )
}

export default Button;