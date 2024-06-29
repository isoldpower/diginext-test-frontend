import {ButtonHTMLAttributes, FC} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';

type ButtonVariant = 'default' | 'primary' | 'accent';

type ButtonProps = {
    variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({className, variant = 'default', ...props}: ButtonProps) => {
    return (
        <button className={`${className} ${classes.button}`} {...props} itemType={variant} />
    );
};