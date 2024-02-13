import { Card } from 'antd';
import { ReactNode } from 'react';
import s from './ActionCard.module.css';

type ActionCardProps = {
    children: ReactNode;
    title: string;
};

export const ActionCard = ({ children, title }: ActionCardProps) => (
    <Card
        className={s.actionCard}
        title={title}
        bordered={false}
        headStyle={{ padding: '0', lineHeight: '1.3' }}
        bodyStyle={{ padding: '12px 24px', textAlign: 'center' }}
    >
        {children}
    </Card>
);
