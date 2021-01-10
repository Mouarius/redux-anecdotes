import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import notificationReducer from './notificationReducer'
import anecdoteService from '../services/anecdotes'

const sortAnecdotes = (anecdotes) => {
  return [...anecdotes].sort((a, b) => b.votes - a.votes)
}

export const voteAnecdote = (id) => {
  return { type: 'UPVOTE', data: { id } }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({ type: 'NEW_ANECDOTE', data: newAnecdote })
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({ type: 'INIT_ANECDOTES', data: anecdotes })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPVOTE':
      const voted = state.find((a) => a.id === action.data.id)
      voted.votes += 1
      const newAnecdotes = state.map((a) =>
        a.id === action.data.id ? voted : a
      )
      return sortAnecdotes(newAnecdotes)

    case 'NEW_ANECDOTE':
      const newAnecdote = action.data
      return sortAnecdotes([...state, newAnecdote])

    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
}

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
})

export default reducer
