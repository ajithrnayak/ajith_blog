import React from "react"
import TitleAndCaption from "../title-and-caption/title-and-caption"
import ThemeSwitcher from "../theme-switcher/theme-switcher"
import { useSiteMetadata } from "../../hooks/use-site-metadata"
import styles from "./header.module.scss"

const Header = () => {
  const data = useSiteMetadata()
  const { siteMetadata } = data.site

  return (
    <header className={styles.header}>
      <TitleAndCaption data={siteMetadata} />
      <ThemeSwitcher />
    </header>
  )
}

export default Header
