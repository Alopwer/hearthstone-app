import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { requestCards, removeManaCost, setTextFilter } from '../../redux/requestReducer';
import CardsLibrary from './CardsLibrary';

const CardsLibraryContainer = ({ requestCards, isFetching, requestOptions, ...props }) => {
    const [ref, inView] = useInView({
        rootMargin: '2000px'
    });

    useEffect(() => {
        // debugger
        if (!isFetching && inView && props.cards.length !== props.totalCards) {
            requestCards(requestOptions, props.page, false)
        }
    }, [inView])

    useEffect(() => {
        // debugger
        if (!isFetching) {
            requestCards(requestOptions, 1, true)
        }
    }, [requestOptions])

    const onRemoveManaCost = (manaCost) => {
        props.removeManaCost(manaCost)
    }
    const onRemoveTextFilter = () => {
        props.setTextFilter('')
    }

    return (
        <>
            {console.log('cards library container render')}
            <CardsLibrary 
                set={props.set} 
                gameMode={props.gameMode} 
                totalCards={props.totalCards}
                manaCost={props.manaCost}
                textFilter={props.textFilter}
                onRemoveManaCost={onRemoveManaCost}
                onRemoveTextFilter={onRemoveTextFilter}
                observer={ref}
            />
            {/* <div ref={ref}></div> */}
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
    requestOptions: state.requestReducer.options,
    textFilter: state.requestReducer.options.textFilter
})

export default connect(mapStateToProps, { requestCards, removeManaCost, setTextFilter })(CardsLibraryContainer);