const defaultNotification = null

const notificationReducer = (state = defaultNotification, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const setNotification = (message, timeout) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_NOTIFICATION', data: message })
    await setTimeout(
      () =>
        dispatch({
          type: 'REMOVE_NOTIFICATION',
        }),
      timeout * 1000
    )
  }
}

export default notificationReducer
