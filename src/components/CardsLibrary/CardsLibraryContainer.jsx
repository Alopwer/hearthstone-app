import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useInView } from "react-intersection-observer"
import { requestCards } from '../../redux/requestReducer'
import CardsLibrary from './CardsLibrary'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const CardsLibraryContainer = ({ modalCardId, requestCards, isFetching, requestOptions, ...props }) => {
    const [ref, inView] = useInView({
        threshold: 0
    });

    useEffect(() => {
        if (!isFetching && props.cards.length !== props.totalCards) {
            if (inView) {
                requestCards(requestOptions, props.page, false)
            } else if (modalCardId && !inView){
                const cardIndex = props.cards.findIndex(c => c.id === modalCardId)
                props.cards.length - cardIndex < 10 && requestCards(requestOptions, props.page, false)
            }
        }
    }, [inView, modalCardId])

    useEffect(() => {
        if (!isFetching) {
            requestCards(requestOptions, 1, true)
        }
    }, [requestOptions])
    
    return <CardsLibrary cards={props.cards} 
        observer={ref} 
        viewMode={props.viewMode} 
    />
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    modalCardId: state.cardReducer.id,
    totalCards: state.cardsReducer.totalCards,
    page: state.requestReducer.page,
    isFetching: state.requestReducer.isFetching,
    requestOptions: state.requestReducer.options,
    viewMode: state.requestReducer.options.viewMode
})

export default compose(
    withRouter,
    connect(mapStateToProps, { requestCards })
)(CardsLibraryContainer)
