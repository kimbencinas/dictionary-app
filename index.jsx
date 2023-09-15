import React from 'react'
import ReactDOM from 'react-dom'
import App from "./app"

const root = document.getElementById('root')
const rootElement = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const rootRender = ReactDOM.createRoot(root);
rootRender.render(rootElement);