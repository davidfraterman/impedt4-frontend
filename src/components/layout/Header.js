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
                        <a href="/kaart" className="header__navigation-link">
                            Map
                        </a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="/todo" className="header__navigation-link">
                            Todo
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;