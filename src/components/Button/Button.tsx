import { ReactNode } from 'react';
import { Button } from 'antd';

type ButtonProps = {
    className?: string;
    type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
    icon?: ReactNode;
    title?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
};

export const MyButton = ({ className, type, icon, title, style, onClick }: ButtonProps) => (
    <Button style={style} className={className} type={type} icon={icon} onClick={onClick}>
        {title}
    </Button>
);
