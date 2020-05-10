import React from 'react';
import { animated } from 'react-spring'
import ModalInfoContainer from './ModalCardParts/ModalInfoContainer';
import ModalArrows from './ModalCardParts/ModalArrows';
import ModalImgContainer from './ModalCardParts/ModalImgContainer';
import s from './ModalCard.module.scss';

const ModalCard = props => {
    return <div>
        {
            props.cardInfo && 
            <animated.div style={props.st}>
                <div className={s['modal-content']}>
                    <ModalImgContainer />
                    <ModalInfoContainer />
                </div>
            </animated.div>
        }
        <ModalArrows relativeCardsIds={props.relativeCardsIds}
            onRequestCard={props.onRequestCard}/>
    </div>
}

export default ModalCard;