import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Header.scss';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState('English');

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleLang = () => {
        setIsLangOpen(!isLangOpen);
    };

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    return (
        <div className="container-header-bkg">
            <div className="container-header">
                <header className="header">
                    <nav className="nav-desktop">
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="Logo" className="logo" />
                        </Link>
                        <ul className="nav-links">
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/event-ticketing" className="nav-link">
                                    Event Ticketing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/registration" className="nav-link">
                                    Registration
                                </Link>
                            </li>
                            <li className="nav-item lang-dropdown" onClick={toggleLang}>
                                <div className="lang-selected">{selectedLang}
                                    <i className="fa-sharp fa-solid fa-chevron-down"></i>
                                </div>
                                {isLangOpen && (
                                    <ul className="lang-options">
                                        <li
                                            className={`lang-option ${
                                                selectedLang === 'English' ? 'selected' : ''
                                            }`}
                                            onClick={() => handleLangSelect('English')}
                                        >
                                            English
                                        </li>
                                        <li
                                            className={`lang-option ${
                                                selectedLang === 'Romanian' ? 'selected' : ''
                                            }`}
                                            onClick={() => handleLangSelect('Romanian')}
                                        >
                                            Romanian
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;

