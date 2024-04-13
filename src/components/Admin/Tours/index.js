import DashboardLayout from "layouts/DashboardLayout";
import Pagination from "@mui/material/Pagination";
import { Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import ToursTable from "./Table";
import { getAllTours } from "api/tour";
import SearchForm from "./SearchForm";
import { searchTour, getTotalPageTour } from "api/tour";
const Tours = () => {
  const [tours, setTours] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 5;
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await searchTour(page - 1, accessToken);
        const totalPageTour = await getTotalPageTour(page - 1, accessToken);
        setTours(response);
        setTotal(totalPageTour.data);
        console.log("response totalPageTour: ", total);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearch = (name, priceFrom, priceTo, transport, startLocation, tourDuration) => {

    let queryCondition = {};
    if (name) {
      queryCondition.name = name;
    }
    if (priceFrom) {
      queryCondition.priceFrom = priceFrom;
    }
    if (priceTo) {
      queryCondition.priceTo = priceTo;
    }
    if (transport) {
      queryCondition.transport = transport;
    }
    if (startLocation) {
      queryCondition.startLocation = startLocation;
    }
    if (tourDuration) {
      queryCondition.tourDuration = tourDuration;
    }
    const fetchTours = async () => {
      try {
        const response = await searchTour(page - 1, accessToken, queryCondition);
        console.log("response search tour: ", response);
        setTours(response);
        // setTotal(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  };

  return (
    <DashboardLayout layoutRole={0}>
      <h1>Quản lí Tour du lịch</h1>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <SearchForm onSearch={handleSearch} setTours={setTours} />
          <ToursTable tours={tours} setTours={setTours} />
        </Paper>
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

export default Tours;
