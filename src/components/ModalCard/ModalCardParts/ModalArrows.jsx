import React from 'react';
import s from '../ModalCard.module.scss';

const ModalArrows = props => {
    return <>
        { props.relativeCardsIds[0] && <div className={s['arrow_left']}>
            <div className={s['arrow-img_left']} onClick={() => props.onRequestCard(false)}></div>
        </div> }
        { props.relativeCardsIds[1] && <div className={s['arrow_right']}>
            <div className={s['arrow-img_right']} onClick={() => props.onRequestCard(true)}></div>
        </div> }
    </>
}

export default ModalArrows;