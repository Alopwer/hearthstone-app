import React from 'react';
import ModalArrow from './ModalArrow';

const ModalArrows = props => {
    return props.relativeCardsIds && <>
        <ModalArrow index={0} 
            className={'arrow_left'} 
            innerClassName={'arrow-img_left'} 
            value={false}
            {...props}
        />
        <ModalArrow index={1} 
            className={'arrow_right'} 
            innerClassName={'arrow-img_right'} 
            value={true}
            {...props}
        />
    </>
}

export default ModalArrows;