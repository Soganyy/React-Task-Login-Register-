import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
);

