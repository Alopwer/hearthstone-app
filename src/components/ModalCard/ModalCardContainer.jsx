import React, { useEffect, useState } from 'react';
import ModalCard from './ModalCard';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCard, resetCard, setRelativeCardsIds } from '../../redux/cardReducer';
import Modal from 'react-modal';
import { useTransition } from 'react-spring'
import s from './ModalCard.module.scss';

Modal.setAppElement('#root')

const ModalCardContainer = props => {
    const [modalIsOpen,setIsOpen] = useState(false);

    const transitions = useTransition(props.match.params.cardId, null, {
        from: { opacity: 0, left: 50, position: 'relative' },
        enter: { opacity: 1, left: 0, position: 'relative' },
        leave: { opacity: 0, left: -50, position: 'relative' },
        config: {
            duration: 300
        },
    })
    
    useEffect(() => {
        !props.isFetching && 
        props.match.params.cardId && 
        props.getCard(props.match.params.cardId)
    }, [props.match.params.cardId])

    useEffect(() => {
        props.cardInfo && 
        !modalIsOpen && 
        openModal()
    }, [props.cardInfo])

    useEffect(() => {
        props.cardInfo && 
        props.cardsInitialized && 
        getRelativeCardsIds()
    }, [props.cardsInitialized, props.cardInfo])

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        props.resetCard()
        setIsOpen(false)
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
    
    return <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal}
            className={s["modal"]}
            overlayClassName={s["overlay"]}
        >
        <ModalCard onRequestCard={onRequestCard}
            relativeCardsIds={props.relativeCardsIds} 
            transitions={transitions}
            st={transitions[0].props}
            cardInfo={props.cardInfo}
            id={props.match.params.cardId}
        />
    </Modal>
    || <></>
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    relativeCardsIds: state.cardReducer.relativeCardsIds,
    cardInfo: state.cardReducer.cardInfo,
    isFetching: state.cardReducer.isFetching,
    activeCard: state.cardReducer.activeCard,
    cardsInitialized: state.cardsReducer.cardsInitialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { getCard, resetCard, setRelativeCardsIds })
)(ModalCardContainer);