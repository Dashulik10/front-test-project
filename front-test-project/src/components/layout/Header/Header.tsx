import styles from './Header.module.css';
import Button from "../../ui/Button/Button.tsx";
import Logo from '../../../assets/logo.svg';
import Nav from "../../ui/Nav/Nav.tsx";
import {HeaderRefs} from "./navData.tsx";

const Header = () => {
    return (
        <header className={styles.primary}>
            <img src={Logo} className={styles.logo}></img>
            <Nav items={HeaderRefs}></Nav>
            <Button variant="primary">Book Trip</Button>
        </header>
    )
}

export default Header;