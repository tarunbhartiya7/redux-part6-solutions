import React from 'react'
import { connect } from 'react-redux'

import { filterChange } from '../reducers/filterReducer'

const Filter = ({ filterChange }) => {
  const handleChange = ({ target }) => filterChange(target.value)

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input name="filter" onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterChange,
}

export default connect(null, mapDispatchToProps)(Filter)
