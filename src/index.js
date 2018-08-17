import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MainView from './views/MainView'

const App = () => (
  <MainView/>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
