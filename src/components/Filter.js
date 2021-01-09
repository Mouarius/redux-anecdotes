import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const FilterForm = () => {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const filterAnectodes = (filter) => {
    dispatch(setFilter(filter))
  }
  return (
    <div className="filter">
      filter
      <input
        name="filter"
        value={filter}
        onChange={(e) => filterAnectodes(e.target.value)}
      />
    </div>
  )
}

export default FilterForm
