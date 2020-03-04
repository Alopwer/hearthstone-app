import React, { useEffect } from "react";
import { connect, Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import CardsLibraryContainer from './components/CardsLibrary';
import { initialize } from './redux/appReducer';
import Preloader from "./components/common/Preloader";

// function App(props) {
//   if(!props.token) {
//     return <Preloader />
//   }

//   return (
// 	<div>
//     <Route path='/'>
// 		  <CardsLibraryContainer />
//     </Route>
// 	</div>
//   )
// }

// let AppContainer = ({ initialize, token }) => {
//   useEffect(() => {
//     initialize()
//   }, [])

//   return <App token={token}/>
// }

// const mapStateToProps = state => ({
//   token: state.appReducer.token
// });
// const AppSuperContainer = connect(mapStateToProps, {initialize})(AppContainer);

const HearthstoneApp = () => {
  return (
    <Router>
      <Provider store={store}>
        {/* <AppSuperContainer /> */}
      </Provider>
    </Router>
  );
};

export default HearthstoneApp;
