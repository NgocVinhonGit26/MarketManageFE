import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { Badge, Button } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Tooltip from "@mui/material/Tooltip";
import DetailModalRPSB from "./DetailModal";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import SendMail from "./SendMail";
import { updateStatusReport } from "api/user";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function ReportSbTable({ listReportSB, updateData }) {
    const form = useRef();
    const accessToken = localStorage.getItem("accessToken");
    const [user_name, setUser_name] = useState('');
    const [user_email, setUser_email] = useState('');
    const [message, setMessage] = useState('');

    const updateStatusReportSB = async (id, status, reportSB) => {
        setUser_name(reportSB[4]);
        setUser_email(reportSB[10]);
        if (status === 'Đang xử lý') {
            setMessage('Hiện tại ý kiến phản ánh của bạn đã được chúng tôi tiếp nhận và đang trong quá trình xử lý xác minh. Nếu bạn có yêu cầu gì hãy liên hệ với chúng tôi qua email này. Xin cảm ơn!');
        } else if (status === 'Từ chối') {
            setMessage('Chúng tôi rất tiếc phải thông báo rằng ý kiến phản ánh của bạn đã bị từ chối. Nếu bạn có bất kỳ thắc mắc nào, hãy liên hệ với chúng tôi qua email này. Xin cảm ơn!');
        } else if (status === 'Đã hoàn thành') {
            setMessage('Chúng tôi xin thông báo rằng ý kiến phản ánh của bạn đã được xử lý và hoàn thành. Nếu bạn có bất kỳ thắc mắc nào, hãy liên hệ với chúng tôi qua email này. Xin cảm ơn!');
        }

        try {
            const response = await updateStatusReport(id, status, accessToken);
            if (response.status === 200) {
                updateData(response.data);
                sendEmail();
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const sendEmail = () => {
        emailjs
            .sendForm('service_91lbmvf', 'template_l42wy2s', form.current, 'RYs5IzAKg3Ee-7913')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        console.log("user_name", user_name);
        console.log("user_email", user_email);
        console.log("message", message);
    }, [user_name, user_email, message]);

    return (
        <>
            <form ref={form} style={{ display: 'none' }}>
                <input type="text" name="user_name" value={user_name} readOnly />
                <input type="email" name="user_email" value={user_email} readOnly />
                <textarea name="message" value={message} readOnly />
            </form>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Thời gian phản hồi</StyledTableCell>
                            <StyledTableCell align="center">Tên khách hàng</StyledTableCell>
                            <StyledTableCell align="center">Tên cửa hàng thuyền buôn</StyledTableCell>
                            <StyledTableCell align="center">Nội dung phản ánh</StyledTableCell>
                            <StyledTableCell align="center">Trạng thái</StyledTableCell>
                            <StyledTableCell align="center">Chi tiết</StyledTableCell>
                            <StyledTableCell align="center">Hành động</StyledTableCell>
                            <StyledTableCell align="center">Phản hồi mail</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listReportSB.map((row) => (
                            <StyledTableRow key={uuidv4()}>
                                <StyledTableCell align="center">
                                    {moment(row[8]).format("DD/MM/YYYY HH:mm:ss")}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row[4]}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row[2]}
                                </StyledTableCell>
                                <StyledTableCell align="center" className="truncate-text">
                                    {row[5]}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row[7] === "Chờ xác nhận" ? (
                                        <Badge bg="warning">Chờ xác nhận</Badge>
                                    ) : row[7] === "Đang xử lý" ? (
                                        <Badge bg="success">Đang xử lý</Badge>
                                    ) : row[7] === "Từ chối" ? (
                                        <Badge bg="danger">Từ chối</Badge>
                                    ) : (
                                        <Badge bg="info">Đã hoàn thành</Badge>
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <DetailModalRPSB reportSB={row} />
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row[7] === "Chờ xác nhận" ? (
                                        <div className="d-flex justify-content-center">
                                            <Tooltip title="Đang xử lý" arrow>
                                                <IconButton
                                                    onClick={() => updateStatusReportSB(row[0], 'Đang xử lý', row)}
                                                    color="success"
                                                >
                                                    <CheckCircleIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Hủy" arrow>
                                                <IconButton
                                                    onClick={() => updateStatusReportSB(row[0], "Từ chối", row)}
                                                    color="error"
                                                >
                                                    <CancelIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    ) : row[7] === "Đang xử lý" ? (
                                        <div className="d-flex justify-content-center">
                                            <Tooltip title="Đã hoàn thành" arrow>
                                                <IconButton
                                                    onClick={() => updateStatusReportSB(row[0], "Đã hoàn thành", row)}
                                                    color="info"
                                                >
                                                    <CheckCircleIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Hủy" arrow>
                                                <IconButton
                                                    onClick={() => updateStatusReportSB(row[0], "Từ chối", row)}
                                                    color="error"
                                                >
                                                    <CancelIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <SendMail
                                        reportSB={row}
                                        userName={user_name}
                                        userEmail={user_email}
                                        message={message}
                                        setMessage={setMessage}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
