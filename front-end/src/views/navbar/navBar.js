import styles from "./style.module.css"
import LoginBtn from "./navBtns/loginBtn";
import Logo from "./navBtns/logo";
import SignupBtn from "./navBtns/signupBtn";

const HomePageNavBar = () => {
    return(
        <div className={styles.nav_bar}>
            <div>
                <Logo/>
                <div>
                    <ul className={styles.link_list}>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Language</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <SignupBtn/>
                <LoginBtn/>
            </div>
        </div>
    )
}
export default HomePageNavBar;