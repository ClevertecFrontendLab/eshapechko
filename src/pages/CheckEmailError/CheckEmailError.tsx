import { LayoutAuth } from '@components/Authorization';
import s from './CheckEmailError.module.css';
import { Button, Card, Typography } from 'antd';
const { Title, Text } = Typography;
import ServerErrorIcon from '../../assets/img/icon/server_error-icon.svg?react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';

export const CheckEmailError = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(push('/auth', '/result/error-check-email'));
    };

    return (
        <LayoutAuth>
            <Card className={s.card}>
                <div className={s.content}>
                    <div className={s.imageBlock}>
                        <ServerErrorIcon />
                    </div>

                    <Title className={s.title}>Что-то пошло не так</Title>

                    <Text className={s.description}>
                        Произошла ошибка, попробуйте отправить форму ещё раз.
                    </Text>

                    <Button
                        className={s.btn}
                        type='primary'
                        size='large'
                        data-test-id='check-back-button'
                        onClick={handleClick}
                    >
                        Назад
                    </Button>
                </div>
            </Card>
        </LayoutAuth>
    );
};
