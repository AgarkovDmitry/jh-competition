import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import './index.css'

import Routes from './routes'

console.log(process.env)

ReactDOM.render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
