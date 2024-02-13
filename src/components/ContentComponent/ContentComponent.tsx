import React from 'react';
import { Card, Layout } from 'antd';
const { Content } = Layout;
import s from './ContentComponent.module.css';
import { MyButton } from '@components/Button/Button';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { ActionCard } from '@components/ActionCard';

export const ContentComponent: React.FC = () => (
    <Content>
        <section className={s.content}>
            <Card className={s.fitCanCard}>
                <p className={s.fitCanText}>С CleverFit ты сможешь:</p>
                <p className={s.fitCanText}>
                    — планировать свои тренировки на&nbsp;календаре, выбирая тип
                    и&nbsp;уровень&nbsp;нагрузки;
                </p>
                <p className={s.fitCanText}>
                    — отслеживать свои достижения в&nbsp;разделе статистики, сравнивая свои
                    результаты с&nbsp;нормами и&nbsp;рекордами;
                </p>
                <p className={s.fitCanText}>
                    — создавать свой профиль, где ты&nbsp;можешь загружать свои фото, видео и отзывы
                    о&nbsp;тренировках;
                </p>
                <p className={s.fitCanText}>
                    — выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и&nbsp;советам профессиональных тренеров.
                </p>
            </Card>

            <Card className={s.contentCardTitle}>
                <h2 className={s.contentTitle}>
                    CleverFit — это не просто приложение, а твой личный помощник в&nbsp;мире
                    фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </h2>
            </Card>

            <div className={s.actionsCards}>
                <ActionCard title='Расписать тренировки'>
                    <MyButton
                        type='link'
                        icon={<HeartFilled className={s.iconSvg} />}
                        title='Тренировки'
                    />
                </ActionCard>

                <ActionCard title='Назначить календарь'>
                    <MyButton
                        type='link'
                        icon={<CalendarTwoTone className={s.iconSvg} />}
                        title='Календарь'
                    />
                </ActionCard>

                <ActionCard title='Заполнить профиль'>
                    <MyButton
                        type='link'
                        icon={<IdcardOutlined className={s.iconSvg} />}
                        title='Профиль'
                    />
                </ActionCard>
            </div>
        </section>
    </Content>
);
