import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Preloader from './components/common/Preloader';
import CardsLibraryContainer from './components/CardsLibrary';
import FilterbarContainer from './components/Filterbar';
import Footer from './components/Footer';
import './App.scss';
import ModalCardContainer from "./components/ModalCard";

const App = ({ isInitialized }) => {
	return isInitialized ? <>
		<FilterbarContainer />
		<div className='container'>
			<Switch>
				<Route path='/cards/:cardId'>
					<CardsLibraryContainer />
					<ModalCardContainer />
				</Route>
				<Route path='/cards'>
					<CardsLibraryContainer />
				</Route>
				<Route>
					<Redirect to='/cards' />
				</Route>
			</Switch>
		</div>
		{/* <Footer /> */}
	</> 
	: <Preloader />
}

let AppContainer = ({ initialize, isInitialized }) => {
	useEffect(() => {
		initialize();
	}, []);

	return <App isInitialized={isInitialized}/>;
};

const mapStateToProps = state => ({
	isInitialized: state.appReducer.isInitialized
});

export default connect(mapStateToProps, { initialize })(AppContainer)

