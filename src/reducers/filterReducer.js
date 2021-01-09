const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.value
    default:
      return ''
  }
}

export const setFilter = (value) => {
  return {
    type: 'SET_FILTER',
    value: value,
  }
}

export default filterReducer
