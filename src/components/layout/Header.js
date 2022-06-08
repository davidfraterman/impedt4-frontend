
const Header = (props) => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="" alt="logo" />
            </div>
            <div className="header__navigation">
                <ul className="header__navigation-list">
                    <li className="header__navigation-item">
                        <a href="/" className="header__navigation-link">
                            Home
                        </a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/" className="header__navigation-link">
                            About
                        </a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/" className="header__navigation-link">
                            Contact
                        </a>
                    </li>
                </ul>
                Hallo
            </div>
        </header>
    )
}

export default Header;