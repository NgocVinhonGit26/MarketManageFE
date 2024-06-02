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

const updateOrderStatus = (status, orderProductId, shopBoatId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let formData = new FormData();
    formData.append("status", status);
    formData.append("orderProductId", orderProductId);
    formData.append("shopBoatId", shopBoatId);
    const response = instance.post(`/merchant/updateStatusOrderItemById`, formData, config);
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


const getTotalPriceOrderItemByShopBoatIdInMonth = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = instance.get(`/admin/getTotalPriceOrderItemByShopBoatIdInMonth`, config);
    return response;
  } catch (error) {
    console.log(error);
  }

}

const getTotalPriceOrderItemByShopBoatIdInYear = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = instance.get(`/admin/getTotalPriceOrderItemByShopBoatIdInYear`, config);
    return response;
  } catch (error) {
    console.log(error);
  }

}


const getTop5ProductByRevenueInToday = (shopBoatId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = instance.get(`/merchant/getTop5ProductByRevenueInToday/${shopBoatId}`, config);
    return response;
  } catch (error) {
    console.log(error);
  }

}

const getTop5ProductByRevenueInThisWeek = (shopBoatId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = instance.get(`/merchant/getTop5ProductByRevenueInThisWeek/${shopBoatId}`, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const getTop5ProductByRevenueInThisMonth = (shopBoatId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = instance.get(`/merchant/getTop5ProductByRevenueInThisMonth/${shopBoatId}`, config);
    return response;
  } catch (error) {
    console.log(error);
  }

}

const getTop5ProductByRevenueInThisYear = (shopBoatId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = instance.get(`/merchant/getTop5ProductByRevenueInThisYear/${shopBoatId}`, config);
    return response;
  } catch (error) {
    console.log(error);
  }

}



export {
  getOrdersOfShop,
  updateOrderStatus,
  createOrderProduct,
  getLastOrderProduct,
  insertOrderItem,
  getTotalPriceOrderItemByShopBoatIdInMonth,
  getTotalPriceOrderItemByShopBoatIdInYear,
  getTop5ProductByRevenueInToday,
  getTop5ProductByRevenueInThisWeek,
  getTop5ProductByRevenueInThisMonth,
  getTop5ProductByRevenueInThisYear
};
