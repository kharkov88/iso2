import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
const Zag = ()=> {
    return (
        <p>adfdfdsf</p>
    )
}
export default (
    <Route component={App} path='/' >
        <IndexRoute component={Home} />
        <Route component={Shop} path='магазин' />
        <Route component={Zag}  path={'/магазин/:productId'} />
        <Route component={Cart} path='корзина' />
    </Route>
);
