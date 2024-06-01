import DashboardLayout from "layouts/DashboardLayout";
import { Grid, Paper } from "@mui/material";
import { useLayoutEffect, useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import OrdersTable from "./Table";
import Pagination from "@mui/material/Pagination";
import SearchForm from "./SearchForm";
import { getShopBoatByIdUser } from "api/shopBoat";

import { getAllListOrderItem } from "api/shopBoat";
import { getAllListOrderProduct } from "api/shopBoat";
import { getTotalPageOrderProduct } from "api/shopBoat";

const Orders = () => {
  const [shopBoatId, setShopBoatId] = useState(null);
  const limit = 5;
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");
  const role = parseInt(localStorage.getItem("role"), 10);


  useLayoutEffect(() => {
    const checkRole = async () => {
      if (accessToken) {
        if (role !== 1) {
          navigate("/signin");
        }
        const fetchShopBoat = async (id) => {
          const response = await getShopBoatByIdUser(id, accessToken);
          if (response) {
            const shopBoatId = response.data.id;
            setShopBoatId(shopBoatId);
          }
        };
        fetchShopBoat(id);
      } else {
        // Nếu không có access_token, chuyển hướng đến trang đăng nhập
        navigate("/signin");
      }
    };
    checkRole();
  }, [accessToken, navigate]);

  useEffect(() => {
    if (shopBoatId) {
      const fetchOrders = async () => {
        try {
          const response = await getAllListOrderProduct(shopBoatId, page - 1, accessToken);
          const totalPage = await getTotalPageOrderProduct(shopBoatId, page - 1, accessToken);
          if (response?.status === 200) {
            setOrders(response.data);
            setTotal(totalPage.data);
          }

        } catch (err) {
          console.log(err);
        }
      };
      fetchOrders();
    }
  }, [shopBoatId, page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const updateData = (data) => {
    const newOrders = orders.map((order) => {
      if (order.id === data.id) {
        return data;
      }
      return order;
    });
    setOrders(newOrders);
  };

  const handleSearch = (data) => {
    const fetchOrders = async () => {
      try {
        const response = await getAllListOrderItem(shopBoatId, page, accessToken);
        // if (response?.status === 200) {
        //   setOrders(response.data.data.docs);
        //   setTotal(response.data.data.totalPages);
        // }
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  };

  return (
    <DashboardLayout layoutRole={1}>
      <Grid item xs={12}>
        <SearchForm onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12}>
        <OrdersTable orders={orders} updateData={updateData} />
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

export default Orders;
