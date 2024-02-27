import { Button, Card } from 'antd';
import { LayoutAuth } from '../LayoutAuth';
import s from './AuthNotificationCard.module.css';
import { Typography } from 'antd';
import { ReactNode } from 'react';
const { Title, Text } = Typography;

interface AuthNotificationCardProps {
    children: ReactNode;
    title: string;
    description: string;
    btnTitle: string;
    dataTestId?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export const AuthNotificationCard = ({
    children,
    title,
    description,
    btnTitle,
    dataTestId,
    onClick,
}: AuthNotificationCardProps) => {
    return (
        <LayoutAuth>
            <Card className={s.card}>
                <div className={s.content}>
                    <div className={s.imageBlock}>{children}</div>

                    <Title className={s.title}>{title}</Title>

                    <Text className={s.description}>{description}</Text>

                    <Button
                        className={s.btn}
                        type='primary'
                        block
                        size='large'
                        data-test-id={dataTestId}
                        onClick={onClick}
                    >
                        {btnTitle}
                    </Button>
                </div>
            </Card>
        </LayoutAuth>
    );
};
