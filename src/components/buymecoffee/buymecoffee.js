import React from "react"
import styles from "./buymecoffee.module.scss"

const BuyMeCoffee = () => {
  const pagelink = "https://www.buymeacoffee.com/ajithrnayak"
  const buymeacoffeeIcon =
    "https://cdn.buymeacoffee.com/buttons/default-orange.png"
  return (
    <div className={styles.buymecoffee}>
      <a href={pagelink} target="_blank" rel="noopener noreferrer">
        <img src={buymeacoffeeIcon} alt={"Buy Me A Coffee"}></img>
      </a>
    </div>
  )
}

export default BuyMeCoffee
