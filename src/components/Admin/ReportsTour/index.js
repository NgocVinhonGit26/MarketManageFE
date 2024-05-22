import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from "react";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import DashboardLayout from "layouts/DashboardLayout";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}



export default function ReportAdmin() {
    const [data, setData] = React.useState([
        { title: "Số đơn", value: 0 },
        { title: "Doanh thu", value: 0 },
        { title: "Chi phí", value: 0 }
    ]);


    return (
        <DashboardLayout layoutRole={0}>
            <Box sx={{ display: "flex" }}>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            {data.map((item) => (
                                <Grid item xs={15} md={4} lg={3}> {/* key là bắt buộc */}
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            height: 200,
                                        }}
                                    >
                                        <Deposits /> {/* Truyền dữ liệu mỗi item, không phải data */}
                                    </Paper>
                                </Grid>
                            ))}


                            <Box sx={{ minWidth: 150, marginLeft: 5, border: 'none' }}>
                                <FormControl fullWidth color="success" sx={{ backgroundColor: '#E9FBF0' }} variant='filled'>
                                    <InputLabel id="demo-simple-select-label">Bộ lọc</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={value}
                                        label="Bộ lọc"
                                    // onChange={handleChange}

                                    >
                                        <MenuItem value={1}>Hôm nay</MenuItem>
                                        <MenuItem value={2}>Theo ngày</MenuItem>
                                        <MenuItem value={3}>Theo tuần</MenuItem>
                                        <MenuItem value={4}>Theo tháng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Container>
                    {/* <Toolbar /> */}
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <Chart />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </DashboardLayout >
    );
}
