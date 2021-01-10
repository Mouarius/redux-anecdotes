import axios from 'axios'

const base_url = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(`${base_url}/`)
  return response.data
}

const createNew = async (content) => {
  const anecdote = {
    content: content,
    id: getId(),
    votes: 0,
  }
  const newAnecdote = await axios.post(`${base_url}/`, anecdote)
  return newAnecdote.data
}

export default { getAll, createNew }
