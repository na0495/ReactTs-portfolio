import Axios from "axios"

export const fetchApiData = async (username) => {
  const response = await Axios.get(
    `https://api.github.com/users/${username}/repos`
  )
  return response.data
}
