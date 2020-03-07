import React from "react";
import CardsSectionContainer from "./CardsSection";

const CardsLibrary = props => {
    const manaCostBar = props.manaCost.split(',').map(mC => <span key={mC} onClick={() => props.onRemoveManaCost(mC)}>{ mC } </span>)

    return (
        <div>
            {console.log('cards library render')}
            {<p>{props.totalCards || 0} cards found for {props.gameMode || props.set} Cards</p>}
            <div>
                {manaCostBar}
            </div>
            <div onClick={props.onRemoveTextFilter}>
                {props.textFilter}
            </div>
            <CardsSectionContainer />
        </div>
    );
}

export default CardsLibrary;
