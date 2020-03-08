import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { requestCards } from '../../redux/requestReducer';
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

    return <CardsLibrary observer={ref} />
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    page: state.requestReducer.page,
    isFetching: state.requestReducer.isFetching,
    requestOptions: state.requestReducer.options,
})

export default connect(mapStateToProps, { requestCards })(CardsLibraryContainer);