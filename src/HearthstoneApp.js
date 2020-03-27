import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContainer from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { IconContext } from 'react-icons'
import './App.scss'

const HearthstoneApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <IconContext.Provider value={{className: 'react-icons'}}>
          <AppContainer />
        </IconContext.Provider>
      </Provider>
    </Router>
  );
};

export default HearthstoneApp;