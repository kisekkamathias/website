import React from "react";
import optionFieldStyles from "../styles/optionFieldStyles.module.css"

const Cancel = (props) => {
    return(
        <div className={optionFieldStyles.span} onClick={props.close}>x</div>
    )
}

export default Cancel;