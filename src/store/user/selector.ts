import { createSelector } from 'reselect'
import { AplicationState } from '..'

export const userSelector = createSelector(
  (state: AplicationState) => state.user,
  user => user
)
