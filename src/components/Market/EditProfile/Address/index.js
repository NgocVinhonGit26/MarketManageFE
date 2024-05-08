import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Address() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <h4 style={{ marginBottom: "10px" }}>ĐỊA CHỈ NHẬN HÀNG</h4>
            <FormControl fullWidth sx={{ marginBottom: 5 }}>
                <InputLabel id="demo-simple-select-label">Quốc gia/Khu vực</InputLabel>
                <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="Quốc gia/Khu vực"
                    disabled
                >
                    <MenuItem value={10}>Việt Nam</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: 5 }}>
                <InputLabel id="demo-simple-select-label">Tỉnh/Thành phố</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Tỉnh/Thành phố"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 5 }}>
                <InputLabel id="demo-simple-select-label">Quận/Huyện</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Quận/Huyện"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 5 }}>
                <InputLabel id="demo-simple-select-label">Phường/Xã</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Phường/Xã"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="success">
                Lưu địa chỉ
            </Button>
        </Box>

    );

}