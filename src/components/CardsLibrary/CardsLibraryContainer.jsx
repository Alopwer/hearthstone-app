import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { requestCards, increasePage } from '../../redux/requestReducer';
import CardsLibrary from './CardsLibrary';

const CardsLibraryContainer = ({ increasePage, requestCards, isFetching, requestOptions, ...props }) => {
    const [ref, inView] = useInView({
        threshold: 1
    });

    useEffect(() => {
        if (!isFetching) {
            requestCards(requestOptions)
        }
    }, [requestOptions])

    useEffect(() => {
        if (inView) {
            increasePage()
        }
    }, [inView])

    return (
        <>
            {console.log('cards library container render')}
            <CardsLibrary totalCards={props.totalCards} />
            <div ref={ref}></div>
        </>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    totalCards: state.cardsReducer.totalCards,
    isFetching: state.requestReducer.isFetching,
    requestOptions: state.requestReducer.options
})

export default connect(mapStateToProps, { requestCards, increasePage })(CardsLibraryContainer);