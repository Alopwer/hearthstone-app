import React from 'react';
import { connect } from 'react-redux';
import ModalImg from './ModalImg';

const ModalImgContainer = props => {
    return <ModalImg image={props.cardInfo.image}/>
}

const mapStateToProps = (state) => ({
    cardInfo: state.cardReducer.cardInfo
})

export default connect(mapStateToProps)(ModalImgContainer);