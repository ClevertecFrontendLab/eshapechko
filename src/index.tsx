import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { history, store } from '@redux/store';
import 'normalize.css';
import 'antd/dist/antd.css';
import './index.css';
import { RoutesApp } from './router';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <RoutesApp />
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
