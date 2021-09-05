import React from "react"
import styles from "./styles.module.css"
import { GetRepoData } from "./components/GetRepoData"

export const GithubRepoDisplay = ({
  userName,
  numOfrepos,
  showStars,
  showLanguage
}) => {
  return (
    <div className={styles.container}>
      {" "}
      <GetRepoData
        showStars={showStars}
        numOfrepos={numOfrepos}
        userName={userName}
        showLanguage={showLanguage}
      />
    </div>
  )
}