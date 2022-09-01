import React from "react"
import Layout from "../components/layout/layout"
import styles from "../styles/404/404.module.scss"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <div className={styles.not_found}>
        <h1>404</h1>
      </div>
    </Layout>
  )
}

export default NotFoundPage
