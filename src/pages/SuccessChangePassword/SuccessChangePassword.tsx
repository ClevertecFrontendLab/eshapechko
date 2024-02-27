import { AuthNotificationCard } from '@components/Authorization/AuthNotificationCard';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import SuccessIcon from '../../assets/img/icon/ok-icon.svg?react';
import { clearChangePassword } from '@redux/auth/changePassword/changePasswordSlice';

export const SuccessChangePassword = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearChangePassword());
        dispatch(push('/auth'));
    };

    return (
        <AuthNotificationCard
            title='Пароль успешно изменен'
            description='Теперь можно войти в аккаунт, используя свой&nbsp;логин&nbsp;и&nbsp;новый&nbsp;пароль'
            btnTitle='Вход'
            dataTestId='change-entry-button'
            onClick={handleClick}
        >
            <SuccessIcon />
        </AuthNotificationCard>
    );
};
