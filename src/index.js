import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { StateProvider } from './store/store';

const app = (
  <StateProvider>
    <App />
  </StateProvider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );