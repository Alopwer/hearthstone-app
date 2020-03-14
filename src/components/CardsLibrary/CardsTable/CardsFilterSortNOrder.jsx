import React from 'react';

const CardsFilterSortNOrder = props => {
    return <div>
        <span onClick={() => props.onChangeSort(props.sort)}>up</span>
        <span onClick={() => props.onChangeSort(props.sort)}>down</span>
    </div>
}

export default CardsFilterSortNOrder