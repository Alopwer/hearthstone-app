import React from "react";
import { connect, Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import CardsLibraryContainer from './components/CardsLibrary';

function App() {
  return (
	<div>
		<CardsLibraryContainer />
	</div>
  )
}

const mapStateToProps = state => ({});

const AppContainer = connect(mapStateToProps, {})(App);

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
