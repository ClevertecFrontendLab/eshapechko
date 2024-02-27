import { Route, Routes } from 'react-router-dom';
import {
    PrivateAuthRoute,
    PrivateCheckEmailRoute,
    PrivateLoginRoute,
    PrivateMainRoute,
    PrivateRegistrationRoute,
} from '.';
import { AuthPage } from '@pages/AuthPage';
import { MainPage } from '@pages/MainPage';
import { RegistrationSuccess } from '@pages/RegistrationSuccess';
import { RegistrationErrorUser } from '@pages/RegistrationErrorUser';
import { RegistrationError } from '@pages/RegistrationError';
import { LoginError } from '@pages/LoginError';
import { ConfirmEmail } from '@pages/ConfirmEmail';
import { CheckEmailNoExist } from '@pages/CheckEmailNoExist';
import { CheckEmailError } from '@pages/CheckEmailError';
import { ChangePassword } from '@pages/ChangePassword';
import { ErrorChangePassword } from '@pages/ErrorChangePassword';
import { SuccessChangePassword } from '@pages/SuccessChangePassword';

export const RoutesApp = () => (
    <Routes>
        <Route element={<PrivateAuthRoute />}>
            <Route path='/' element={<AuthPage />} />
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/auth/registration' element={<AuthPage />} />
        </Route>

        <Route element={<PrivateMainRoute />}>
            <Route path='/main' element={<MainPage />} />
        </Route>

        <Route element={<PrivateRegistrationRoute />}>
            <Route path='/result/success' element={<RegistrationSuccess />} />
            <Route path='/result/error-user-exist' element={<RegistrationErrorUser />} />
            <Route path='/result/error' element={<RegistrationError />} />
        </Route>

        <Route element={<PrivateLoginRoute />}>
            <Route path='/result/error-login' element={<LoginError />} />
        </Route>

        <Route element={<PrivateCheckEmailRoute />}>
            <Route path='/auth/confirm-email' element={<ConfirmEmail />} />
            <Route path='/result/error-check-email-no-exist' element={<CheckEmailNoExist />} />
            <Route path='/result/error-check-email' element={<CheckEmailError />} />
            <Route path='/auth/change-password' element={<ChangePassword />} />
            <Route path='/result/error-change-password' element={<ErrorChangePassword />} />
            <Route path='/result/success-change-password' element={<SuccessChangePassword />} />
        </Route>
    </Routes>
);
