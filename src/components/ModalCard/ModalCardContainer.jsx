import React, { useEffect, useState, useCallback } from 'react';
import ModalCard from './ModalCard';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCard, resetCard, setRelativeCardsIds } from '../../redux/cardReducer';
import Modal from 'react-modal';
import { useTransition, useSpring } from 'react-spring'
import s from './ModalCard.module.scss';

Modal.setAppElement('#root')

const ModalCardContainer = props => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [side, toggleSide] = useState(true)

    const transitions = useTransition(props.id, null, {
        initial: { opacity: 1, left: 0,  position: 'absolute'  },
        from: { opacity: 0, left: side ? 50 : -50, position: 'absolute' },
        enter: { opacity: 1, left: 0, position: 'relative' },
        leave: { display: 'none' },
        config: {
            duration: 300
        }
    })
    
    useEffect(() => {
        !props.isFetching && 
        props.getCard(props.match.params.cardId)
    }, [])

    useEffect(() => {
        if (props.cardInfo) {
            if (!modalIsOpen) {
                openModal()
            }
            props.history.push(`/cards/${props.id}`)
        }
    }, [props.cardInfo])

    useEffect(() => {
        props.cardInfo && 
        props.cardsInitialized && 
        getRelativeCardsIds()
    }, [props.cardsInitialized, props.id])

    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        props.resetCard()
        setIsOpen(false)
        props.history.push('/cards')
    }

    const getRelativeCardsIds = useCallback(() => {
        let prevCardId, nextCardId
        props.cards.forEach((c, i) => {
            if(c.id === props.cardInfo.id){ 
                nextCardId = props.cards[i + 1] && props.cards[i + 1].id || ''
                prevCardId = props.cards[i - 1] && props.cards[i - 1].id || ''
            }
        })
        props.setRelativeCardsIds([prevCardId, nextCardId])
    })

    const onRequestCard = (next) => {
        if (!props.isFetching) {
            if (next) {
                props.getCard(props.relativeCardsIds[1]) 
                !side && toggleSide(true)
            } else {
                props.getCard(props.relativeCardsIds[0]) 
                side && toggleSide(false)
            }
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
            closeModal={closeModal}
        />
    </Modal>
    || <></>
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    relativeCardsIds: state.cardReducer.relativeCardsIds,
    cardInfo: state.cardReducer.cardInfo,
    id: state.cardReducer.id,
    isFetching: state.cardReducer.isFetching,
    activeCard: state.cardReducer.activeCard,
    cardsInitialized: state.cardsReducer.cardsInitialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { getCard, resetCard, setRelativeCardsIds })
)(ModalCardContainer);