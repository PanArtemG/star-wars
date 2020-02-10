import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {collectionsReducer} from './collections/reducer'
import {searchReducer} from './search/reducer'
import {overlayReducer} from './overlay/reducer'

const rootReducer = combineReducers({
  collections: collectionsReducer,
  search: searchReducer,
  overlay: overlayReducer
})

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005'
  }
})

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = devtools ? devtools : compose

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
)
