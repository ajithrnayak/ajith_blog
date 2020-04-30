import React from "react";
import { Link } from "gatsby"
import styles from './title-and-caption.module.scss';

const TitleAndCaption = ({data}) => {
  const { title, subtitle, website } = data

  return (
    <div className={styles.titleAndCaption}>
      <Link className={styles.titleLink} to={`/`}>
      <h2 className={styles.blogTitle}>{title}</h2>
      </Link>
      <div className={styles.blogCaption}>
      <p>{subtitle}</p>
      <p className={styles.website}>Checkout my <a href={website}>website.</a></p>
      </div>
    </div>
  );
};

export default TitleAndCaption;