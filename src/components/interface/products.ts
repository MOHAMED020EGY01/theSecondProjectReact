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

export interface IFromProduct {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  focus?: boolean;
}
