import React from 'react';
import { SetsContainer, ClassesContainer, ManaCostContainer, SearchContainer } from './Filters';

const Filterbar = props => {
  return (
    <div>
      <div>
        <SetsContainer />
        <ClassesContainer />
        <ManaCostContainer />
        <SearchContainer />
        <button onClick={props.toggleAdditionalFilterbars}>Filters</button>
      </div>
      {
        props.additionalFilterbars &&
        <div>filters</div>
      }
    </div>
  );
};

export default Filterbar;
