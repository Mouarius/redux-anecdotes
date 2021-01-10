import { connect } from 'react-redux'
import React from 'react'
import { setFilter } from '../reducers/filterReducer'

const FilterForm = (props) => {
  return (
    <div className="filter">
      filter
      <input
        name="filter"
        value={props.filter}
        onChange={(e) => props.setFilter(e.target.value)}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  setFilter,
}

const connectedFilterForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm)

export default connectedFilterForm
