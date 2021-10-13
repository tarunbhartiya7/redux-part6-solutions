const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.content
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

// export const setNotification = (content) => {
//   return {
//     type: 'SET_NOTIFICATION',
//     content,
//   }
// }

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}

export const setNotification = (message, timeInSecs) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSecs * 1000)
    dispatch({
      type: 'SET_NOTIFICATION',
      content: message,
    })
  }
}

export default notificationReducer
