import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '~/i18n/i18n';
import { store } from '~/reduxToolkit/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
