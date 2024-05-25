import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
// import "bootswatch/dist/morph/bootstrap.min.css";

// var React = require("react");  either use import or this
// var ReactDOM = require("react-dom/client");


ReactDOM.render(<AuthContextProvider><App/></AuthContextProvider>,document.getElementById('root'));

//<AuthContextProvider><App/></AuthContextProvider>,


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>
// );
