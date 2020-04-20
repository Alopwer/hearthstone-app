import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.scss'

const HearthstoneApp = () => {
  return (
    <Router>
      <Provider store={store}>
          <AppContainer />
      </Provider>
    </Router>
  );
};

export default HearthstoneApp;