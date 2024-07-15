import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import { Table } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    maxHeight: "80vh", // Đặt chiều cao cố định và sử dụng thanh cuộn khi nội dung vượt quá 80vh
    overflowY: "auto", // Tạo thanh cuộn theo chiều dọc
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
export default function DetailModalRPSB({ reportSB }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Tooltip title="Chi tiết">
                <IconButton onClick={handleOpen} color="primary">
                    <VisibilityIcon />
                </IconButton>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="d-flex justify-content-center w-full  mb-4">
                        <img
                            src={reportSB[6]}
                            alt="Tour image"
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Thời gian phản hồi</strong>
                                    </td>
                                    <td>
                                        {moment(reportSB[8]).format("DD/MM/YYYY HH:mm")}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tên khách hàng</strong>
                                    </td>
                                    <td>
                                        {reportSB[4]}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Số điện thoại</strong>
                                    </td>
                                    <td>
                                        <td>{reportSB[9]}</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Email</strong>
                                    </td>
                                    <td>
                                        <td>{reportSB[10]}</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Tên cửa hàng thuyến buôn</strong>
                                    </td>
                                    <td>{reportSB[2]}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Đơn hàng phản ánh</strong>
                                    </td>
                                    <td>{reportSB[11]}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Nội dung phản ánh</strong>
                                    </td>
                                    <td style={{ maxWidth: "460px", wordWrap: "break-word", whiteSpace: 'pre-wrap' }}>{reportSB[5]}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Trạng thái</strong>
                                    </td>
                                    <td>
                                        {reportSB[7] === "Chờ xác nhận" ? (
                                            <Badge bg="warning">Chờ xác nhận</Badge>
                                        ) : reportSB[7] === 1 ? (
                                            <Badge bg="success">Đã xác nhận</Badge>
                                        ) : reportSB[7] === 2 ? (
                                            <Badge bg="danger">Đã hủy</Badge>
                                        ) : (
                                            <Badge bg="info">Đã hoàn thành</Badge>
                                        )
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
