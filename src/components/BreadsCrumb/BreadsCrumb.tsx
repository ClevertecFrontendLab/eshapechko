import React from 'react';
import { Breadcrumb } from 'antd';
import s from './BreadsCrumb.module.css';
import { Link } from 'react-router-dom';

export const BreadsCrumb: React.FC = () => (
    <Breadcrumb className={s.breadcrumbList}>
        <Breadcrumb.Item>
            <Link to='/'>Главная</Link>
        </Breadcrumb.Item>
    </Breadcrumb>
);
