interface Product {
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

export const productValidation = (product: Product) => {
  const error: Product = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };
  const imageUrlRegex =
    /^https?:\/\/(?!(?:localhost|127(?:\.\d{1,3}){3}|10(?:\.\d{1,3}){3}|192\.168(?:\.\d{1,3}){2}|172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2}))([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?$/i.test(
      product.imageUrl
    );

  if (product.title.trim().length < 4 || product.title.length > 20) {
    error.title =
      "Title must be at least 4 characters long and at most 20 characters long.";
  }
  if (
    product.description.trim().length < 10 ||
    product.description.length > 200
  ) {
    error.description =
      "Description must be at least 10 characters long and at most 200 characters long.";
  }
  if (!product.imageUrl.trim() || !imageUrlRegex) {
    error.imageUrl = "Image URL must be a valid URL and point to an image file.";
  }
  if (
    isNaN(Number(product.price)) ||
    Number(product.price) <= 0
  ) {
    error.price = "Price must be greater than 0.";
  }
  return error;
};
