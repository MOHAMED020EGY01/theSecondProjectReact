import type { IProduct } from "../interface/products";

export const Products: IProduct[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    description: "High-quality Bluetooth headphones with noise cancellation.",
    imageUrl: "https://picsum.photos/seed/headphones/400/300",
    price: "89.99",
    colors: ["#000000", "#FFFFFF", "#1E90FF"],
    category: {
      name: "Electronics",
      imageUrl: "https://picsum.photos/seed/electronics/400/300",
    },
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Fitness tracking smartwatch with heart-rate monitor and GPS.",
    imageUrl: "https://picsum.photos/seed/watch/400/300",
    price: "149.5",
    colors: ["#FF5733", "#2ECC71", "#3498DB"],
    category: {
      name: "Wearables",
      imageUrl: "https://picsum.photos/seed/wearables/400/300",
    },
  },
  {
    id: 3,
    title: "Gaming Mouse",
    description: "Ergonomic RGB gaming mouse with customizable DPI settings.",
    imageUrl: "https://picsum.photos/seed/mouse/400/300",
    price:"59.99",
    colors: ["#000000", "#FF0000", "#00FF00"],
    category: {
      name: "Accessories",
      imageUrl: "https://picsum.photos/seed/accessories/400/300",
    },
  },
  {
    id: 4,
    title: "Leather Backpack",
    description: "Stylish leather backpack with multiple compartments.",
    imageUrl: "https://picsum.photos/seed/backpack/400/300",
    price: "119.0",
    colors: ["#8B4513", "#A0522D", "#2F4F4F"],
    category: {
      name: "Fashion",
      imageUrl: "https://picsum.photos/seed/fashion/400/300",
    },
  },
  {
    id: 5,
    title: "Running Shoes",
    description: "Lightweight running shoes with breathable mesh design.",
    imageUrl: "https://picsum.photos/seed/shoes/400/300",
    price: "79.99",
    colors: ["#FFFFFF", "#000000", "#FF4500"],
    category: {
      name: "Sports",
      imageUrl: "https://picsum.photos/seed/sports/400/300",
    },
  },
];

export const colors: string[] = [
  "#000000", // أسود
  "#BBBBBB", // أبيض
  "#FF5733", // برتقالي محمر
  "#33B5FF", // أزرق سماوي
  "#28A745", // أخضر
  "#FFC107", // أصفر ذهبي
  "#8E44AD", // بنفسجي غامق
  "#E91E63", // وردي
  "#795548", // بني
  "#00BCD4", // فيروزي
  "#607D8B", // رمادي مزرق
  "#FF9800", // برتقالي قوي
];
