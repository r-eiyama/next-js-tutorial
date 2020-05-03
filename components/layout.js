import styles from './layout.module.css'
import React from "react";

function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
}

export default Layout