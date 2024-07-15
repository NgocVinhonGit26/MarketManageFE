import MarketplaceLayout from "layouts/CustomerLayout/MarketplaceLayout";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import FilterBar from "./FilterBar";
import "./style.scss";
import BtnOrder from "./BtnOrder";
import BasicBreadcrumbs from "./Breadcrumbs";
import MenuIcon from "@mui/icons-material/Menu";
import GridTable from "./Grid";
import { useParams, useLocation } from "react-router-dom";
import { searchProduct, getProductByCategory } from "api/product";
import Pagination from "@mui/material/Pagination";
import { getCategoryBySlug } from "api/category";
import { getTotalPageProduct } from "api/product";
import { searchProductForUser } from "api/product";
import { getTotalPageSearchProductForUser } from "api/product";
import { searchProductByName } from "api/product";
import { getTotalPageSearchProductByName } from "api/product";
import { set } from "date-fns";

const Searchpage = () => {
  const [cost, setCost] = React.useState([0, 500000]);
  const minDistance = 10000;
  const [priceFrom, setPriceFrom] = React.useState(0);
  const [priceTo, setPriceTo] = React.useState(0);
  const location = useLocation();
  const { categorySlug, name } = useParams();
  const [page, setPage] = React.useState(1);
  const [pageSearch, setPageSearch] = React.useState(1);
  const [pageFilter, setPageFilter] = React.useState(1);
  const [isSearch, setIsSearch] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [limit, setLimit] = React.useState(8);
  const [totalPages, setTotalPages] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  const [category, setCategory] = React.useState({});
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const fetchProducts = async (currentPage) => {
    try {
      const response = await searchProductByName(currentPage - 1, { name });
      const totalPages = await getTotalPageSearchProductByName(currentPage - 1, { name });
      setProducts(response.data);
      setTotalPages(totalPages.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByPrice = async (currentPage) => {

    try {
      const response = await searchProductForUser(currentPage - 1, { priceFrom, priceTo });
      const totalPages = await getTotalPageSearchProductForUser(currentPage - 1, { priceFrom, priceTo });
      setProducts(response.data.content);
      setTotalPages(totalPages.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (isSearch) {
      filterByPrice(pageSearch);
    } else {
      fetchProducts(page);
    }
  }, [page, pageSearch, isSearch]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  React.useEffect(() => {
    setPriceFrom(cost[0]);
    setPriceTo(cost[1]);
  }, [cost]);

  const handleFilterByPrice = () => {
    setIsSearch(true);
    setPageSearch(1);
    filterByPrice(1);  // Reset to first page when filtering
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 270,
        paddingLeft: "10px",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <span
        style={{
          fontSize: "1.5em",
          fontWeight: "600",
        }}
      >
        BỘ LỌC
      </span>
      <Divider
        style={{
          color: "white",
          opacity: "inherit",
          backgroundColor: "#7DB249",
          height: "3px",
          width: "100%",
          maxWidth: "30px",
          marginTop: "0.66em",
        }}
      />
      <span
        style={{
          fontSize: "1.em",
          fontWeight: "600",
        }}
      >
        LỌC THEO GIÁ
      </span>
      <FilterBar
        cost={cost}
        setCost={setCost}
        minDistance={minDistance}
        minPrice={0}
        maxPrice={500000}
      />
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success" onClick={handleFilterByPrice}>
          LỌC
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Giá:&nbsp;
          <span>{cost[0]}₫</span>-<span>{cost[1]}₫</span>
        </div>
      </Stack>
    </Box>
  );

  return (
    <MarketplaceLayout>
      <div className="container-searchpage">
        <div className="searchpage">
          <div className="search-title">
            <div className="search-title-left">
              {name && (
                <div className="text-search">
                  <h2>Kết quả tìm kiếm: “{name}”</h2>
                </div>
              )}
              {category?.name && (
                <div className="text-search">
                  <h2>{category?.name}</h2>
                </div>
              )}
              <div className="path-result">
                <BasicBreadcrumbs name={name} category={category} />
              </div>
              <div className="category-filter">
                {["Bộ lọc"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon />
                      {anchor}
                    </Button>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="search-title-right">
              <div className="woocommerce-result-count">
                Hiển thị 1–12 của 13 kết quả
              </div>
              <div className="woocommerce-ordering">
                <BtnOrder
                  setIsFilter={setIsFilter}
                  setPageFilter={setPageFilter}
                  pageFilter={pageFilter}
                  setProducts={setProducts}
                  setPage={setPage}
                  fetchProducts={fetchProducts}
                  setTotalPages={setTotalPages}
                />
              </div>
            </div>
          </div>
          {products?.length > 0 ? (
            <div className="search-content mt-2">
              <GridTable products={products} />
              <div className="flex justify-center mb-3">
                <Pagination
                  count={totalPages}
                  onChange={(event, value) => {
                    if (isSearch) {
                      setPageSearch(value);
                    } else if (isFilter) {
                      setPageFilter(value);
                    }
                    else {
                      setPage(value);
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <span className="my-4 block mt-2">
              Không có sản phẩm nào phù hợp với tìm kiếm của bạn.
            </span>
          )}
        </div>
      </div>
    </MarketplaceLayout>
  );
};

export default Searchpage;