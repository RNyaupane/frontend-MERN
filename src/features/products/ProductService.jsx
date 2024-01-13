import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (productId) => {
  try {
    const response = await axios.put(
      `${base_url}product/wishlist`,
      { productId },
      config
    );
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error adding to wishlist:", error);
  }
};

export const productService = {
  getProducts,
  addToWishlist,
};
