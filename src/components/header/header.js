import React from "react"
import TitleAndCaption from "../title-and-caption/title-and-caption"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import styles from "./header.module.scss"

const Header = () => {
  const data = useSiteMetadata()

  return (
    <header className={styles.header}>
      <TitleAndCaption data={data} />
    </header>
  )
}

export default Header
