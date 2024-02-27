import { Button, Form, Input, Checkbox } from 'antd';
import s from './LoginForm.module.css';
import { GooglePlusOutlined } from '@ant-design/icons';
import { FormTypeLogin } from '../../../types/formType';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { loginFetch } from '@redux/auth/login/loginSlice';
import { checkEmailFetch, setEmail } from '@redux/auth/checkEmail/checkEmailSlice';

export const LoginForm = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [disabledSave, setDisabledSave] = useState(true);
    const state = useAppSelector((state) => state.router.location?.state);
    const { email } = useAppSelector((state) => state.checkEmail);

    const onFinishLogin = (values: FormTypeLogin) => {
        dispatch(loginFetch(values));
    };

    const handleFormChange = () => {
        const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
        setDisabledSave(hasErrors);
    };

    const handleClickButton = () => {
        if (!form.getFieldError('email').length && form.isFieldTouched('email')) {
            const email = form.getFieldValue('email');
            dispatch(setEmail(email));
            dispatch(checkEmailFetch(email));
        }
    };

    useEffect(() => {
        if (state === '/result/error-check-email') {
            dispatch(checkEmailFetch(email));
        }
    }, [state, email, dispatch]);

    return (
        <Form
            form={form}
            name='login'
            className={s.form}
            initialValues={{ remember: true }}
            onFinish={onFinishLogin}
            onFieldsChange={handleFormChange}
        >
            <Form.Item
                className={s.itemEmail}
                name='email'
                rules={[
                    { required: true, message: 'Please input your Email' },
                    { type: 'email', message: 'Please enter a valid Email' },
                ]}
            >
                <Input
                    data-test-id='login-email'
                    className={s.inputEmail}
                    type='email'
                    size='large'
                    addonBefore='e-mail:'
                />
            </Form.Item>
            <Form.Item
                className={s.itemPassword}
                name='password'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    data-test-id='login-password'
                    className={s.inputPassword}
                    type='password'
                    size='large'
                    placeholder='Пароль'
                />
            </Form.Item>
            <Form.Item className={s.itemRemember}>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                </Form.Item>

                <Button
                    type='link'
                    className={s.formLinkBtn}
                    onClick={handleClickButton}
                    data-test-id='login-forgot-button'
                >
                    Забыли пароль?
                </Button>
            </Form.Item>

            <Form.Item className={s.signInBtn}>
                <Button
                    className={s.loginBtn}
                    disabled={disabledSave}
                    size='large'
                    type='primary'
                    htmlType='submit'
                    block
                    data-test-id='login-submit-button'
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
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
