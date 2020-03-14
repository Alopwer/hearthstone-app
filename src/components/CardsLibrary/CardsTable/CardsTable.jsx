import React from 'react';

const CardsTable = props => {
    return <table>
        <thead>
            <tr>
                <th>Card Name</th>
                <th>Class</th>
                <th>Mana</th>
                <th>Attack</th>
                <th>Health</th>
                <th>Card Type</th>
                <th>Rarity</th>
                <th>Minion Type</th>
                <th>Keywords</th>
            </tr>
        </thead>
        <tbody>
            {
                props.cardsItems
            }
        </tbody>
    </table>
}

export default CardsTable