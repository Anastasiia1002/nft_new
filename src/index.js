import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store, 
  // persistor 
} from './redux/store';
// import './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter 
    //  basename="/nft"
    >
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
 
);


