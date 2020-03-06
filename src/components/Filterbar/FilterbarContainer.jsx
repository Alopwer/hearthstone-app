// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import Filterbar from './Filterbar';
// import {
//     setActualSet,
//     setGameMode,
//     setClass,
//     setManaCost,
//     removeManaCost,
//     resetPage,
//     setTextFilter,
//     resetManaCost
// } from '../../redux/requestReducer';

// const FilterbarContainer = props => {
//     return (
//         <Filterbar />
//     );
// };

// const mapStateToProps = state => ({
//     sets: state.appReducer.sets,
//     classes: state.appReducer.classes,
//     set: state.requestReducer.options.set,
//     class: state.requestReducer.options.class,
//     gameMode: state.requestReducer.options.gameMode,
//     manaCost: state.requestReducer.options.manaCost
// });

// export default connect(mapStateToProps, {
//     setActualSet,
//     setGameMode,
//     setClass,
//     setManaCost,
//     removeManaCost,
//     resetPage,
//     setTextFilter,
//     resetManaCost
// })(FilterbarContainer);
