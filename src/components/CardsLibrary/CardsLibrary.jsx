import React from "react";
import CardsSectionContainer from "./CardsSection";
import CardsTableContainer from "./CardsTable";
import CardsFiltersInfoContainer from "./CardsFiltersInfo/CardsFiltersInfoContainer";
import Preloader from "../common/Preloader";

const CardsLibrary = props => {
    return (
        <div>
            <CardsFiltersInfoContainer />
            {
                props.viewMode === '' ? <CardsSectionContainer />
                : <CardsTableContainer />
            }
            <div style={{marginTop: '200px'}}ref={props.observer}></div>
        </div>
    );
}

export default CardsLibrary;
