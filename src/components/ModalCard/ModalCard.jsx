import React, { memo } from 'react';
import { animated } from 'react-spring'
import ModalInfoContainer from './ModalCardParts/ModalInfoContainer';
import ModalArrows from './ModalCardParts/ModalArrows';
import ModalImgContainer from './ModalCardParts/ModalImgContainer';
import s from './ModalCard.module.scss';
import Times from '../common/Times';

const ModalCard = memo(props => {
    return <>
        <div className={s['modal-close']} onClick={props.closeModal}><Times /></div>
        <div className={s['modal-main']}>
        {/* {
            props.cardInfo && props.transitions.map(item => {
                return <animated.div key={item.key} style={item.props}>
                    <div className={s['modal-content']}>
                        <ModalImgContainer />
                        <ModalInfoContainer />
                    </div>
                </animated.div>
            })
        } */}
                <animated.div style={props.st}>
                    <div className={s['modal-content']}>
                        <ModalImgContainer />
                        <ModalInfoContainer />
                    </div>
                </animated.div>
        <ModalArrows relativeCardsIds={props.relativeCardsIds}
            onRequestCard={props.onRequestCard}/>
        </div>
    </> 
})

export default ModalCard;