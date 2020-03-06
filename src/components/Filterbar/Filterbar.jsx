import React from 'react';
import { SetsContainer, ClassesContainer, ManaCostContainer, SearchContainer } from './Filters';

const Filterbar = () => {
  return (
    <div>
      <div>
        <SetsContainer />
        <ClassesContainer />
        <ManaCostContainer />
        <SearchContainer />
      </div>
      <div></div>
    </div>
  );
};

export default Filterbar;
