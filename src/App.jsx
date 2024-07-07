import React, { useState } from 'react'
import TaskHeader from './components/TaskHeader'
import TaskFooter from './components/TaskFooter'
import TaskList from './components/TaskList'

import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <TaskHeader />
        <TaskList />
        <TaskFooter />
      </Provider>
    </div>
  )
}

export default App
