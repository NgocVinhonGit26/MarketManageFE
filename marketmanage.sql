CREATE DATABASE MarketManage;
USE MarketManage;

CREATE TABLE User (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255),
password VARCHAR(255)
);

INSERT INTO User (name, address, password) VALUES 
('John Doe', '123 Main Street, Anytown, USA', 'password1'),
('Alice Smith', '456 Elm Street, Another Town, USA', 'password2'),
('Michael Johnson', '789 Oak Street, Some City, USA', 'password3'),
('Emily Brown', '101 Pine Street, Someplace, USA', 'password4'),
('David Wilson', '222 Maple Street, Elsewhere, USA', 'password5'),
('Sarah Taylor', '333 Cedar Street, Somewhere, USA', 'password6'),
('James Martinez', '444 Walnut Street, Anywhere, USA', 'password7'),
('Jennifer Rodriguez', '555 Birch Street, Anyplace, USA', 'password8'),
('William Anderson', '666 Ash Street, Nowhere, USA', 'password9'),
('Emma Thomas', '777 Spruce Street, Everywhere, USA', 'password10');


CREATE TABLE ShopBoat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    owner INT NOT NULL,
    description VARCHAR(255),
    avatar VARCHAR(255),
    phone_number VARCHAR(11),
    type varchar(255),
    status INT NOT NULL,
    code VARCHAR(255),
    -- products JSON,
    -- images JSON,
    FOREIGN KEY (owner) REFERENCES User(id)
);

INSERT INTO ShopBoat (name, address, owner, description, avatar, phone_number, type, status, code)
VALUES 
('Boat Haven', '100 Harbor Drive, Marina Bay, Anytown, USA', 1, 'Your destination for all things boating', 'https://th.bing.com/th/id/R.74b4260070f4a610bc2e92d0d173a4a5?rik=CP61V%2fOrQslCgw&pid=ImgRaw&r=0', '15995165412', 'Thuyền Lớn', 0, 'SHB001'),
('Marine Outfitters', '200 Dock Street, Harborview, Another Town, USA', 2, 'We provide top-quality marine equipment', 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi17-2.jpg', '47896253017', 'Thuyền Nhỏ', 1, 'MOT002'),
('Seaside Boats', '300 Bayfront Avenue, Oceanview, Some City, USA', 3, 'Your trusted source for boats and accessories', 'https://th.bing.com/th/id/R.74b4260070f4a610bc2e92d0d173a4a5?rik=CP61V%2fOrQslCgw&pid=ImgRaw&r=0', '39261548703', 'Thuyền Trung', 2, 'SDB003'),
('Coastal Marine', '400 Waterfront Road, Lakeside, Someplace, USA', 4, 'Specializing in marine services and repairs', 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi17-2.jpg', '80936514270', 'Thuyền Cao Tốc', 1, 'CMT004'),
('Bay Area Yachts', '500 Marina Road, Riverside, Elsewhere, USA', 5, 'Explore our luxury yacht collection', 'https://th.bing.com/th/id/R.74b4260070f4a610bc2e92d0d173a4a5?rik=CP61V%2fOrQslCgw&pid=ImgRaw&r=0', '62581470963', 'Thuyền Cá Nhân', 2, 'BAY005'),
('Ocean Ventures', '600 Pier Boulevard, Sailport, Somewhere, USA', 6, 'Your gateway to ocean exploration', 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi17-2.jpg', '49172630584', 'Thuyền Mái Bạt', 1, 'OVC006'),
('Harbor Lights Marina', '700 Harbor Lane, Yachthaven, Anywhere, USA', 7, 'Experience the beauty of boating', 'https://th.bing.com/th/id/R.74b4260070f4a610bc2e92d0d173a4a5?rik=CP61V%2fOrQslCgw&pid=ImgRaw&r=0', '20786593412', 'Thuyền Lớn', 1, 'HLM007'),
('Anchor Bay Boats', '800 Seaport Street, Sailport, Anyplace, USA', 8, 'Find your perfect boat here', 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi17-2.jpg', '50947218630', 'Thuyền Nhỏ', 0, 'ABB008'),
('Sunset Boating', '900 Sunset Avenue, Yachthaven, Nowhere, USA', 9, 'Enjoy breathtaking sunsets on the water', 'https://th.bing.com/th/id/R.74b4260070f4a610bc2e92d0d173a4a5?rik=CP61V%2fOrQslCgw&pid=ImgRaw&r=0', '83154620978', 'Thuyền Trung', 2, 'STB009'),
('Bluewater Boats', '1000 Marina Drive, Sailport, Everywhere, USA', 10, 'Your premier destination for boating adventures', 'https://st.quantrimang.com/photos/image/2021/05/21/AVT-Doi17-2.jpg', '63812549703', 'Thuyền Cao Tốc', 0, 'BWB010');

