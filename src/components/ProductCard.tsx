import { textSlicer } from "./helper/function";
import Button from "./ui/Button";
import Img from "./ui/Img";
interface IProductCard {
    product: {
        id: number;
        title: string;
        description: string;
        price: string;
        imageUrl: string;
        colors: string[];
    };
}
const ProductCard = ({ product }: IProductCard) => {
    const { title, description, price, imageUrl, colors } = product;

    // Render
    const renderColor = () =>{
        return (
            colors.map((color, index) => (
                <span title={`Color ${color}`} key={index} className="w-5 h-5 rounded-full inline-block hover:scale-150 transition-all" style={{ backgroundColor: color }}></span>
            ))
        );
    }
    return (
        <div className="p-5">
            <Img src={imageUrl} alt={`Product Image ${title}`} className="w-full h-auto rounded-md"  />
            <h2 className="m-2 text-xl text-blue-500">{title}</h2>
            <p>{textSlicer(description,40)}</p>

            <div className="flex items-center space-x-2 my-2">
                {renderColor()}
            </div>
            <div className="flex items-center justify-between mb-2">
                <span>${price}</span>
                <Img src={imageUrl} alt={`Product Image ${title}`} className="w-10 h-10 rounded-full" />
            </div>

            <div className="flex space-x-2">
                <Button className="bg-blue-500"
                onClick={(): void => {
                    console.log("Edit")
                }}
                >
                    Edit 🖋️</Button>
                <Button className="bg-red-500"
                onClick={(): void => {
                    console.log("Delete")
                }}
                >
                    Delete 🗑️</Button>
            </div>
        </div>
    )
}
export default ProductCard;

