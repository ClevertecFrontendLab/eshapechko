import s from './AuthPage.module.css';
import { Card, Tabs } from 'antd';
import logo from '../../assets/img/main-logo.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LayoutAuth } from '@components/Authorization';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { Loader } from '@components/Loader';
import { RegistrationForm } from '@components/Authorization/RegistrationForm';
import { LoginForm } from '@components/Authorization/LoginForm';

export const AuthPage = () => {
    const dispatch = useAppDispatch();
    const [activeKey, setActiveKey] = useState('login');

    const location = useLocation();

    const { isLoadingRegistration } = useAppSelector((state) => state.registaration);
    const { isLoadingLogin } = useAppSelector((state) => state.login);
    const { isLoadingCheckEmail } = useAppSelector((state) => state.checkEmail);

    const items = [
        {
            label: 'Вход',
            key: 'login',
            children: <>{activeKey === 'login' && <LoginForm />}</>,
        },
        {
            label: 'Регистрация',
            key: 'registration',
            children: <>{activeKey === 'registration' && <RegistrationForm />}</>,
        },
    ];

    useEffect(() => {
        if (location.pathname === '/auth/registration') {
            setActiveKey('registration');
        }
    }, [location.pathname]);

    const changeTab = (activeTab: string) => {
        if (activeTab === 'login') {
            setActiveKey('login');
            dispatch(push('/auth'));
        } else {
            setActiveKey('registration');
            dispatch(push('/auth/registration'));
        }
    };

    return (
        <LayoutAuth>
            {(isLoadingRegistration || isLoadingLogin || isLoadingCheckEmail) && <Loader />}
            <Card className={activeKey === 'login' ? s.card : s.regCard}>
                <img className={s.logo} src={logo} alt='Логотип Cleverfit' />

                <Tabs
                    activeKey={activeKey}
                    centered
                    size='large'
                    items={items}
                    onChange={changeTab}
                />
            </Card>
        </LayoutAuth>
    );
};
