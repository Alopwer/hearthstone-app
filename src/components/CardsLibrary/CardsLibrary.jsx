import React from "react";
import CardsSectionContainer from "./CardsSection";

const CardsLibrary = props => {
    const manaCostBar = props.manaCost.length !== 0 && props.manaCost.map(mC => <span key={mC} onClick={() => props.onRemoveManaCost(mC)}>{ mC } </span>)

    return (
        <div>
            {console.log('cards library render')}
            {props.totalCards && <p>{props.totalCards} cards found for {props.gameMode || props.set} Cards</p>}
            <div>
                {manaCostBar}
            </div>
            <div onClick={props.onRemoveTextFilter}>
                {props.textFilter}
            </div>
            <CardsSectionContainer />
            <div ref={props.observer}></div>
        </div>
    );
}

export default CardsLibrary;
