import { LayoutAuth } from '@components/Authorization';
import s from './ChangePassword.module.css';
import { Button, Card, Form, Input, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { AccountRestore } from '../../types/formType';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import {
    changePasswordFetch,
    setChangePassword,
} from '@redux/auth/changePassword/changePasswordSlice';
import { Loader } from '@components/Loader';

export const ChangePassword = () => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const state = useAppSelector((state) => state.router.location?.state);
    const { password, confirmPassword, isLoadingChangePassword } = useAppSelector(
        (state) => state.changePassword,
    );
    const [disabledSave, setDisabledSave] = useState(true);

    const onFinish = (values: AccountRestore) => {
        console.log('Success:', values);
        dispatch(setChangePassword(values));
        dispatch(changePasswordFetch(values));
    };

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setDisabledSave(hasErrors);
    };

    useEffect(() => {
        if (state === '/result/error-change-password') {
            dispatch(changePasswordFetch({ password, confirmPassword }));
        }
    }, [dispatch, state, password, confirmPassword]);

    return (
        <LayoutAuth>
            {isLoadingChangePassword && <Loader />}
            <Card className={s.card}>
                <Typography.Title className={s.title}>Восстановление аккаунта</Typography.Title>
                <Form
                    name='changePassword'
                    className={s.form}
                    onFinish={onFinish}
                    autoComplete='off'
                    onFieldsChange={handleFormChange}
                >
                    <Form.Item
                        className={s.password}
                        name='password'
                        help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        rules={[
                            { required: true, message: 'Введите пароль' },
                            {
                                validator: (_, value) =>
                                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              'Пароль не менее 8 символов, с заглавной буквой и цифрой',
                                          ),
                            },
                        ]}
                    >
                        <Input.Password
                            className={s.inputPassword}
                            type='password'
                            size='large'
                            placeholder='Новый пароль'
                            data-test-id='change-password'
                        />
                    </Form.Item>

                    <Form.Item
                        className={s.confirmPassword}
                        name='confirmPassword'
                        rules={[
                            { required: true, message: 'Подтвердите пароль' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Пароли не совпадают');
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            className={s.inputPassword}
                            type='password'
                            size='large'
                            placeholder='Повторите пароль'
                            data-test-id='change-confirm-password'
                        />
                    </Form.Item>

                    <Form.Item className={s.formButton}>
                        <Button
                            type='primary'
                            size='large'
                            htmlType='submit'
                            block
                            disabled={disabledSave}
                            data-test-id='change-submit-button'
                        >
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </LayoutAuth>
    );
};
