import './style.scss'
import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import CardBlog from './CardBlog';
import TitleSection from '../TitleSection';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));


const Blog = () => {
    const [listBlog, setListBlog] = React.useState([
        {
            id: 1,
            title: 'Kinh nghiệm du lịch Kiên Giang - Top 13 điểm đến hấp dẫn (2024)',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/du-lich-kien-giang.jpg',
        },
        {
            id: 2,
            title: 'Chợ nổi Cái Răng Cần Thơ – Đặc sản sông nước miền Tây (2024)',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/nguoi-dan-cho-noi-moi-mua-trai-cay-1.jpg',
        },
        {
            id: 3,
            title: 'Vườn quốc gia Côn Đảo - Kinh nghiệm khám phá từ A đến Z',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/vuon-quoc-gia-con-dao-cover.png',
        },
        {
            id: 4,
            title: 'Bánh mì Hội An | Top 12 quán ăn ngon nức tiếng',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/banh-mi-hoi-an-1.jpg',
        },
        {
            id: 5,
            title: 'Món ngon miền Nam – Top 25+ đặc sản ngon nức tiếng miền Nam',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/mon-ngon-mien-nam.jpg',
        },
        {
            id: 6,
            title: 'Đặc sản Bến Tre - Top 11 Đặc sản xứ dừa ngon ngất ngây (2024)',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/dac-san-ben-tre-600x338.jpg',
        },
        {
            id: 7,
            title: 'Kinh nghiệm khám phá Mũi Cá Mập Côn Đảo (2024)',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/mui-ca-map.jpg',
        },
        {
            id: 8,
            title: 'Nhà hàng Côn Đảo - Top 15 nhà hàng với nhiều món ngon hấp dẫn',
            img: 'https://r2.nucuoimekong.com/wp-content/uploads/nha-hang-con-dao.jpg',
        },


    ])

    return (
        <div className="container-blog">
            <div className='blog'>
                <div className="title-blog">
                    <TitleSection title={"BLOGS"} />
                </div>
                <div className="content-blog">
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{ width: '100%' }}
                    >

                        {listBlog.map((item, index) => {
                            return (
                                <Grid xs={3}>
                                    <Item>
                                        <CardBlog item={item} />
                                    </Item>
                                </Grid>
                            )
                        })}

                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Blog