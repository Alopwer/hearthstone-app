import React from 'react';
import { connect } from 'react-redux';
import SingleCard from './SingleCard';

const SingleCardContainer = (props) => {

    return <SingleCard {...props}/>
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(SingleCardContainer);