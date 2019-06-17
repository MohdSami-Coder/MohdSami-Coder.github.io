/* Create a redux store with the following properties (keys or simply data):

{
    number: 0,
    square: 0,
    sqrt: 0
}

As the names of the properties suggest, we are simply storing a number, its square and square root inside the store.

Create three separate reducers for each property and combine them using redux combineReducers.

And we need the following dispatch action -

`SET_NUMBER` - The three reducers should listen for the above action and set the number, square and sqrt properties correctly.

And finally, please put the reducers into different files and use ES6 modules to import/export them. */

import React from 'react';
import ReactDOM from 'react-dom';

import {store} from "./store.js";


    
