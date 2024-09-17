import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className=' bg-Sky bg-cover w-full  pt-2 pb-2  '>
        <SearchContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SearchContextProvider>

    </div>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

