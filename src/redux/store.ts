import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import registarationReducer from './auth/registration/registrationSlice';
import loginReducer from './auth/login/loginSlice';
import checkEmailReducer from './auth/checkEmail/checkEmailSlice';
import changePasswordReducer from './auth/changePassword/changePasswordSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
});

export const store = configureStore({
    reducer: {
        router: routerReducer,
        registaration: registarationReducer,
        login: loginReducer,
        checkEmail: checkEmailReducer,
        changePassword: changePasswordReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
