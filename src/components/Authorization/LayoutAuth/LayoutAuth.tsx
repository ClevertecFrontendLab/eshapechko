import { ReactNode } from 'react';
import s from './LayoutAuth.module.css';

type LayoutAuthProps = {
    children: ReactNode;
};

export const LayoutAuth = ({ children }: LayoutAuthProps) => {
    return (
        <section className={s.authorization}>
            <div className={s.blur}>{children}</div>
        </section>
    );
};
