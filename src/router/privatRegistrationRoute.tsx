import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRegistrationRoute = () => {
    const { error, status } = useAppSelector((state) => state.registaration);

    if (status) {
        return status ? <Outlet /> : <Navigate to='/auth/registration' />;
    }

    if (error === 409) {
        return error === 409 ? <Outlet /> : <Navigate to='/auth/registration' />;
    }

    if (error) {
        return error ? <Outlet /> : <Navigate to='/auth/registration' />;
    }
};
