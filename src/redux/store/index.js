import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from '../reducer'

//export const history = createBrowserHistory()

const  store = createStore(
    createRootReducer, // root reducer with router state
  )
  export default store;