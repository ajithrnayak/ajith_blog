import React from "react"
import styles from "./theme-switcher.module.scss"
import { useThemeToggler } from "../../hooks/them-toggler"

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useThemeToggler()

  return (
    /** the initial render happens in the cloud at compile-time, so colorMode will initially be undefined.
     * Every user gets the same HTML, and that HTML will always come with an unchecked checkbox.
     * Our best bet is to defer rendering of the toggle until after the React app knows what the colorMode should be.
     */
    // theme == null ? null : (
    <input
      type="checkbox"
      className={theme === "dark" ? styles.moon : styles.sun}
      onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
      aria-label={
        theme === "dark" ? `Activate Light Mode` : `Activate Dark Mode`
      }
      title={theme === "dark" ? `Activate Light Mode` : `Activate Dark Mode`}
      checked={theme === "dark"}
    />
    // )
  )
}

export default ThemeSwitcher
