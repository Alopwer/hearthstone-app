import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Preloader from './components/common/Preloader';
import CardsLibraryContainer from './components/CardsLibrary';
import FilterbarContainer from './components/Filterbar';
import ModalCardContainer from "./components/ModalCard";
import ErrorBoundaryContainer from './components/ErrorBoundary'
import './App.scss';

const App = ({ isInitialized, metadataError }) => {
	return <ErrorBoundaryContainer err={metadataError}>
		{
			!metadataError && isInitialized ? <>
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
			</> 
			: <Preloader />
		}
	</ErrorBoundaryContainer>
}

let AppContainer = ({ initialize, isInitialized, metadataError }) => {
	useEffect(() => {
		initialize();
	}, []);

	return <App isInitialized={isInitialized} metadataError={metadataError} />
};

const mapStateToProps = state => ({
	isInitialized: state.appReducer.isInitialized,
	metadataError: state.appReducer.metadataError
});

export default connect(mapStateToProps, { initialize })(AppContainer)

