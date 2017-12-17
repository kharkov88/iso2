import React from 'react';
import { browserHistory, Router } from 'react-router';
//import 'regenerator-runtime/runtime'

import routes from './routes'

const Component = () => {
    return (
        <Router history={browserHistory}>
            { routes }
        </Router>        
    )
}

export default Component