import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Tree from './components/tree';
import { getProcessedBomElements } from './service/fakeBOMService';

ReactDOM.render(
  <React.StrictMode>
    <Tree nodes={getProcessedBomElements()} sortBy="id" sortDirection="asc"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
