import React, { useState } from "react";
import optionFieldStyles from "../styles/optionFieldStyles.module.css"
import DesignBtn from "./designBtn";
import Cancel from "./cancelBtn";
import OptionCasing from "./optionCasing";

const OptionField = () => {
    const [ state, setState ] = useState(false);
    const open = () =>{
        setState(true)
    }
    const close = () => {
        setState(false)
    }
    return(
        <div>
            <DesignBtn Open={open}/>
            {state && <div className={optionFieldStyles.casing}>
                <Cancel close = {close}/>
                <OptionCasing/>
            </div>}
            
        </div>
    );
};
export default OptionField;