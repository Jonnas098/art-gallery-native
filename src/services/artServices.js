import axios from "axios";

const baseUrl = "https://art-gallery-server.onrender.com/api/artists"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const update = (id, updatedData) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedData)
  return request.then(response => response.data)
}

// eslint-disable-next-line
export default { getAll, update }