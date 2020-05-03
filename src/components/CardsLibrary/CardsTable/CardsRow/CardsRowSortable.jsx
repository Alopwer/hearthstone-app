import React from 'react';
import s from '../CardsTable.module.scss';

const CardsRowSortable = props => { 
    return <td className={s['sortable']}>
        <div className={`${s[props.className]} ${(props.property || props.property == 0) && 'textShadow'}`} 
            style={{ backgroundImage: `${!props.property && props.property !== 0 && 'none'}` }}
        > 
            { isNaN(props.property) ? <span style={{color: '#614326'}}>-</span> : props.property }
        </div>
    </td>
}

export default CardsRowSortable;