import type { InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    rest: InputHTMLAttributes<HTMLInputElement>
}
const Input = ({rest}: IInput) => {
    return (
        <input {...rest} className="rounded-lg border-4 border-gray-300 focus:border-blue-500 focus:outline-none p-3 w-full"/>
    )
}
export default Input;
