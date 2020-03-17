import React from "react"
import styles from '../../styles/layout/layout.module.scss';
const Layout = ({ children }) => {

  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
};

export default Layout;
