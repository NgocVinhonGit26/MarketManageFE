import instance from "api/axios";

const getTop4Products = () => {
  try {
    const response = instance.get(`/products/top4`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getAllProductOrderByCategory = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = instance.get(`/product/getAllProductOrderByCategory`, config);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getProductBySlug = (slug) => {
  try {
    const response = instance.get(`/product/getProductBySlug/${slug}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const searchProduct = (page, query = {}) => {

  let url = `/product/searchProduct/${page}?`;
  if (query.name) {
    url += "&name=" + query.name;
  }
  if (query.priceFrom) {
    url += "&priceFrom=" + query.priceFrom;
  }
  if (query.priceTo) {
    url += "&priceTo=" + query.priceTo;
  }
  if (query.countInStock) {
    url += "&countInStock=" + query.countInStock;
  }
  if (query.category) {
    url += "&category=" + query.category;
  }
  if (query.sale) {
    url += "&sale=" + query.sale;
  }


  try {
    const response = instance.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getTotalPageProduct = (page, query = {}) => {
  let url = `/product/getTotalPage/${page}?`;
  if (query.name) {
    url += "&name=" + query.name;
  }
  if (query.priceFrom) {
    url += "&priceFrom=" + query.priceFrom;
  }
  if (query.priceTo) {
    url += "&priceTo=" + query.priceTo;
  }
  if (query.countInStock) {
    url += "&countInStock=" + query.countInStock;
  }
  if (query.category) {
    url += "&category=" + query.category;
  }
  if (query.sale) {
    url += "&sale=" + query.sale;
  }


  try {
    const response = instance.get(url);
    return response
  } catch (error) {
    console.log(error);
  }
};

const getProductByCategory = (page, limit, categorySlug) => {
  try {
    let url =
      "/customer/products/category/" +
      categorySlug +
      "?page=" +
      page +
      "&limit=" +
      limit;
    const response = instance.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {
  getTop4Products,
  getAllProductOrderByCategory,
  getProductBySlug,
  searchProduct,
  getTotalPageProduct,
  getProductByCategory,
};
