import type { TFormProduct } from "../types/formTypes";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IFormProduct {
  id: string;
  name: TFormProduct;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean | undefined;
  focus?: boolean | undefined;
}
