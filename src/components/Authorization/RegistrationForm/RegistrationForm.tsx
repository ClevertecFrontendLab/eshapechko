import { GooglePlusOutlined } from '@ant-design/icons';
import s from './RegistrationForm.module.css';
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useEffect, useState } from 'react';
import { addFormDataReg, registrationFetch } from '@redux/auth/registration/registrationSlice';
import { FormTypeRegistration } from '../../../types/formType';

export const RegistrationForm = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [disabledSave, setDisabledSave] = useState(true);
    const state = useAppSelector((state) => state.router.location?.state);
    const { data } = useAppSelector((state) => state.registaration);

    useEffect(() => {
        if (state === '/result/error') {
            dispatch(registrationFetch(data));
        }
    }, [state, data, dispatch]);

    const onFinishRegistration = (values: FormTypeRegistration) => {
        dispatch(addFormDataReg(values));
        dispatch(registrationFetch(values));
    };

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setDisabledSave(hasErrors);
    };

    return (
        <Form
            form={form}
            name='registration'
            className={s.form}
            initialValues={{ remember: true }}
            onFinish={onFinishRegistration}
            onFieldsChange={handleFormChange}
        >
            <Form.Item
                className={s.itemRegEmail}
                name='email'
                rules={[
                    { required: true, message: 'Please input your Email' },
                    { type: 'email', message: 'Please enter a valid Email' },
                ]}
            >
                <Input
                    data-test-id='registration-email'
                    className={s.inputEmail}
                    type='email'
                    size='large'
                    addonBefore='e-mail'
                />
            </Form.Item>
            <Form.Item
                className={s.itemRegPassword}
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
                    data-test-id='registration-password'
                    className={s.inputPassword}
                    type='password'
                    size='large'
                    placeholder='Пароль'
                />
            </Form.Item>

            <Form.Item
                className={s.itemRepeatPassword}
                name='confirmPassword'
                dependencies={['password']}
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
                    data-test-id='registration-confirm-password'
                    className={s.inputPassword}
                    type='password'
                    size='large'
                    placeholder='Повторите пароль'
                />
            </Form.Item>

            <Form.Item className={s.signInBtn}>
                <Button
                    className={s.loginBtn}
                    disabled={disabledSave}
                    size='large'
                    type='primary'
                    htmlType='submit'
                    block
                    data-test-id='registration-submit-button'
                >
                    Войти
                </Button>
            </Form.Item>
            <Form.Item className={s.itemGoggle}>
                <Button
                    className={s.googleBtn}
                    size='large'
                    type='default'
                    icon={<GooglePlusOutlined />}
                    block
                >
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
