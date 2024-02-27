import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateLoginRoute = () => {
    const error = useAppSelector((state) => state.login.error);

    if (error) {
        return error ? <Outlet /> : <Navigate to='/auth' />;
    }
};
