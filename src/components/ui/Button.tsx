import type { ReactNode, ButtonHTMLAttributes } from "react";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode,
 className?: string,
 with?:'full' | 'fit',
 color?:string,
}
const Button = ({ children, className, with: width = 'full', color = 'white', ...rest }: IButton) => {
    return (
        <button className={`${className} text-${color} p-2 rounded-md w-${width}`} {...rest}>{children}</button>
    )
}
export default Button;
