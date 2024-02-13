import React from 'react';
import { Layout, Typography } from 'antd';
const { Header } = Layout;
import s from './HeaderComponent.module.css';
import { BreadsCrumb } from '../BreadsCrumb';
import { SettingOutlined } from '@ant-design/icons';
import { MyButton } from '../Button/Button';

export const HeaderComponent: React.FC = () => (
    <Header className={s.header}>
        <BreadsCrumb />

        <div className={s.headerContent}>
            <Typography.Title level={1} className={s.headerTitle}>
                Приветствуем тебя в&nbsp;CleverFit — приложении,
                <br /> которое&nbsp;поможет&nbsp;тебе добиться&nbsp;своей мечты!
            </Typography.Title>

            <MyButton
                className={s.headerBtn}
                type='link'
                icon={<SettingOutlined />}
                title='Настройки'
            />
        </div>
    </Header>
);
