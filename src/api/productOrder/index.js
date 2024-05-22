import userEvent from "@testing-library/user-event";
import instance from "api/axios";

const getOrdersOfShop = (shopBoatId, page, limit, searchParams = {}) => {
  let url = `/shopBoats/${shopBoatId}/orders?page=${page}&limit=${limit}`;
  if (searchParams.customerName) {
    url += `&customerName=${searchParams.customerName}`;
  }
  if (searchParams.phoneNumber) {
    url += `&phoneNumber=${searchParams.phoneNumber}`;
  }
  if (searchParams.startDate) {
    url += `&startDate=${searchParams.startDate}`;
  }
  if (searchParams.endDate) {
    url += `&endDate=${searchParams.endDate}`;
  }
  if (searchParams.minValue) {
    url += `&minValue=${searchParams.minValue}`;
  }
  if (searchParams.maxValue) {
    url += `&maxValue=${searchParams.maxValue}`;
  }
  if (searchParams.address) {
    url += `&address=${searchParams.address}`;
  }
  if (searchParams.status) {
    url += `&status=${searchParams.status}`;
  }
  try {
    const response = instance.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateOrderStatus = (orderId, status, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let formData = new FormData();
    formData.append("status", status);
    const response = instance.post(`/merchant/updateStatusOrderItemById/${orderId}`, formData, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createOrderProduct = (data) => {
  try {
    const response = instance.post("/product/createOrderProduct", data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getLastOrderProduct = (userId) => {
  try {
    const response = instance.get(`/product/getLastOrderProduct?userId=${userId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const insertOrderItem = (data) => {
  try {
    const response = instance.post("/product/insertOrderItem", data);
    return response;
  }
  catch (error) {
    console.log(error);
  }
}







export {
  getOrdersOfShop,
  updateOrderStatus,
  createOrderProduct,
  getLastOrderProduct,
  insertOrderItem
};
