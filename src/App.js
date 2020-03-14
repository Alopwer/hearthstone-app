import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import store from './redux/store';
import { initialize } from './redux/appReducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/common/Preloader';
import CardsLibraryContainer from './components/CardsLibrary';
import FilterbarContainer from './components/Filterbar';
import Footer from './components/Footer';
import './App.scss';

const App = ({ isInitialized }) => {
  if (!isInitialized) {
    return <Preloader />;
  }

  return (
    <div>
      <Switch>
        <Route path='/:cardId?'>
          <FilterbarContainer />
          <CardsLibraryContainer />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

let AppContainer = ({ initialize, isInitialized }) => {
  useEffect(() => {
    initialize();
  }, []);

  return <App isInitialized={isInitialized} />;
};

const mapStateToProps = state => ({
  isInitialized: state.appReducer.isInitialized
});
const AppSuperContainer = connect(mapStateToProps, { initialize })(
  AppContainer
);

const HearthstoneApp = () => {
  return (
    <Router>
      <Provider store={store}>
        <AppSuperContainer />
      </Provider>
    </Router>
  );
};

export default HearthstoneApp;
