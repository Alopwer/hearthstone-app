import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HearthstoneApp from './HearthstoneApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HearthstoneApp />, document.getElementById('root'));

serviceWorker.unregister();
