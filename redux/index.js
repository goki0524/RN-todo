import { combineReducers } from 'redux'
import { todoReducer } from '../redux/todoRedux'

export const RootReducer = combineReducers({todoReducer});