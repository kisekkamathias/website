import btnStyles from "../styles/createBtn.module.css";

const DesignBtn = (props) => {
    return(
        <div>
            <div id='veiw_port'></div>
            <div className={btnStyles.designComponents}>
                <button className={btnStyles.designPageBtn}>
                    <b>D</b>
                    <p className={btnStyles.createTxt}>
                        <b>  Create</b>
                    </p>
                </button>
                <div></div>
            </div>
        </div>
    );
};

export default DesignBtn;