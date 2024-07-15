import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { errorToast } from "utilities/toast";

export default function ReportSbSearchForm(props) {
    const { onSearch, fetchReportSB, setIsSearch, pageSearch, setPageSearch, setPageCurrent } = props;
    const [formData, setFormData] = useState({
        customerName: "",
        shopBoatName: "",
        startTimeFrom: "",
        startTimeTo: "",
        status: ""
    });

    const isFormDataEmpty = () => {
        for (const key in formData) {
            if (formData[key] !== "") {
                return false;
            }
        }
        return true;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleReset = (event) => {
        setFormData({});
        setIsSearch(false);
        fetchReportSB([]);
        setPageSearch(1);
        setPageCurrent(1);
    }

    const handleSubmit = (event) => {
    }

    return (
        <Form onSubmit={handleSubmit} onReset={handleReset}>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="userName">
                        <Form.Label>Tên khách hàng</Form.Label>
                        <Form.Control
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tourName">
                        <Form.Label>Tên cửa hàng thuyền buôn</Form.Label>
                        <Form.Control
                            type="text"
                            name="tourName"
                            primary
                            value={formData.tourName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="startTimeFrom">
                        <Form.Label>Thời gian phản hồi (Từ)</Form.Label>
                        <Form.Control
                            type="date"
                            name="startTimeFrom"
                            value={formData.departureStartDate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="startTimeTo">
                        <Form.Label>Thời gian phản hồi (Đến)</Form.Label>
                        <Form.Control
                            type="date"
                            name="startTimeTo"
                            value={formData.departureEndDate}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">

                <Col>
                    <Form.Group controlId="orderStatus">
                        <Form.Label>Trạng thái phản hồi</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="all">Chọn trạng thái</option>
                            <option value={0}>Chưa xử lý</option>
                            <option value={1}>Đã xác nhận</option>
                            <option value={2}>Đã hủy</option>
                            <option value={3}>Đã hoàn thành</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="d-flex align-items-end">
                    <Button variant="primary" type="submit" className="me-2">
                        Tìm kiếm
                    </Button>
                    <Button variant="warning" type="reset">
                        Xóa bộ lọc
                    </Button>
                </Col>
            </Row>
            <Row className="mb-3">


            </Row>
        </Form>
    );
}