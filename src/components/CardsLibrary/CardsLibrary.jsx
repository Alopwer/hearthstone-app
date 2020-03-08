import React from "react";
import CardsSectionContainer from "./CardsSection";
import CardsFiltersInfoContainer from "./CardsFiltersInfo/CardsFiltersInfoContainer";

const CardsLibrary = props => {
    return (
        <div>
            <CardsFiltersInfoContainer />
            <CardsSectionContainer />
            <div ref={props.observer}></div>
        </div>
    );
}

export default CardsLibrary;
