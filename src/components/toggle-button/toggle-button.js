import React, { useState } from "react"
import "./toggle-button.scss"

const ToggleButton = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked || false)

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev)
    if (props.onChange) {
      props.onChange(!isChecked)
    }
  }

  return (
    <button
      type="button"
      className={`toggle-button ${isChecked ? "selected" : ""}`}
      onClick={toggleCheckbox}
      aria-label={isChecked ? `Activate Light Mode` : `Activate Dark Mode`}
    >
      {props.icon}
    </button>
  )
}

export default ToggleButton
