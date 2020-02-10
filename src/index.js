import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {store} from './services/store'

import './index.scss'
import {App} from './App'

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'))
