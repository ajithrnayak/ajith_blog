import React from "react";
import styles from './titleAndCaption.module.scss';

const TitleAndCaption = ({data}) => {
  const { title, subtitle } = data
  console.log(title);
  console.log(subtitle);

  return (
    <div className={styles.titleAndCaption}>
      <h2 className={styles.blogTitle}>{title}</h2>
      <p className={styles.blogCaption}>{subtitle}</p>
    </div>
  );
};

export default TitleAndCaption;