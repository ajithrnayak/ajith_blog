import React from "react"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h1 style= {{fontFamily:"Pacifico",
    fontStyle:"normal",
    fontWeight:"normal",
    fontSize:"48px",
    lineHeight:"100%",
    color: "#70C80F"}}>Ajith's blog</h1>
    <p>I occasionally blog here. Checkout my website.</p>   
    {children}
  </div>
)