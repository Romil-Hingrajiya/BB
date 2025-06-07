// src/api/api.js
import axios from "axios";

const BASE_URL = "https://backend.buildbazar.in/public/api";


// Fetch banners
export const getBanners = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/get-banners`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching banners:", err);
    throw err;
  }
};

// Fetch products
export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/get-products?all=`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    throw err;
  }
};

// Fetch brands
export const getBrands = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/get-brands`);
    return res.data;
  } catch (err) {
    console.error("❌ Error fetching brands:", err);
    throw err;
  }
};
