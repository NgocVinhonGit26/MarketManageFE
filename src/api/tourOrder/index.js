import instance from "api/axios";

const getAllTourOrders = async (page, queryCondition = {}, token) => {
  let url = `/admin/getListOrderTour/${page}?`;
  console.log("page >>>>>>> aka: ", page)
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  if (queryCondition.status) {
    url += `&status=${queryCondition.status}`;
  }

  if (queryCondition.userName) {
    url += `&userName=${queryCondition.userName}`;
  }

  if (queryCondition.tourName) {
    url += `&tourName=${queryCondition.tourName}`;
  }

  console.log("url >>>>>>> aka: ", url)
  try {
    const response = await instance.get(url, config);
    // console.log("response >>>>>>> aka: ", response)
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTotalPageOrderTour = async (page, queryCondition = {}, token) => {
  let url = `/admin/getTotalPageOrderTour/${page}?`;
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  if (queryCondition.status) {
    url += `&status=${queryCondition.status}`;
  }
  if (queryCondition.userName) {
    url += `&userName=${queryCondition.userName}`;
  }
  if (queryCondition.tourName) {
    url += `&tourName=${queryCondition.tourName}`;
  }

  // console.log("url >>>>>>> aka: ", url)
  try {
    const response = await instance.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const orderTour = async (data, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.post("/tour/insertOrder", data, config);
    return response;
  } catch (error) {
    throw error;
  }
}

const updateTourOrder = async (tourOrderId, tourOrderData) => {
  let url = `/tour-orders/${tourOrderId}`;
  try {
    const response = await instance.put(url, tourOrderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const changeStatus = async (tourOrderId, status) => {
  let url = `/tour-orders/${tourOrderId}/status`;
  try {
    const response = await instance.patch(url, { status: status });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAllTourOrders, updateTourOrder, changeStatus, getTotalPageOrderTour, orderTour };
