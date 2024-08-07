import "./style.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Description from "./Description";
import Information from "./Information";
import Review from "./Review";
import ReportSB from "./Report";
const ProductFooter = (props) => {
  const { product } = props;
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log("product footer: ", product);
  return (
    <div className="product-footer">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="MÔ TẢ" value="1" />
              <Tab label="THÔNG TIN BỔ SUNG" value="2" />
              <Tab label="ĐÁNH GIÁ " value="3" />
              <Tab label="PHẢN ÁNH" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Description description={product.description} />
          </TabPanel>
          <TabPanel value="2">
            <Information videoInfor={product.videoInfor} />
          </TabPanel>
          <TabPanel value="3">
            <Review
              productId={product.id}
            />
          </TabPanel>
          <TabPanel value="4">
            <ReportSB
              product={product}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default ProductFooter;
