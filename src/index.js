import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {store} from './services/store'
import {BrowserRouter} from 'react-router-dom'

import './index.scss'

import {App} from './App'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
