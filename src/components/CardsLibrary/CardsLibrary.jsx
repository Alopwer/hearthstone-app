import React from "react";
import CardsSectionContainer from "./CardsSection";

const CardsLibrary = React.memo(props => {
    // const manaCostBar = props.manaCost.length !== 0 && props.manaCost.map(mC => <span key={mC} onClick={() => props.onRemoveManaCost(mC)}>{ mC } </span>)

    return (
        <div>
            {console.log('cards library render')}
            {<p>{props.totalCards || 0} cards found for {props.gameMode || props.set} Cards</p>}
            {/* {manaCostBar} */}
            <CardsSectionContainer />
        </div>
    );
})

export default CardsLibrary;
