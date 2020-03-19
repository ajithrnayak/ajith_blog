import React from "react";
import Header from '../header/header';
import styles from './layout.module.scss';

const Layout = ({ children }) => {

  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
