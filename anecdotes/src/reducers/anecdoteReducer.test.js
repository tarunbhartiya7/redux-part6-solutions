import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'

describe('anecdoteReducer', () => {
  test('returns new state with action NEW_ANECDOTE', () => {
    const state = []
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'testing',
        id: 1,
        votes: 0,
      },
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test('returns new state with action VOTE', () => {
    const state = [
      {
        content: 'testing',
        id: 1,
        votes: 0,
      },
    ]

    const action = {
      type: 'VOTE',
      data: {
        id: 1,
      },
    }

    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)

    expect(newState).toContainEqual({
      content: 'testing',
      id: 1,
      votes: 1,
    })
  })
})
