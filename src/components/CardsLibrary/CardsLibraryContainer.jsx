import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInView } from "react-intersection-observer";
import { requestCards } from '../../redux/cardsReducer';
import CardsLibrary from './CardsLibrary';
import Footer from '../Footer';

const CardsLibraryContainer = ({ cards, requestCards, page, isFetching }) => {
    const [ref, inView] = useInView({
        threshold: 1
    });

    useEffect(() => {
        if (inView && !isFetching) {
            console.log(inView)
            requestCards(page)
        }
    }, [inView])

    return (
        <>
            <CardsLibrary cards={cards}/>
            <Footer refa={ref}/>
        </>
    )
}

const mapStateToProps = (state) => ({ cards: state.cardsReducer.cards, page: state.cardsReducer.page, isFetching: state.cardsReducer.isFetching })

export default connect(mapStateToProps, { requestCards })(CardsLibraryContainer);