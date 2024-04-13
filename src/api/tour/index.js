import instance from "api/axios";

const getAllTours = async (page, limit, queryCondition = {}) => {
  let url = `/tours?page=${page}&limit=${limit}`;
  if (queryCondition.name) {
    url += `&name=${queryCondition.name}`;
  }
  if (queryCondition.minPrice) {
    url += `&minPrice=${queryCondition.minPrice}`;
  }
  if (queryCondition.maxPrice) {
    url += `&maxPrice=${queryCondition.maxPrice}`;
  }

  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getListTour = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await instance.get("/tour/getAllTour", config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const addTour = async (data) => {
  try {
    const response = await instance.post("/tours", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateTour = async (id, data) => {
  try {
    const response = await instance.patch(`/tours/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteTour = async (id) => {
  try {
    const response = await instance.delete(`/tours/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getBestSalerToursInHomePage = async () => {
  try {
    const response = await instance.get("/customer/tours");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTourBySlug = async (slug, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await instance.get(`/tour/getTourBySlug/${slug}`, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const searchTour = async (page, token, queryCondition = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  let url = `/admin/getListTour/${page}?`;
  if (queryCondition.name) {
    url += `&name=${queryCondition.name}`;
  }
  if (queryCondition.priceFrom) {
    url += `&priceFrom=${queryCondition.priceFrom}`;
  }
  if (queryCondition.priceTo) {
    url += `&priceTo=${queryCondition.priceTo}`;
  }
  if (queryCondition.transport) {
    url += `&transport=${queryCondition.transport}`;
  }
  if (queryCondition.startLocation) {
    url += `&startLocation=${queryCondition.startLocation}`;
  }
  if (queryCondition.tourDuration) {
    url += `&tourDuration=${queryCondition.tourDuration}`;
  }
  try {
    const response = await instance.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const getTotalPageTour = async (page, token, queryCondition = {}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  let url = `/admin/getTotalPageTour/${page}?`;
  if (queryCondition.name) {
    url += `&name=${queryCondition.name}`;
  }
  if (queryCondition.priceFrom) {
    url += `&priceFrom=${queryCondition.priceFrom}`;
  }
  if (queryCondition.priceTo) {
    url += `&priceTo=${queryCondition.priceTo}`;
  }
  if (queryCondition.transport) {
    url += `&transport=${queryCondition.transport}`;
  }
  if (queryCondition.startLocation) {
    url += `&startLocation=${queryCondition.startLocation}`;
  }
  if (queryCondition.tourDuration) {
    url += `&tourDuration=${queryCondition.tourDuration}`;
  }
  try {
    const response = await instance.get(url, config);
    return response;
  } catch (error) {
    throw error;
  }
}



export {
  getAllTours,
  updateTour,
  deleteTour,
  addTour,
  getBestSalerToursInHomePage,
  getTourBySlug,
  getListTour,
  searchTour,
  getTotalPageTour
};
