import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { MyButton } from '@components/Button/Button';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import s from './MobileAppCard.module.css';

export const MobileAppCard = () => (
    <Card
        className={s.card}
        bordered={false}
        actions={[
            <MyButton
                className={s.cardBtn}
                title='Android OS'
                type='default'
                icon={<AndroidFilled />}
            />,
            <MyButton
                className={s.cardBtn}
                title='Apple iOS'
                type='default'
                icon={<AppleFilled />}
            />,
        ]}
        bodyStyle={{ padding: '13px 24px', lineHeight: '1.3' }}
    >
        <Meta
            className={s.cardInfo}
            title='Скачать на телефон'
            description='Доступно в PRO-тарифе'
        />
    </Card>
);
