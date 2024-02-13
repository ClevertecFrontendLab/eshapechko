import { useWindowSize } from 'usehooks-ts';
import {
    CalendarTwoTone,
    HeartTwoTone,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyTwoTone,
} from '@ant-design/icons';
import s from './SiderComponent.module.css';
import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
import logo from '../../assets/img/main-logo.svg';
import logoMobile from '../../assets/img/logo-sm.svg';
import Exit from '../../assets/img/exit.svg?react';
import { MyButton } from '@components/Button/Button';
import { SiderType } from '../../types/siderType';

export const SiderComponent = ({ collapsed, setCollapsed }: SiderType) => {
    const { width = 0 } = useWindowSize();

    const calendarIcon = width <= 680 ? '' : <CalendarTwoTone className={s.svgIcon} />;
    const heartIcon = width <= 680 ? '' : <HeartTwoTone className={s.svgIcon} />;
    const trophyIcon = width <= 680 ? '' : <TrophyTwoTone className={s.svgIcon} />;
    const profileIcon = width <= 680 ? '' : <IdcardOutlined className={s.svgIcon} />;
    const exitIcon = width <= 680 ? '' : <Exit />;

    const items = [
        {
            key: '1',
            icon: calendarIcon,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: heartIcon,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: trophyIcon,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: profileIcon,
            label: 'Профиль',
        },
    ];

    return (
        <Sider
            trigger={null}
            className={s.sider}
            collapsible
            collapsed={collapsed}
            width={width <= 680 ? 106 : 208}
            collapsedWidth={width <= 680 ? 0 : 64}
        >
            <Link className={collapsed ? s.logoCollapsed : s.logo} to='/'>
                <img src={collapsed ? logoMobile : logo} alt='Логотип Cleverfit' />
            </Link>

            <Menu
                className={collapsed ? s.menuCollapsed : s.menu}
                theme='light'
                mode='inline'
                items={items}
            />

            <Button
                className={
                    collapsed
                        ? width <= 680
                            ? s.sideMenuBtnCollapsed
                            : s.sideMenuBtn
                        : s.sideMenuBtn
                }
                type='default'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                data-test-id={width <= 680 ? 'sider-switch-mobile' : 'sider-switch'}
            />

            <MyButton
                className={s.logoutBtn}
                type='default'
                title={collapsed ? '' : 'Выход'}
                icon={exitIcon}
            />
        </Sider>
    );
};
