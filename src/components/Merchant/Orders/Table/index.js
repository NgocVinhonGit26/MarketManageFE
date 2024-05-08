import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { updateOrderStatus } from "api/productOrder";
import DetailModal from "./DetailModal";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { getOrderItemByOrderProductId } from "api/shopBoat";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function OrdersTable({ orders, updateData }) {

  const accessToken = localStorage.getItem("accessToken");
  const idShopBoat = localStorage.getItem("shopBoatId");
  const [orderItems, setOrderItems] = React.useState([]);
  const [status, setStatus] = React.useState("pending");


  const getOrderItem = async (orderProductId, status) => {
    try {
      console.log("orderProductId>>>>>>", orderProductId);
      const response = await getOrderItemByOrderProductId(idShopBoat, orderProductId, accessToken);
      setOrderItems(response.data);
      setStatus(status);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const handleChaneStatus = async (orderId) => {
      try {
        console.log("huhuhuhhuksls: ", orderItems);
        const response = await updateOrderStatus(orderId, status, accessToken);
        console.log("response updateOrderStatus>>>>>>", response);
        // if (response?.status === 200) {
        //   updateData(response.data);
        // }

      } catch (err) {
        console.log(err);
      }
    };

    if (orderItems.length > 0) {
      orderItems.map((item) => {
        handleChaneStatus(item.id);
      });
    }
  }, [orderItems, status]);



  useEffect(() => {
    console.log("orders>>>>>>", orders);
  }, [orders]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <span className="font-bold">Thời gian đặt hàng</span>
            </StyledTableCell>
            <StyledTableCell>
              <span className="font-bold">Tên khách hàng</span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <span className="font-bold">Điện thoại</span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <span className="font-bold">Địa chỉ</span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <span className="font-bold">Tổng hóa đơn</span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <span className="font-bold">Trạng thái</span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <span className="font-bold">Chi tiết</span>
            </StyledTableCell>
            <StyledTableCell align="center">
              <span className="font-bold">Thao tác</span>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">
                {moment(order.createdAt).format("DD/MM/YYYY HH:mm")}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <span className="font-semibold">
                  {order.userName}
                </span>
              </StyledTableCell>
              <StyledTableCell align="center">
                {order.userNumberPhone}
              </StyledTableCell>
              <StyledTableCell align="center">
                {order.userAddress}
              </StyledTableCell>
              <StyledTableCell align="center">{order.total}</StyledTableCell>
              <StyledTableCell align="center">
                {status === "pending" ? (
                  <Badge pill bg="warning">
                    Chờ xác nhận
                  </Badge>
                ) : status === "accepted" ? (
                  <Badge pill bg="success">
                    Đã xác nhận
                  </Badge>
                ) : status === "cancelled" ? (
                  <Badge pill bg="danger">
                    Đã hủy
                  </Badge>
                ) : status === "delivering" ? (
                  <Badge pill bg="info">
                    Đang giao hàng
                  </Badge>
                ) : (
                  <Badge pill bg="primary">
                    Đã hoàn thành
                  </Badge>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                <DetailModal order={order} />
              </StyledTableCell>
              <StyledTableCell align="center">
                {status === "pending" && (
                  <div className="flex">
                    <Tooltip title="Xác nhận">
                      <IconButton
                        onClick={() => getOrderItem(order.id, "accepted")}
                        // onClick={() => getOrderItem(order.id)}
                        color="success"
                      >
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Hủy">
                      <IconButton
                        onClick={() => getOrderItem(order.id, "cancelled")}
                        // onClick={() => getOrderItem(order.id)}
                        color="error"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                )}
                {
                  status === "accepted" && (
                    <Tooltip title="Giao hàng">
                      <IconButton
                        onClick={() => getOrderItem(order.id, "delivering")}
                        // onClick={() => getOrderItem(order.id)}
                        color="info"
                      >
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                  )
                }

                {
                  status === "delivering" && (
                    <Tooltip title="Đã hoàn thành">
                      <IconButton
                        onClick={() => getOrderItem(order.id, "completed")}
                        // onClick={() => getOrderItem(order.id)}
                        color="primary"
                      >
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                  )
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
