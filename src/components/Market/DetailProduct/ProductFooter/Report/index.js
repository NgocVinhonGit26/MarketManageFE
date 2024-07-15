import React, { useEffect } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImageUpload from 'components/ImageUpload';
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import { createNewReport } from 'api/user';
import { successToast } from 'utilities/toast';
import { errorToast } from 'utilities/toast';
import { set } from 'date-fns';
import { useSelector } from 'react-redux';

const ReportSB = ({ product }) => {
    const id = localStorage.getItem("id");
    const shopBoatId = product.shopBoatId;
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [imgrp, setImgrp] = useState("")
    const [codeOrderProduct, setCodeOrderProduct] = useState("")
    const accessToken = localStorage.getItem("accessToken");
    const username = useSelector((state) => state.user.name);


    useEffect(() => {
        if (imgrp !== "") {
            handleSubmit();
        }
    }, [imgrp]);

    const [data, setData] = useState({
        shop_boat_id: shopBoatId,
        user_id: id,
        description: "",
        imgrp: "",
        code_order_product: "",
        status: "Chờ xác nhận",
        created_at: new Date().toISOString(),
    });

    const handleSubmit = async (e) => {
        // e.preventDefault();

        if (data.description === "" || data.imgrp === "" || data.code_order_product === "") {
            errorToast("Vui lòng nhập đủ thông tin");
            return;
        }
        try {
            const repsonse = await createNewReport(data, accessToken);
            console.log("repsonse", repsonse);
            if (repsonse.status === 200) {
                successToast("Gửi phản hồi thành công");
                setData({
                    shop_boat_id: shopBoatId,
                    user_id: id,
                    description: "",
                    imgrp: "",
                    code_order_product: "",
                    status: "Chờ xác nhận",
                    created_at: new Date().toISOString(),
                });
                setImgrp("");
                setImage("");
                setDescription("");
                setCodeOrderProduct("");
            }
        } catch (error) {
            console.log(error);

        }

    }

    const handleImageUpload = (e) => {
        if (image === "") {
            handleSubmit(e);
            return;
        }
        // e.preventDefault();

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
                setImgrp(dataImg.url);
                setData({ ...data, imgrp: dataImg.url });
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div style={{ display: "flex", textAlign: 'center', flexDirection: "column", alignItems: 'center' }}>
            <MDBRow className='mb-4'>
                <MDBCol>
                    {/* <MDBInput id='form6Example1' label='First name' /> */}
                    Xin chào {username}, hãy để lại ý kiến đóng góp của bạn về cửa hàng ABC nhé!
                </MDBCol>
            </MDBRow>
            <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: 'center' }}>Hình ảnh phản hồi </div>
                <div
                    style={{ width: '500px' }}
                >
                    <Form.Group>
                        <Form.Control
                            type="file"
                            name="avatar"
                            accept=".png, .jpg, .jpeg"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </Form.Group>
                </div>
            </div>
            {/* <ImageUpload /> */}

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <TextField
                    id="outlined-basic"
                    label="Mã số đơn hàng"
                    variant="outlined"
                    value={codeOrderProduct}
                    onChange={(e) => {
                        setData({ ...data, code_order_product: e.target.value });
                        setCodeOrderProduct(e.target.value);
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Ý kiến phản hồi"
                    multiline
                    rows={4}
                    name='description'
                    value={description}
                    // defaultValue="Default Value"
                    placeholder='Nhập ý kiến đóng góp của bạn'
                    onChange={(e) => {
                        setData({ ...data, description: e.target.value });
                        setDescription(e.target.value);
                    }}
                />
            </Box>



            <MDBBtn className='mb-4' type='submit' block onClick={(e) => { handleImageUpload(e) }}>
                Gửi phản hồi
            </MDBBtn>
        </div>
    );
}

export default ReportSB