import instance from "api/axios";
import axios from "axios";

const getShopBoatProducts = async (id, page = 1, limit = 10, formData = {}) => {
  // let url = `/shopBoats/${id}/products?page=${page}&limit=${limit}`;
  let url = `/shopboat/getListShopBoats`;
  if (formData.name) {
    url += `&name=${formData.name}`;
  }
  if (formData.priceMin) {
    url += `&minPrice=${formData.priceMin}`;
  }
  if (formData.priceMax) {
    url += `&maxPrice=${formData.priceMax}`;
  }
  if (formData.category_id) {
    url += `&category_id=${formData.category_id}`;
  }
  if (formData.inStock) {
    url += `&inStock=${formData.inStock}`;
  }
  if (formData.discount) {
    url += `&discount=${formData.discount}`;
  }
  try {
    const response = await instance.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, data) => {
  try {
    const response = await instance.put(`/products/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await instance.delete(`/products/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (data) => {
  try {
    const response = await instance.post(`products`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getShopBoatByOwnerId = async (id) => {
  try {
    const response = await instance.get(`/user/${id}` + `/shopboat`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateShopBoat = async (data) => {
  try {
    const response = await instance.put("/shopBoats", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllShopBoats = async (page, formData = {}) => {
  let url = `/shopboat/getListShopBoats/${page}`
  if (formData.name) {
    url += `?name=${formData.name}`;
  }
  if (formData.code) {
    url += `?code=${formData.code}`;
  }
  if (formData.phoneNumber) {
    url += `?phoneNumber=${formData.phoneNumber}`;
  }
  if (formData.type) {
    url += `?type=${formData.type}`;
  }
  if (formData.status) {
    url += `?status=${formData.status}`;
  }

  try {
    const response = await instance.get(url);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getTotalPages = async (page, formData = {}) => {
  let url = `/shopboat/getTotalPage/${page}`
  if (formData.name) {
    url += `?name=${formData.name}`;
  }
  if (formData.code) {
    url += `?code=${formData.code}`;
  }
  if (formData.phoneNumber) {
    url += `?phoneNumber=${formData.phoneNumber}`;
  }
  if (formData.status) {
    url += `?status=${formData.status}`;
  }
  try {
    const response = await instance.get(url);
    return response;
  }
  catch (error) {
    console.log(error);
  }
}

const updateShopBoatById = async (id, data) => {
  try {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("avatar", data.avatar);
    formData.append("type", data.type);
    const response = await instance.post(`/shopboat/updateShopBoatById/${id}`, formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateShopBoatStatus = async (id, data) => {
  try {
    const response = await instance.post(`/shopboat/updateStatusById/${id}`, data);
    return response;
  }
  catch (error) {
    console.log(error);
  }
}

const getListCategoriesOfShop = async (id) => {
  try {
    const response = await instance.get(`/shopBoats/${id}/categories`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllShopBoatsWithoutPagination = async () => {
  return instance.get('/shopboat/getListShopBoats');
}

export {
  getShopBoatProducts,
  updateProduct,
  deleteProduct,
  getShopBoatByOwnerId,
  createProduct,
  updateShopBoat,
  getAllShopBoats,
  getTotalPages,
  updateShopBoatById,
  getListCategoriesOfShop,
  getAllShopBoatsWithoutPagination,
  updateShopBoatStatus
};
