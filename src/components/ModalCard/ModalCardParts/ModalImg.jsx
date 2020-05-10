import React from 'react';
import AnimatedCardContainer from '../../common/AnimatedCard/AnimatedCardContainer';
import s from '../ModalCard.module.scss';

const ModalImg = props => (
    <AnimatedCardContainer image={props.image} 
        style={s['modal-content__image']} 
        coef={20}/>
)

export default ModalImg;