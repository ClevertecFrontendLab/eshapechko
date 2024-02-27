import { AuthNotificationCard } from '@components/Authorization/AuthNotificationCard';
import WarningIcon from '../../assets/img/icon/warning-icon.svg?react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { clearLoginError } from '@redux/auth/login/loginSlice';

export const LoginError = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearLoginError());
        dispatch(push('/auth'));
    };

    return (
        <AuthNotificationCard
            title='Вход не выполнен'
            description='Что-то пошло не так. Попробуйте еще раз'
            btnTitle='Повторить'
            dataTestId='login-retry-button'
            onClick={handleClick}
        >
            <WarningIcon />
        </AuthNotificationCard>
    );
};
