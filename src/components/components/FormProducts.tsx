import type { IFormProduct } from "../interface/products";

export const FormProducts: IFormProduct[] = [
    {
        id:"title",
        name:"title",
        label:"Product Title",
        type:"text",
        placeholder:"Enter product title",
        required:true,
        focus:true,
    },
    {
        id:"description",
        name:"description",
        label:"Product Description",
        type:"text",
        placeholder:"Enter product description",
        required:true
    },
    {
        id:"imageUrl",
        name:"imageUrl",
        label:"Product Image URL",
        type:"text",
        placeholder:"Enter product image URL",
        required:true
    },
    {
        id:"price",
        name:"price",
        label:"Product Price",
        type:"number",
        placeholder:"Enter product price",
        required:true
    },

]