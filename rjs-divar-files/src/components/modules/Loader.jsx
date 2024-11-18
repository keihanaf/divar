import React from 'react';

import styles from "./Loader.module.css"

function Loader() {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    )
}
export default Loader;