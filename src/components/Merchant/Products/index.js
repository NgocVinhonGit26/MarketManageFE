import DashboardLayout from "layouts/DashboardLayout";
import { Grid, Paper } from "@mui/material";
import ProductsTable from "./Table";
import { useEffect, useState, useLayoutEffect } from "react";
import { getShopBoatProducts, deleteProduct } from "api/shopBoat";
import Pagination from "@mui/material/Pagination";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { navigate } from "react-router-dom";
import { getShopBoatByOwnerId } from "api/shopBoat";
import { getListCategories } from "api/category";
import { useNavigate } from "react-router-dom";
import ProductSearchForm from "./ProductSearchForm";
import { searchProduct, getTotalPageProduct } from "api/product";

const MerchantProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [cookies, setCookie] = useCookies(["access_token"]);
  const limit = 5;
  const navigate = useNavigate();
  const [shopBoatId, setShopBoatId] = useState(null);
  const [categories, setCategories] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const idShop = localStorage.getItem("shopBoatId");

  // useLayoutEffect(() => {
  //   const checkRole = async () => {
  //     if (cookies.access_token) {
  //       const { id, role } = await jwt_decode(cookies.access_token);
  //       if (role !== 1) {
  //         navigate("/signin");
  //       }
  //       const fetchShopBoat = async (id) => {
  //         const response = await getShopBoatByOwnerId(id);
  //         if (response) {
  //           const shopBoatId = response.data.data._id;
  //           setShopBoatId(shopBoatId);
  //         }
  //       };
  //       fetchShopBoat(id);
  //     } else {
  //       // Nếu không có access_token, chuyển hướng đến trang đăng nhập
  //       // navigate("/signin");
  //     }
  //   };
  //   checkRole();
  // }, [cookies.access_token, navigate]);
  const fetchProducts = async (formData = {}) => {
    const response = await searchProduct(page - 1, formData, idShop, accessToken);
    const totalPages = await getTotalPageProduct(page - 1, formData, idShop, accessToken);
    console.log("response searchProduct:", response)
    console.log("totalPages:", totalPages)
    setProducts(response.data);
    setTotal(totalPages.data);
  };
  useEffect(() => {

    fetchProducts();
  }, [page]);





  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const updateData = (updatedProduct) => {
    let newProducts = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await deleteProduct(id);
      if (response) {
        let newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async (formData) => {
    try {
      const response = await searchProduct(page - 1, accessToken, formData);
      const totalPages = await getTotalPageProduct(page - 1, accessToken, formData);
      console.log("response searchProduct:", response)
      console.log("totalPages:", totalPages)
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = (product) => {
    let newProducts = [product, ...products];
    setProducts(newProducts);
  };

  return (
    <DashboardLayout layoutRole={1}>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <ProductSearchForm
          onSearch={handleSearch}
          categories={categories}
          updateData={updateData}
          addProduct={addProduct}
        />
      </Grid>
      <Grid item xs={12}>
        <ProductsTable
          products={products}
          updateData={updateData}
          handleDeleteProduct={handleDeleteProduct}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <Pagination
          count={total}
          color="primary"
          size="large"
          onChange={handleChangePage}
        />
      </Grid>
    </DashboardLayout>
  );
};

export default MerchantProducts;
