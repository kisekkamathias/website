import React from "react";
import btnStyles from "../styles/createBtn.module.css";

const DesignBtn = (props) => {
    return(
        <div>
            <div id='veiw_port'></div>
            <div className={btnStyles.designComponents}>
                <button className={btnStyles.designPageBtn} onClick={props.Open}>
                    <b>D</b>
                    <p className={btnStyles.createTxt}>
                        <b>  Create</b>
                    </p>
                </button>
            </div>
        </div>
    );
};

export default DesignBtn;