import React from "react";
import CardsSectionContainer from "./CardsSection";
import CardsTableContainer from "./CardsTable";
import CardsFiltersInfoContainer from "./CardsFiltersInfo/CardsFiltersInfoContainer";
import ModalCardContainer from "../ModalCard";

const CardsLibrary = props => {
    return (
        <div>
            <CardsFiltersInfoContainer />
            {
                props.viewMode === 'table' 
                ? <CardsTableContainer />
                : <CardsSectionContainer />
            }
            {
                props.match.params.cardId && <ModalCardContainer />
            }
            <div style={{marginTop: '200px'}}ref={props.observer}></div>
        </div>
    );
}

export default CardsLibrary;
