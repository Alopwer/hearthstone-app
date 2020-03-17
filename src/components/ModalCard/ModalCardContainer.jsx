import React, { useEffect, useState } from 'react';
import ModalCard from './ModalCard';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCard, resetCard, setRelativeCardsIds } from '../../redux/cardReducer';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ModalCardContainer = props => {
    const [modalIsOpen,setIsOpen] = useState(false);

    useEffect(() => {
        if (!props.isFetching && props.match.params.cardId) {
            props.getCard(props.match.params.cardId)
        }
    }, [props.match.params.cardId])

    useEffect(() => {
        if(props.cardInfo) {
            if (!modalIsOpen) {
                openModal()
            }
            getRelativeCardsIds()
        }
    }, [props.cardInfo])

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
        props.resetCard();
        props.history.push('/cards')
    }

    const getRelativeCardsIds = () => {
        let prevCardId, nextCardId
        props.cards.forEach((c, i) => {
            if(c.id === props.cardInfo.id){ 
                nextCardId = props.cards[i + 1] && props.cards[i + 1].id || ''
                prevCardId = props.cards[i - 1] && props.cards[i - 1].id || ''
            }
        })
        props.setRelativeCardsIds([prevCardId, nextCardId])
    }

    const onRequestCard = (next) => {
        if (next) {
            props.history.push(`/cards/${props.relativeCardsIds[1]}`)
        } else {
            props.history.push(`/cards/${props.relativeCardsIds[0]}`)
        }   
    }
    
    return props.cardInfo 
    && <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalCard cards={props.cards} 
            cardInfo={props.cardInfo} 
            onRequestCard={onRequestCard} 
            relativeCardsIds={props.relativeCardsIds} 
            metadata={props.metadata}
        />
    </Modal>
    || <></>
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    requestedCardId: state.cardReducer.requestedCardId,
    relativeCardsIds: state.cardReducer.relativeCardsIds,
    relativeCards: state.cardReducer.relativeCards,
    cardInfo: state.cardReducer.cardInfo,
    isFetching: state.cardReducer.isFetching,
    metadata: state.appReducer.metadata
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getCard, resetCard, setRelativeCardsIds})
)(ModalCardContainer);