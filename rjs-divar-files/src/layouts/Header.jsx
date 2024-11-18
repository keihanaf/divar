import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "utils/cookie.js";
import useUser from "hooks/useUser.js";
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import styles from "./Header.module.css"

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { profile, refetchProfile } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const userToken = getCookie('accessToken');
            const loggedInStatus = !!userToken;
            setIsLoggedIn(loggedInStatus);
            localStorage.setItem('isLoggedIn', loggedInStatus);
        };
        checkLoginStatus();

        // بررسی حالت تاریک/روشن ذخیره شده
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }, []);

    const handleLogout = () => {
        removeCookie('accessToken');
        removeCookie('refreshToken');
        localStorage.setItem('isLoggedIn', 'false');
        setIsDropdownOpen(false);
        window.location.reload();
    };

    const handleLogin = () => {
        navigate('/auth');
        setIsDropdownOpen(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', !isDarkMode);
    };

    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src="/divar.svg" className={styles.logo}/>
                </Link>
                <span>
                    <img src="/location.svg" />
                    <p>تهران</p>
                </span>
            </div>
            <div>
                <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
                    <div className={styles.iconWrapper}>
                        <FaSun className={`${styles.icon} ${styles.sunIcon} ${isDarkMode ? styles.hidden : ''}`} />
                        <FaMoon className={`${styles.icon} ${styles.moonIcon} ${isDarkMode ? '' : styles.hidden}`} />
                    </div>
                </button>
                <div className={styles.dropdown}>
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <span>
                            <img src="/profile.svg" />
                            <p>دیوار من</p>
                        </span>
                    </button>
                    {isDropdownOpen && (
                        <div className={styles.dropdownContent}>
                            <Link to="/">صفحه اصلی</Link>
                            {profile && profile.data.role === "ADMIN" && (
                                <Link to="/admin">پنل مدیریت</Link>
                            )}
                            {isLoggedIn ? (
                                <button onClick={handleLogout}>خروج</button>
                            ) : (
                                <button onClick={handleLogin}>ورود</button>
                            )}
                        </div>
                    )}
                </div>
                <Link to="/dashboard" className={styles.button}>
                    ثبت آگهی
                </Link>
            </div>
        </header>
    )
}
export default Header;
