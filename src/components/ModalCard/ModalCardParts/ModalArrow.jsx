import React from 'react';
import s from '../ModalCard.module.scss';

const ModalArrow = props => {
    return <>
        { props.relativeCardsIds[props.index] && <div className={s[props.className]}>
            <div className={s[props.innerClassName]} onClick={() => props.onRequestCard(props.value)}></div>
        </div> }
    </>
}

export default ModalArrow;