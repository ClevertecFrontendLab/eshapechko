import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateCheckEmailRoute = () => {
    const { errorCheck, privateConfirm, privateChange } = useAppSelector(
        (state) => state.checkEmail,
    );

    const { errorChangePassword, privateChangeSuccess } = useAppSelector(
        (state) => state.changePassword,
    );

    if (errorChangePassword) {
        return errorChangePassword ? <Outlet /> : <Navigate to='/auth' />;
    }

    if (errorCheck) {
        return errorCheck ? <Outlet /> : <Navigate to='/auth' />;
    }

    if (privateConfirm || privateChange || privateChangeSuccess) {
        return <Outlet />;
    } else {
        return <Navigate to='/auth' />;
    }
};
