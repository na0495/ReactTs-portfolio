export function sortByMostRecentDate(repos) {
  if (repos !== undefined)
    return repos.sort(
      (a, b) => +new Date(b.updated_at) - +new Date(a.updated_at)
    )
}
