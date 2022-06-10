import React from "react";
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from './Header.module.css'

const Header = () => {

    // isHamburgerMenuOpen
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
    const toggleHamburgerMenu = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }

    return (
        <nav className={styles.nav}>
            <section className={styles.header}>
                <section>
                    <Link className={styles.header__logo} to={ROUTES.HOME}>ShintoLabs Go</Link>
                </section>
                <section className={styles.header__hamburgerMenu}>
                    <section className={styles.hamburgerMenu__icon} onClick={toggleHamburgerMenu}>
                        <Icon icon="quill:hamburger" height="30" />
                    </section>
                </section>
            </section>
            {
                isHamburgerMenuOpen && (
                    <section className={styles.hamburgerMenu__links}>
                        <Icon className={styles.closeIcon} onClick={toggleHamburgerMenu} icon="codicon:chrome-close" height="40" />
                        <Link className={styles.link} to={ROUTES.HOME} onClick={toggleHamburgerMenu}>Home</Link>
                        <Link className={styles.link} to={ROUTES.KAART} onClick={toggleHamburgerMenu}>Kaart</Link>
                        <Link className={styles.link} to={ROUTES.TODO} onClick={toggleHamburgerMenu}>To-do</Link>
                    </section>
                )
            }
         
        </nav >
    )
}

export default Header;