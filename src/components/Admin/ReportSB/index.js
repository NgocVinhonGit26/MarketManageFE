import DashboardLayout from "layouts/DashboardLayout";
import Pagination from "@mui/material/Pagination";
import { Grid, Paper } from "@mui/material";
import ReportSbSearchForm from "./Searchform";
import ReportSbTable from "./Table";
import { useEffect, useState } from "react";
import { getListReportSB } from "api/user";
import { getTotalPageReportSB } from "api/user";

const ReportSB = () => {
    const [listReportSB, setListReportSB] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1)
    const [pageSearch, setPageSearch] = useState(1)
    const [total, setTotal] = useState(0);
    const [isSearch, setIsSearch] = useState(false);
    const accessToken = localStorage.getItem("accessToken");

    const fetchReportSB = async (queryCondition = {}) => {
        try {
            const repsonse = await getListReportSB(pageCurrent - 1, accessToken)
            const total = await getTotalPageReportSB(pageCurrent - 1, accessToken)
            setListReportSB(repsonse.data.content)
            setTotal(total.data)

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!isSearch) {
            fetchReportSB([])
        }
    }, [pageCurrent]);

    const handleChangePage = (event, value) => {
        if (isSearch) {
            setPageSearch(value);
        }
        else {
            setPageCurrent(value);
        }
    }

    const handleSearch = (page, queryCondition) => {
    }

    const updateData = (data) => {
        const newData = listReportSB.map((item) => {
            if (item[0] === data.id) {
                return [
                    item[0], // id
                    item[1], // shop_boat_id
                    item[2], // shop_boat_name
                    item[3], // user_id
                    item[4], // user_name
                    item[5], // description
                    item[6], // imgrp
                    data.status, // status
                    item[8]  // created_at
                ];
            }
            return item;
        });
        setListReportSB(newData);
    }


    return (
        <DashboardLayout layoutRole={0} >
            <h1>Quản lí đặt Phản hồi khách hàng</h1>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <ReportSbSearchForm
                    // onSearch={handleSearch}
                    // fetchTourOrders={fetchTourOrders}
                    // setIsSearch={setIsSearch}
                    // pageSearch={pageSearch}
                    // setPageSearch={setPageSearch}
                    // setPageCurrent={setPageCurrent}
                    />
                    <ReportSbTable

                        listReportSB={listReportSB}
                        setListReportSB={setListReportSB}
                        updateData={updateData}
                    />
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
    )
}

export default ReportSB;