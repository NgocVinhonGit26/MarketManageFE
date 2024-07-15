import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { findAllByOrderByPriceAsc } from 'api/product';
import { getTotalPageFindAllByOrderByPriceAsc } from 'api/product';
import { findAllByOrderByPriceDesc } from 'api/product';
import { findAllByOrderByCreatedAtDesc } from 'api/product';
import { findAllByOrderByCreatedAtAsc } from 'api/product';


export default function BtnOrder({ setIsFilter, setPageFilter, pageFilter, setProducts, setPage, fetchProducts, setTotalPages }) {
    const [value, setValue] = React.useState(5);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const sortASC = async () => {
        try {
            const response = await findAllByOrderByPriceAsc(pageFilter - 1);
            const totalPages = await getTotalPageFindAllByOrderByPriceAsc(pageFilter - 1);
            setProducts(response.data.content);
            setTotalPages(totalPages.data);
        } catch (error) {
            console.log(error);
        }
    };

    const sortDESC = async () => {
        try {
            const response = await findAllByOrderByPriceDesc(pageFilter - 1);
            const totalPages = await getTotalPageFindAllByOrderByPriceAsc(pageFilter - 1);
            setProducts(response.data.content);
            setTotalPages(totalPages.data);
        } catch (error) {
            console.log(error);
        }
    };

    const sortOldest = async () => {
        try {
            const response = await findAllByOrderByCreatedAtAsc(pageFilter - 1);
            const totalPages = await getTotalPageFindAllByOrderByPriceAsc(pageFilter - 1);
            setProducts(response.data.content);
            setTotalPages(totalPages.data);
        } catch (error) {
            console.log(error);
        }
    };

    const sortNewest = async () => {
        try {
            const response = await findAllByOrderByCreatedAtDesc(pageFilter - 1);
            const totalPages = await getTotalPageFindAllByOrderByPriceAsc(pageFilter - 1);
            setProducts(response.data.content);
            setTotalPages(totalPages.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        if (value === 5) {
            fetchProducts(pageFilter);
            setIsFilter(false);
            setPageFilter(1);
            setPage(1);
            return;
        }
        if (value === 10) {
            setIsFilter(true);
            sortASC();
            return;
        }
        if (value === 20) {
            setIsFilter(true);
            sortDESC();
            return;
        }
        if (value === 30) {
            setIsFilter(true);
            sortOldest();
            return;
        }
        if (value === 40) {
            setIsFilter(true);
            sortNewest();
            return;
        }
    }, [value, pageFilter]);

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-controlled-open-select-label">Sắp xếp</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={value}
                    label="Sắp xếp"
                    onChange={handleChange}
                >
                    <MenuItem value={5}><em>None</em></MenuItem>
                    <MenuItem value={10}>Thứ tự theo giá: thấp đến cao</MenuItem>
                    <MenuItem value={20}>Thứ tự theo giá: cao đến thấp</MenuItem>
                    <MenuItem value={30}>Lâu nhất</MenuItem>
                    <MenuItem value={40}>Mới nhất</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
