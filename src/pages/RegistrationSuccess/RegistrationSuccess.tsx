import { AuthNotificationCard } from '@components/Authorization/AuthNotificationCard';
import SuccessIcon from '../../assets/img/icon/ok-icon.svg?react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { clearRegState } from '@redux/auth/registration/registrationSlice';

export const RegistrationSuccess = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearRegState());
        dispatch(push('/auth'));
    };
    return (
        <AuthNotificationCard
            title='Регистрация успешна'
            description='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            btnTitle='Войти'
            dataTestId='registration-enter-button'
            onClick={handleClick}
        >
            <SuccessIcon />
        </AuthNotificationCard>
    );
};
