import React from "react";
import CardsSectionContainer from "./CardsSection";
import CardsTableContainer from "./CardsTable";
import CardsFiltersInfoContainer from "./CardsFiltersInfo/CardsFiltersInfoContainer";


const CardsLibrary = props => {
    return (
        <>
        <CardsFiltersInfoContainer />
        {
            props.cards.length !== 0 &&
            <div>
                {
                    props.viewMode === 'table' 
                    ? <CardsTableContainer />
                    : <CardsSectionContainer />
                }
            </div>
        }
            <div style={{marginTop: '200px'}}ref={props.observer}></div>
        </>
    );
}

export default CardsLibrary;
