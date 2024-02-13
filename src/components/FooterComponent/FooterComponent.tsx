import { Layout } from 'antd';
const { Footer } = Layout;
import s from './FooterComponent.module.css';
import { MyButton } from '../Button/Button';
import { MobileAppCard } from '@components/MobileAppCard';

type FooterProps = {
    collapsed: boolean;
};

export const FooterComponent = ({ collapsed }: FooterProps) => (
    <Footer className={collapsed ? s.footerCollapsed : s.footer}>
        <MyButton className={s.feedbackBtn} type='link' title='Смотреть отзывы' />

        <MobileAppCard />
    </Footer>
);
