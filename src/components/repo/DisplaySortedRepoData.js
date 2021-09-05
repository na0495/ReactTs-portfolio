import React from "react"
import { removeDash } from "../../helper/removeDash"
import { sortByMostRecentDate } from "../../helper/sortByMostRecentDate"
import { convertToHours } from "../../helper/convertToHours"
import { arrayToLength } from "../../helper/arrayToLength"
import { getRemainingSeconds } from "../../helper/getRemainingSeconds"
import styles from "./styles.module.css"
import Star from "../../helper/IMG/githubStar.png"

export function DisplaySortedRepoData({
  repoData,
  numOfrepos,
  showStars,
  showLanguage
}) {
  const sortedRepos = sortByMostRecentDate(repoData)
  const sortedAndReducedRepos = arrayToLength(sortedRepos, numOfrepos)
  return (
    <div className={styles.repoContainer}>
      {sortedAndReducedRepos
        ? sortedAndReducedRepos.map((repo) => (
            <ul key={repo.id}>
              <li>
                <a
                  id='title'
                  className={styles.title}
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {removeDash(repo.name)}
                </a>
              </li>
              <li id='description' className={styles.description}>
                {repo.description}
              </li>
              <div id='options' className={styles.options}>
                {showLanguage ? (
                  <li id='language' className={styles.languages}>
                    {repo.language}
                  </li>
                ) : null}
                {showStars ? (
                  <li>
                    <img src={Star} alt='star' className={styles.star} />
                    {repo.stargazers_count}
                  </li>
                ) : null}
              </div>
              <li id='text-updated' className={styles.textUpdated}>
                updated{" "}
                {convertToHours(
                  getRemainingSeconds(new Date(repo.updated_at), Date.now())
                )}
              </li>
            </ul>
          ))
        : null}
    </div>
  )
}
