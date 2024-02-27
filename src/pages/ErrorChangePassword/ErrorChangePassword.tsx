import { AuthNotificationCard } from '@components/Authorization/AuthNotificationCard';
import FailedIcon from '../../assets/img/icon/failed-icon.svg?react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

export const ErrorChangePassword = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(push('/auth/change-password', '/result/error-change-password'));
    };

    return (
        <AuthNotificationCard
            title='Данные не сохранились'
            description='Что-то пошло не так. Попробуйте еще раз'
            btnTitle='Повторить'
            dataTestId='change-retry-button'
            onClick={handleClick}
        >
            <FailedIcon />
        </AuthNotificationCard>
    );
};
