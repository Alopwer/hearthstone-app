import React, { useEffect, useState } from 'react';
import ModalCard from './ModalCard';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCard } from '../../redux/cardReducer';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ModalCardContainer = props => {
    const [modalIsOpen,setIsOpen] = useState(false);
    useEffect(() => {
        if (!props.isFetching) {
            props.getCard(props.match.params.cardId)
        }
    }, [props.match.params.cardId])

    useEffect(() => {
        props.cardInfo && openModal()
    }, [props.cardInfo])

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
        props.history.push('/')
    }
    
    return props.cardInfo 
    && <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
    >
        <ModalCard cardInfo={props.cardInfo}/>
    </Modal>
    || <></>
}

const mapStateToProps = (state) => ({
    cardInfo: state.cardReducer.cardInfo,
    isFetching: state.cardReducer.isFetching
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getCard})
)(ModalCardContainer);