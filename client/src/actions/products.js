import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_PRODUCTS,
  PRODUCT_ERROR,
  DELETE_PRODUCT,
  GET_PRODUCT,
} from "./types";

// Get products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });

    dispatch(setAlert("product Removed", "success"));
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get product
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
