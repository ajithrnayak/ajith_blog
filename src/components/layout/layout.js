import React, {useState} from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  const [selectedMode, setSelectedMode] = useState('light')
  const isDark = selectedMode === `dark`
  let themeToggleHandler = () => {
    if (selectedMode === 'dark') {
      setSelectedMode('light')
    } 
    else {
      setSelectedMode('dark')
    }
  }

  return (
    <div className={styles.layout}>
      <Header isDark={isDark} themeToggleHandler={themeToggleHandler}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
