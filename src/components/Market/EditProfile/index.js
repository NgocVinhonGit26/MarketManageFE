import MarketplaceLayout from "layouts/CustomerLayout/MarketplaceLayout";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BillsTable from "./BillsTable";
import Address from "./Address";
import { signoutService } from "api/auth";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { successToast } from "utilities/toast";
import { setUserDefault } from "redux/slices/userSlice";
import { resetListOderProduct } from "redux/slices/listOrderProductSlice";
import InformationUser from "./InformationUser";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ width: "800px" }}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </ div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function EditProfile() {
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const token = useSelector((state) => state.user.token);

    const handleSignOut = async () => {

        try {
            const response = await signoutService(token);
            console.log("token1>>>>", token);
            console.log("response", response);
            successToast("Đăng xuất thành công");
            localStorage.removeItem("accessToken");
            dispatch(setUserDefault());
            dispatch(resetListOderProduct());
            navigate("/marketplace");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <MarketplaceLayout>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F7F7F7",
                borderBottom: "1px solid #ececec"
            }}
            >
                <h2 style={{ display: "flex", alignItems: "center", height: "70px" }}
                >
                    TÀI KHOẢN CÁ NHÂN
                </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        flexGrow: 1, bgcolor: 'background.paper'
                        , display: 'flex'
                        , minHeight: 430
                        , justifyContent: "center"
                    }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'text.primary', color: "success.main" }}
                    >
                        <Tab label="Tài khoản" {...a11yProps(0)} />
                        <Tab label="Đơn hàng" {...a11yProps(1)} />
                        <Tab label="Địa chỉ" {...a11yProps(2)} />
                        <Tab label="Đăng xuất" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <InformationUser />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BillsTable></BillsTable>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Address></Address>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <h2>Bạn có muốn đăng xuất không?</h2>
                        <button onClick={handleSignOut} style={{ backgroundColor: "#f50057", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px" }}>Đăng xuất</button>
                    </TabPanel>
                </Box>
            </div>
        </MarketplaceLayout >
    );
}