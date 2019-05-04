import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import TodoView from './containers/TodoView'

const store = configureStore()

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoView />
      </Provider>
    )
  }
}
