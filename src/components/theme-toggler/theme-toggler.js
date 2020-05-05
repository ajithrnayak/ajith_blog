import React from "react"
import styles from "./theme-toggler.module.scss"

const ThemeToggler = ({ isDark, toggle }) => {
  let themeClassName = isDark ? styles.moon : styles.sun

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      className={styles.toggle_button}
    >
      <div className={themeClassName} />
    </button>
  )
}

export default ThemeToggler
