import type { HTMLAttributes } from "react";
interface ICircleColor extends HTMLAttributes<HTMLSpanElement>{
colorCircle:string
}
const CircleColor = ({colorCircle,...rest}: ICircleColor) => {
    return (
    <span title={`Click to select color ${colorCircle}`} className="w-5 h-5 cursor-pointer transition-all hover:scale-150 rounded-full inline-block" 
    style={{backgroundColor:colorCircle}} {...rest}>
    </span>
    )
}
export default CircleColor;
