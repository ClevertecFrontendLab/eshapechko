import React, { useState } from 'react';
import s from './MainPage.module.css';
import { Layout } from 'antd';
import { HeaderComponent } from '@components/HeaderComponent';
import { ContentComponent } from '@components/ContentComponent';
import { FooterComponent } from '@components/FooterComponent';
import { SiderComponent } from '@components/SiderComponent';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className={s.mainPage}>
            <SiderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className={s.wrapper}>
                <HeaderComponent />
                <ContentComponent />
                <FooterComponent collapsed={collapsed} />
            </Layout>
        </Layout>
    );
};
