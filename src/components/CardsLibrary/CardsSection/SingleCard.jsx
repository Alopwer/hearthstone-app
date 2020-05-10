import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CardsSection.module.scss';
import AnimatedCardContainer from '../../common/AnimatedCard/AnimatedCardContainer';

const SingleCard = props => {
    return <NavLink key={props.id} to={`/cards/${props.id}`} className={s['section-items__link']}>
        <div className={s['section-items__item']}>
            <AnimatedCardContainer image={props.image} style={s['card']} coef={12}/>
        </div>
    </NavLink>
}

export default SingleCard;