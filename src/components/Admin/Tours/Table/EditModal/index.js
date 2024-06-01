import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Form, Row, Col } from "react-bootstrap";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { uploadImage, deleteImage } from "api/image";
import TourInformation from "./TourInformation";
import { updateTourById } from "api/tour";
import { successToast, errorToast } from "utilities/toast";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ tour, setTours }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm(tour);
  };
  const [image, setImage] = React.useState("");
  const accessToken = localStorage.getItem("accessToken");

  const [tourData, setTourData] = useState({
    name: tour.name || "",
    slug: tour.slug || "",
    startTime: tour.startTime || "",
    startLocation: tour.startLocation || "",
    tourDuration: tour.tourDuration || "",
    description: tour.description || "",
    price: tour.price || 0,
    avatar: tour.avatar || "",
    transport: tour.transport || "",
    tourInformation: tour.tourInformation || "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTourData({
      ...tourData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (tourData.avatar !== "") {
      handleSubmit();
    }
  }, [tourData.avatar]);

  const handleSubmit = async () => {
    // event.preventDefault();
    //console.log("Dữ liệu tour:", tourData);

    try {
      const res = await updateTourById(tour.id, tourData, accessToken);
      // console.log("update tour", res);
      if (res?.status === 200) {
        // successToast("Cập nhật tour thành công");
        setTours((prev) =>
          prev.map((item) => (item.id === tour.id ? res.data : item))
        );
        handleClose();
        resetForm(res.data);
      }
    } catch (error) {
      errorToast("Cập nhật tour thất bại");
      console.log(error);
    }
  };

  const handleImageUpload = async () => {
    if (image === "") {
      handleSubmit();
      return;
    }

    const dataImg = new FormData();
    dataImg.append("file", image);
    dataImg.append("upload_preset", "cspmjsnn");
    dataImg.append("cloud_name", "dkcetq9et");


    fetch("https://api.cloudinary.com/v1_1/dkcetq9et/image/upload", {
      method: "post",
      body: dataImg,
    })
      .then((response) => response.json())
      .then((dataImg) => {
        setTourData({
          ...tourData,
          avatar: dataImg.url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const resetForm = (data = {}) => {
    setTourData({
      name: data?.name || "",
      slug: data?.slug || "",
      startTime: data?.startTime || "",
      startLocation: data?.startLocation || "",
      tourDuration: data?.tourDuration || "",
      description: data?.description || "",
      price: data?.price || 0,
      avatar: data?.avatar || "",
      transport: data?.transport || "",
      tourInformation: data?.tourInformation || "",
    });
  };



  return (
    <div>
      <Tooltip title="Sửa" placement="top">
        <IconButton aria-label="edit" onClick={handleOpen} color="primary">
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="relative">
              <h2 className="text-center font-bold text-2xl mb-4 border-b-2 pb-2">
                Chỉnh sửa tour du lịch
              </h2>
              <div className="flex absolute right-0 bottom-2">
                <Button variant="success mr-2" onClick={handleImageUpload}>
                  Lưu
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    resetForm(tour);
                    handleClose();
                  }}
                >
                  Hủy
                </Button>
              </div>
            </div>

            <Form >
              <Row className="mb-3">
                <Col>
                  <img src={tourData.avatar} alt="" />
                </Col>
                <Col className="d-flex flex-column">
                  {" "}
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Tên Tour</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={tourData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="startTime" className="mb-3">
                    <Form.Label>Thời Gian Bắt Đầu</Form.Label>
                    <Form.Control
                      type="text"
                      name="startTime"
                      value={tourData.startTime}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                  <Col>
                    <Form.Group controlId="startLocation">
                      <Form.Label>Nơi Khởi Hành</Form.Label>
                      <Form.Control
                        type="text"
                        name="startLocation"
                        value={tourData.startLocation}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Ảnh</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Enter image URL"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Form.Group>
                </Col>

              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="tourDuration">
                    <Form.Label>Thời Gian Tour</Form.Label>
                    <Form.Control
                      type="text"
                      name="tourDuration"
                      value={tourData.tourDuration}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="price">
                    <Form.Label>Giá</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={tourData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="transport">
                    <Form.Label>Phương Tiện</Form.Label>
                    <Form.Control
                      type="text"
                      name="transport"
                      value={tourData.transport}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <TourInformation
                tourInformation={tourData.tourInformation}
                setTourData={setTourData}
              />
            </Form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
