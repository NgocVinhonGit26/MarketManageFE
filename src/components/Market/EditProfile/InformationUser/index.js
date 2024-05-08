import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function InformationUser() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, minWidth: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Họ và tên"
                    defaultValue="Hello World"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Hello World"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Số điện thoại"
                    defaultValue="123456789"
                />
            </div>
            <div style={{ marginTop: "15px", borderBottom: "1px solid #ececec" }}>
                <h4>THAY ĐỔI MẬT KHẨU</h4>
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Mật khẩu hiện tại"
                // defaultValue="Hello World"

                />

            </div>
            <div style={{ marginBottom: "10px" }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Mật khẩu mới"
                // defaultValue="Hello World"

                />
                <TextField
                    required
                    id="outlined-required"
                    label="Nhập lại mật khẩu mới"
                // defaultValue="Hello World"

                />
            </div>
            <Button variant="contained" color="success" sx={{ marginLeft: 2 }}>
                Lưu thay đổi
            </Button>
        </Box>
    );
}

