import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from './reducers/filterReducer'

export const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const filterSelected = (filterBy) => {
    dispatch(filterChange(filterBy))
  }
  return (
    <div>
      Filter by:
      <span>
        <label>
          <input
            type='radio'
            name='filter'
            value='all'
            onChange={() => filterSelected('ALL')}
          />
          ALL
        </label>
      </span>
      <span>
        <label>
          <input
            type='radio'
            name='filter'
            value='important'
            onChange={() => filterSelected('IMPORTANT')}
          />
          IMPORTANT
        </label>
      </span>
      <span>
        <label>
          <input
            type='radio'
            name='filter'
            value='not_important'
            onChange={() => filterSelected('NONIMPORTANT')}
          />
          NOT IMPORTANT
        </label>
      </span>
    </div>
  )
}
