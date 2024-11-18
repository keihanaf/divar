import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.main}>{children}</div>
            <Footer />
        </>
    )
}
export default Layout;