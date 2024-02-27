import { LayoutAuth } from '@components/Authorization';
import s from './ConfirmEmail.module.css';
import { Card, Typography } from 'antd';
const { Title, Text } = Typography;
import RecoveryIcon from '../../assets/img/icon/recovery-icon.svg?react';
import FailedIcon from '../../assets/img/icon/failed-icon.svg?react';
import VerificationInput from 'react-verification-input';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { confirmEmailFetch } from '@redux/auth/checkEmail/checkEmailSlice';
import { Loader } from '@components/Loader';

export const ConfirmEmail = () => {
    const dispatch = useAppDispatch();
    const { email, errorConfirm, isLoadingConfirmEmail } = useAppSelector(
        (state) => state.checkEmail,
    );
    const [isFormCorrect, setIsFormCorrect] = useState(true);
    const [formValue, setFormValue] = useState('');
    const errorTitle = errorConfirm ? 'Неверный код. ' : '';

    const onChangeValue = (value: string) => {
        setFormValue(value);
    };

    const onComplete = (value: string) => {
        dispatch(confirmEmailFetch(value));
        setIsFormCorrect(false);
        setFormValue('');
    };

    return (
        <LayoutAuth>
            {isLoadingConfirmEmail && <Loader />}
            <Card className={s.card}>
                <div className={s.content}>
                    <div className={s.imageBlock}>
                        {errorConfirm ? <FailedIcon /> : <RecoveryIcon />}
                    </div>

                    <Title className={s.title}>
                        {`${errorTitle}`}Введите код для&nbsp;восстановления&nbsp;аккауанта
                    </Title>

                    <Text className={s.description}>
                        {` Мы отправили вам на e-mail ${email}`} <br /> шестизначный код. Введите
                        его в поле ниже.
                    </Text>

                    <VerificationInput
                        placeholder=''
                        validChars='0-9'
                        value={formValue}
                        onChange={onChangeValue}
                        onComplete={onComplete}
                        inputProps={{
                            'data-test-id': 'verification-input',
                        }}
                        classNames={{
                            container: `${s.container}`,
                            character: `${s.character} ${isFormCorrect ? '' : `${s.error}`}`,
                            characterInactive: `${s.characterInactive}`,
                            characterFilled: `${s.characterFilled}`,
                        }}
                    />

                    <Text className={s.description}>Не пришло письмо? Проверьте папку Спам.</Text>
                </div>
            </Card>
        </LayoutAuth>
    );
};
