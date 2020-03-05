import React from "react";
import CardsSectionContainer from "./CardsSection";

const CardsLibrary = React.memo(props => {
    return (
        <div>
            {console.log('cards library render')}
            {props.totalCards && <p>{props.totalCards} cards found for "Standard Cards"</p>}
            <CardsSectionContainer />
        </div>
    );
})

export default CardsLibrary;
