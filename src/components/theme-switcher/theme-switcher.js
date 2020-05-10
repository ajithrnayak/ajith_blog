import React from "react"
import styles from "./theme-switcher.module.scss"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ThemeSwitcher = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <input
          type="checkbox"
          className={theme === "dark" ? styles.moon : styles.sun}
          onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
          aria-label={
            theme === "dark" ? `Activate Light Mode` : `Activate Dark Mode`
          }
          title={
            theme === "dark" ? `Activate Light Mode` : `Activate Dark Mode`
          }
          checked={theme === "dark"}
        />
      )}
    </ThemeToggler>
  )
}

export default ThemeSwitcher
