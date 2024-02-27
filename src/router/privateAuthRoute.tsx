import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateAuthRoute = () => {
    const token = useAppSelector((state) => state.login.token);

    return token ? <Navigate to='/main' /> : <Outlet />;
};
