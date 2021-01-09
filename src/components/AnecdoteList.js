import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {
  removeNotification,
  setNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) => state.anecdotes)

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(setNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
    <div className="anecdote-list">
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
