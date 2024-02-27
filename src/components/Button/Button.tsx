import { ReactNode } from 'react';
import { Button } from 'antd';

type ButtonProps = {
    className?: string;
    type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
    icon?: ReactNode;
    title?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    block?: boolean;
};

export const MyButton = ({ className, type, icon, title, style, onClick, block }: ButtonProps) => (
    <Button
        style={style}
        className={className}
        type={type}
        icon={icon}
        onClick={onClick}
        block={block}
    >
        {title}
    </Button>
);
