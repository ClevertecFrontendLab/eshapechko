import { AuthNotificationCard } from '@components/Authorization/AuthNotificationCard';
import FailedIcon from '../../assets/img/icon/failed-icon.svg?react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { clearRegState } from '@redux/auth/registration/registrationSlice';

export const RegistrationErrorUser = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearRegState());
        dispatch(push('/auth/registration'));
    };
    return (
        <AuthNotificationCard
            title='Данные не сохранились'
            description='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            btnTitle='Назад к регистрации'
            dataTestId='registration-back-button'
            onClick={handleClick}
        >
            <FailedIcon />
        </AuthNotificationCard>
    );
};
