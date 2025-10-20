import type { ReactNode, ButtonHTMLAttributes } from "react";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode,
 className?: string,
 with?:'full' | 'fit',
}
const Button = ({ children, className, with: width = 'full', ...rest }: IButton) => {
    return (
        <button className={`${className} text-white p-2 rounded-md w-${width}`} {...rest}>{children}</button>
    )
}
export default Button;
