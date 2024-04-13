import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddModal from "../AddModal";
const SearchForm = ({ onSearch, setTours }) => {
  const [name, setName] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [transport, setTransport] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [tourDuration, setTourDuration] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Gửi các giá trị tìm kiếm đến hàm onSearch
    onSearch(name, priceFrom, priceTo, transport, startLocation, tourDuration);
  };

  const resetForm = () => {
    setName("");
    setPriceFrom("");
    setPriceTo("");
    setTransport("");
    setStartLocation("");
    setTourDuration("");
  };

  return (
    <Form className="mb-6">
      <Row>
        <Col>
          <Form.Group controlId="searchTerm">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tìm theo tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="minPrice">
            <Form.Label>Giá tối thiểu</Form.Label>
            <Form.Control
              type="number"
              placeholder="Giá tối thiểu"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="maxPrice">
            <Form.Label>Giá tối đa</Form.Label>
            <Form.Control
              type="number"
              placeholder="Giá tối đa"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </Form.Group>
        </Col>

      </Row>
      <Row>
        <Col>
          <Form.Group controlId="transport">
            <Form.Label>Phương tiện</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phương tiện"
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="startLocation">
            <Form.Label>Điểm khởi hành</Form.Label>
            <Form.Control
              type="text"
              placeholder="Điểm khởi hành"
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="tourDuration">
            <Form.Label>Thời gian tour</Form.Label>
            <Form.Control
              type="text"
              placeholder="Thời lượng tour"
              value={tourDuration}
              onChange={(e) => setTourDuration(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col className="d-flex align-items-end">
          <Button variant="primary" onClick={handleSearch}>
            Tìm kiếm
          </Button>
          <AddModal setTours={setTours} />
          <IconButton className="ms-2" onClick={resetForm}>
            <DeleteIcon />
          </IconButton>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
