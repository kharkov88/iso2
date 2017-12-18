
import React from 'react';
import ReactDOM from 'react-dom';

import Component from './client';
import registerServiceWorker from './registerServiceWorker';

const config = {

}
ReactDOM.hydrate(
    <Component {...config} />,
    document.getElementById('root')
);
registerServiceWorker();


