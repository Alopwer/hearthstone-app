import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { requestCards } from '../../redux/requestReducer';
import CardsLibrary from './CardsLibrary';

const CardsLibraryContainer = ({ page, cards, requestCards, isFetching, requestOptions, ...props }) => {
    const [ref, inView] = useInView({
        threshold: 1
    });

    useEffect(() => {
        if (inView) {
            if (!isFetching && cards.length !== props.totalCards) {
                requestCards(requestOptions, page, false)
            }
        }
    }, [inView])

    useEffect(() => {
        requestCards(requestOptions, page, true)
    }, [requestOptions])

    return (
        <>
            {console.log('cards library container render')}
            <CardsLibrary 
                set={props.set} 
                gameMode={props.gameMode} 
                totalCards={props.totalCards}
                manaCost={props.manaCost}
            />
            <div ref={ref}></div>
        </>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    page: state.requestReducer.page,
    set: state.requestReducer.options.set,
    gameMode: state.requestReducer.options.gameMode,
    manaCost: state.requestReducer.options.manaCost,
    totalCards: state.cardsReducer.totalCards,
    isFetching: state.requestReducer.isFetching,
    requestOptions: state.requestReducer.options
})

export default connect(mapStateToProps, { requestCards })(CardsLibraryContainer);