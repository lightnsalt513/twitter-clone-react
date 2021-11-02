import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'normalize.css';
import './index.css';
import 'styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')
);
