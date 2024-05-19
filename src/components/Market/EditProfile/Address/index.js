import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { address } from 'utilities/address';

export default function Address() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [city, setCity] = React.useState(address.getCities()[0] || '');
    const [district, setDistrict] = React.useState(address.getDistricts(city)[0] || '');
    const [ward, setWard] = React.useState(address.getWards(city, district)[0] || '');


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
                    value={city}
                    label="Tỉnh/Thành phố"
                    onChange={(event) => {
                        setCity(event.target.value);
                        setDistrict(
                            address.getDistricts(event.target.value)[0]
                        )
                        setWard(
                            address.getWards(event.target.value, address.getDistricts(event.target.value)[0])[0]
                        )
                    }
                    }
                >
                    {address.getCities().map((city) => {
                        return (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        );
                    })}

                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 5 }}>
                <InputLabel id="demo-simple-select-label">Quận/Huyện</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={district}
                    label="Quận/Huyện"
                    onChange={(event) => {
                        setDistrict(event.target.value);
                        setWard(
                            address.getWards(city, event.target.value)[0]
                        )
                    }
                    }
                >
                    {address.getDistricts(city).map((district) => {
                        return (
                            <MenuItem key={district} value={district}>
                                {district}
                            </MenuItem>
                        );
                    }
                    )}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 5 }}>
                <InputLabel id="demo-simple-select-label">Phường/Xã</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ward}
                    label="Phường/Xã"
                    onChange={(event) => {
                        setWard(event.target.value);
                    }
                    }
                >
                    {address.getWards(city, district).map((ward) => {
                        return (
                            <MenuItem key={ward} value={ward}>
                                {ward}
                            </MenuItem>
                        );
                    }
                    )}
                </Select>
            </FormControl>
            <Button variant="contained" color="success">
                Lưu địa chỉ
            </Button>
        </Box>

    );

}