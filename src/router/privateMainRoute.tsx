import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateMainRoute = () => {
    const token = useAppSelector((state) => state.login.token);

    return token ? <Outlet /> : <Navigate to='/auth' />;
};
