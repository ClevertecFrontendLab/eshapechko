import { AuthNotificationCard } from '@components/Authorization/AuthNotificationCard';
import FailedIcon from '../../assets/img/icon/failed-icon.svg?react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { clearRegState } from '@redux/auth/registration/registrationSlice';

export const RegistrationError = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearRegState());
        dispatch(push('/auth/registration', '/result/error'));
    };
    return (
        <AuthNotificationCard
            title='Данные не сохранились'
            description='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            btnTitle='Повторить'
            dataTestId='registration-retry-button'
            onClick={handleClick}
        >
            <FailedIcon />
        </AuthNotificationCard>
    );
};
