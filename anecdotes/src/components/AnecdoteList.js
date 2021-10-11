import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  clearNotification,
} from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) =>
    anecdotes
      .filter((item) =>
        item.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes)
  )

  const vote = ({ id, content }) => {
    dispatch(addVote(id))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
    dispatch(setNotification(`you voted ${content}`))
  }

  if (anecdotes.length === 0) {
    return <p>No anecdotes to display</p>
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote)}
        />
      ))}
    </>
  )
}

export default AnecdoteList
