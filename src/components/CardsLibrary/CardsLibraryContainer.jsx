import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { requestCards } from '../../redux/requestReducer';
import CardsLibrary from './CardsLibrary';

const CardsLibraryContainer = ({ requestCards, isFetching, requestOptions, ...props }) => {
    const [ref, inView] = useInView({
        // CHANGE!!!
        // rootMargin: '0px 0px 0px 0px'
        threshold: 1
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
    
    return <CardsLibrary observer={ref} viewMode={props.viewMode}/>
}

const mapStateToProps = (state) => ({
    cards: state.cardsReducer.cards,
    page: state.requestReducer.page,
    isFetching: state.requestReducer.isFetching,
    requestOptions: state.requestReducer.options,
    viewMode: state.requestReducer.options.viewMode
})

export default connect(mapStateToProps, { requestCards })(CardsLibraryContainer);
