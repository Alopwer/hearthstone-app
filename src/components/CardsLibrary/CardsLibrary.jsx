import React from "react";
import CardsSectionContainer from "./CardsSection";
import CardsTableContainer from "./CardsTable";
import CardsFiltersInfoContainer from "./CardsFiltersInfo/";


const CardsLibrary = props => {
    return <>
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
        <div style={{position: 'relative', bottom: '100vh', height: '1px', content: ''}} ref={props.observer}></div>
    </>
}

export default CardsLibrary;
