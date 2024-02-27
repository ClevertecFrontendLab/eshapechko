import s from './CheckEmailNoExist.module.css';
import FailedIcon from '../../assets/img/icon/failed-icon.svg?react';
import { LayoutAuth } from '@components/Authorization';
import { Button, Card, Typography } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
const { Title, Text } = Typography;

export const CheckEmailNoExist = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(push('/auth'));
    };

    return (
        <LayoutAuth>
            <Card className={s.card}>
                <div className={s.content}>
                    <div className={s.imageBlock}>
                        <FailedIcon />
                    </div>

                    <Title className={s.title}>Такой e-mail не зарегистрирован</Title>

                    <Text className={s.description}>
                        Мы не нашли в базе вашего e-mail. Попробуйте
                        войти&nbsp;с&nbsp;другим&nbsp;e-mail.
                    </Text>

                    <Button
                        className={s.btn}
                        type='primary'
                        size='large'
                        data-test-id='check-retry-button'
                        onClick={handleClick}
                    >
                        Попробовать снова
                    </Button>
                </div>
            </Card>
        </LayoutAuth>
    );
};
