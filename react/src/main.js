import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './containers/MainContainer';

$(function() {
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('app')
  );
});
