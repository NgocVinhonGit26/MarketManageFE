import DashboardLayout from "layouts/DashboardLayout";
import { getAllShopBoats, getAllShopBoatsWithoutPagination } from "api/shopBoat";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import ShopsTable from "./ShopsTable";
import { Grid } from "@mui/material";
import SearchForm from "./SearchForm";
import { getTotalPages } from "api/shopBoat";

const Shops = () => {
  const [shopBoats, setShopBoats] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 5;
  const [isSearching, setIsSearching] = useState(false);
  const [searchData, setSearchData] = useState([]);


  useEffect(() => {
    const fetchShopBoats = async () => {
      try {
        const total = await getTotalPages(page - 1);
        const response = await getAllShopBoats(page - 1);
        // console.log("dhdhhd 1", response.data)
        setShopBoats(response.data);
        setTotal(total.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    const fetchShopBoatsOnSearch = async (data) => {
      try {
        const response = await getAllShopBoats(page - 1, data);
        const total = await getTotalPages(page - 1, data);
        // console.log("dhdhhd 2", response.data)
        setIsSearching(true);
        setTotal(total.data);
        setShopBoats(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    // isSearching ? fetchShopBoatsOnSearch() : fetchShopBoats();
    fetchShopBoatsOnSearch(searchData)
  }, [shopBoats]);

  const updateData = (data) => {
    const newData = shopBoats.map((shopBoat) => {
      if (shopBoat.id === data.id) {
        return data;
      }
      return shopBoat;
    });
    setShopBoats(newData);
  };

  const onSearch = async (data) => {
    try {
      setPage(1);
      const response = await getAllShopBoats(page - 1, data);
      const total = await getTotalPages(page - 1, data);
      // console.log("dhdhhd 23", total.data)
      setIsSearching(true);
      setTotal(total.data);
      setShopBoats(response.data);

      // setTotal(response.data.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout layoutRole={0}>
      <h1>Quản lí các thuyền buôn</h1>
      <Grid item xs={12}>
        <SearchForm onSearch={onSearch}
          setIsSearching={setIsSearching}
          setPage={setPage}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </Grid>
      <Grid item xs={12}>
        <ShopsTable
          shopBoats={shopBoats}
          updateData={updateData}
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
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </DashboardLayout>
  );
};

export default Shops;
