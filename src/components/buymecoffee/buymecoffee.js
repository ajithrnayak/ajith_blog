import React from "react"
import styles from "./buymecoffee.module.scss"

const BuyMeCoffee = () => {
  const pagelink = "https://www.buymeacoffee.com/ajithrnayak"
  const buymeacoffeeIcon =
    "https://cdn.buymeacoffee.com/buttons/default-orange.png"
  return (
    <div className={styles.buymecoffee}>
      <p>Thanks for reading!<br/>If you found my work helpful, buy me a cup of coffee! I will appreciate it a lot.</p>
      <a href={pagelink} target="_blank" rel="noopener noreferrer">
        <img src={buymeacoffeeIcon} alt={"Buy Me A Coffee"}></img>
      </a>
    </div>
  )
}

export default BuyMeCoffee
