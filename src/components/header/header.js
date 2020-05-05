import React from "react"
import TitleAndCaption from "../title-and-caption/title-and-caption"
import ThemeToggler from "../theme-toggler/theme-toggler"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import styles from "./header.module.scss"

const Header = ({isDark, themeToggleHandler}) => {
  const data = useSiteMetadata()

  return (
    <header className={styles.header}>
      <TitleAndCaption data={data} />
      <ThemeToggler isDark={isDark} toggle={themeToggleHandler}/>
    </header>
  )
}

export default Header
