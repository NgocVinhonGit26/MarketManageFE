CREATE DATABASE MarketManage;
USE MarketManage;

CREATE TABLE User (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
address VARCHAR(255),
phone_number VARCHAR(11),
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(255) NOT NULL
);

INSERT INTO User (name, address, phone_number,username, password, role) VALUES 
('admin', '123 Main Street, Anytown, USA', '123456789','joe.john@gaml.com', 'admin','ADMIN'),
('Alice Smith', '456 Elm Street, Another Town, USA', '123456789', 'alice.smith@example.com', 'password2','USER'),
('Michael Johnson', '789 Oak Street, Some City, USA', '123456789', 'michael.johnson@example.com', 'password3','MERCHANT'),
('Emily Brown', '101 Pine Street, Someplace, USA', '123456789', 'emily.brown@example.com', 'password4','USER'),
('David Wilson', '222 Maple Street, Elsewhere, USA', '123456789', 'david.wilson@example.com', 'password5','USER'),
('Sarah Taylor', '333 Cedar Street, Somewhere, USA', '123456789', 'sarah.taylor@example.com', 'password6','MERCHANT'),
('James Martinez', '444 Walnut Street, Anywhere, USA', '123456789', 'james.martinez@example.com', 'password7','MERCHANT'),
('Jennifer Rodriguez', '555 Birch Street, Anyplace, USA', '123456789', 'jennifer.rodriguez@example.com', 'password8','USER'),
('William Anderson', '666 Ash Street, Nowhere, USA', '123456789', 'william.anderson@example.com', 'password9','MERCHANT'),
('Emma Thomas', '777 Spruce Street, Everywhere, USA', '123456789', 'emma.thomas@example.com', 'password10','USER');

   -- UPDATE User SET role = 'ADMIN' WHERE id = 11;
	-- DELETE FROM user WHERE id = 11;


-- CREATE TABLE Role (
   -- id INT AUTO_INCREMENT PRIMARY KEY,
  --  name VARCHAR(255) NOT NULL
-- );

 -- INSERT INTO Role (name) VALUES ('ADMIN'), ('USER'),('MERCHANT');


-- CREATE TABLE User_Role (
   -- user_id INT,
   -- role_id INT,
   -- PRIMARY KEY (user_id, role_id),
   -- FOREIGN KEY (user_id) REFERENCES User(id),
   -- FOREIGN KEY (role_id) REFERENCES Role(id)
-- );

-- INSERT INTO User_Role (user_id, role_id) VALUES (1, 1),(2,2),(3,2),(4,3),(5,2),(6,3),(7,3),(8,2),(9,2),(10,3);



CREATE TABLE ShopBoat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    owner INT NOT NULL,
    description VARCHAR(255),
    avatar VARCHAR(255),
    phone_number VARCHAR(11),
    type varchar(255),
    status INT NOT NULL, --
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


CREATE TABLE Tour (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Slug VARCHAR(255) NOT NULL,
    start_time VARCHAR(255) NOT NULL,
    tour_duration VARCHAR(255) NOT NULL,
    start_location VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    avatar VARCHAR(255),
    transport VARCHAR(255) NOT NULL,
    tour_information TEXT
);

-- ALTER TABLE Tour
 -- ADD COLUMN tour_duration VARCHAR(50);



INSERT INTO Tour (Name, Slug, start_time, start_location, Description, Price, avatar, transport, tour_information,tour_duration) VALUES 
('Trải Nghiệm Chợ Nổi Cái Răng', 'trai-nghiem-cho-noi-cai-rang', '2024-03-15 08:00:00', 'Chợ Nổi Cái Răng, Cần Thơ', 'Khám phá sự sôi động của chợ nổi Cái Răng và trải nghiệm văn hóa độc đáo của Đồng Bằng Sông Cửu Long.', 150.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia cùng chúng tôi trên chuyến đi dẫn đầu để khám phá sự náo nhiệt của chợ nổi Cái Răng. Học về phong tục địa phương và thưởng thức các món ngon đặc sản Đồng Bằng Sông Cửu Long.','3 ngày 2 đêm'),
('Tour Khám Phá Cái Răng', 'tour-kham-pha-cai-rang', '2024-03-16 09:00:00', 'Cái Răng, Cần Thơ', 'Khám phá vẻ đẹp của Cái Răng và vùng lân cận với chuyến đi dẫn đầu của chúng tôi.', 120.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Bắt đầu hành trình để khám phá sự quyến rũ của Cái Răng, từ chợ nổi đến các cảnh đẹp xanh tươi của nó.','2 ngày 1 đêm'),
('Tour Văn Hóa Cái Răng', 'tour-van-hoa-cai-rang', '2024-03-17 10:00:00', 'Cái Răng, Cần Thơ', 'Tham gia vào một hành trình văn hóa qua chợ nổi Cái Răng và khu vực xung quanh.', 130.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Khám phá những di tích văn hóa và tham gia vào các hoạt động vui nhộn trong chuyến tham quan này.','5 ngày 4 đêm'),
('Tour Du Lịch Cái Răng', 'tour-du-lich-cai-rang', '2024-03-18 11:00:00', 'Cái Răng, Cần Thơ', 'Du lịch thông qua chợ nổi Cái Răng và tận hưởng những trải nghiệm độc đáo.', 140.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia tour văn hóa của chúng tôi để tìm hiểu về các truyền thống, phong tục và lối sống của người dân Cái Răng và Đồng Bằng Sông Cửu Long.', '7 ngày'),
('Du Thuyền Sông Cửu Long', 'du-thuyen-song-cuu-long', '2024-03-21 14:00:00', 'Sông Cửu Long', 'Trải nghiệm vẻ đẹp của sông Cửu Long với chuyến du thuyền của chúng tôi.', 200.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Bắt đầu một chuyến du thuyền thoải mái dọc theo sông Cửu Long, đi qua Cái Răng và các ngôi làng bên bờ đáng yêu khác.','9 ngày'),
('Tour Du Lịch Sinh Thái Cái Răng', 'tour-du-lich-sinh-thai-cai-rang', '2024-03-22 15:00:00', 'Cái Răng, Cần Thơ', 'Khám phá vẻ đẹp tự nhiên của Cái Răng và vùng lân cận với tour du lịch sinh thái của chúng tôi.', 170.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia tour du lịch sinh thái của chúng tôi để khám phá các hệ sinh thái đa dạng của Cái Răng và Đồng Bằng Sông Cửu Long, từ rừng ngập mặn xanh tươi đến những cánh đồng lúa hình ảnh.','2 tuần'),
('Tour Chụp Ảnh Cái Răng', 'tour-chup-anh-cai-rang', '2024-03-23 16:00:00', 'Cái Răng, Cần Thơ', 'Ghi lại vẻ đẹp của Cái Răng và những người dân của nó với tour chụp ảnh của chúng tôi.', 190.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia tour chụp ảnh của chúng tôi để ghi lại những hình ảnh đẹp của chợ nổi Cái Răng, những chiếc thuyền màu sắc và những người dân thân quen của nó.', '3 ngày'),
('Tour Khám Phá Văn Hóa Đồng Bằng Sông Cửu Long', 'tour-kham-pha-van-hoa-dong-bang-song-cuu-long', '2024-03-24 08:30:00', 'Đồng Bằng Sông Cửu Long', 'Trải nghiệm sự đa dạng văn hóa của Đồng Bằng Sông Cửu Long qua các điểm tham quan và hoạt động văn hóa đặc sắc.', 180.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia tour của chúng tôi để khám phá sự phong phú và đa dạng của văn hóa Đồng Bằng Sông Cửu Long thông qua việc tham quan các di tích lịch sử, ngôi làng truyền thống và các hoạt động văn hóa độc đáo.','4 ngày 3 đêm'),
('Tour Tham Quan Vườn Trái Cây Cái Răng', 'tour-tham-quan-vuon-trai-cay-cai-rang', '2024-03-25 09:00:00', 'Cái Răng, Cần Thơ', 'Khám phá những vườn trái cây phong phú ở Cái Răng và thưởng thức các loại trái cây tươi ngon.', 160.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia tour của chúng tôi để khám phá những vườn trái cây nổi tiếng ở Cái Răng và tận hưởng hương vị tuyệt vời của các loại trái cây tươi ngon.','5 ngày'),
('Tour Cái Răng Đêm', 'tour-cai-rang-dem', '2024-03-26 18:00:00', 'Cái Răng, Cần Thơ', 'Trải nghiệm không khí đêm sôi động và sự lung linh của Cái Răng về đêm.', 200.00,'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg', 'Xe du lịch','Tham gia tour Cái Răng Đêm của chúng tôi để khám phá vẻ đẹp của Cái Răng khi mặt trời lặn và các hoạt động vui vẻ của đêm.','10 ngày');

-- INSERT INTO Tour (Name, Slug, StartTime, StartLocation, Description, Price, avatar,Reviews, TourInformation) VALUES 
-- ('Trải Nghiệm Chợ Nổi Cái Răng', 'trai-nghiem-cho-noi-cai-rang', '2024-03-15 08:00:00', 'Chợ Nổi Cái Răng, Cần Thơ', 'Khám phá sự sôi động của chợ nổi Cái Răng và trải nghiệm văn hóa độc đáo của Đồng Bằng Sông Cửu Long.', 150.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 1, "rating": 4.5, "comment": "Trải nghiệm không thể bỏ qua!"}]', 'Tham gia cùng chúng tôi trên chuyến đi dẫn đầu để khám phá sự náo nhiệt của chợ nổi Cái Răng. Học về phong tục địa phương và thưởng thức các món ngon đặc sản Đồng Bằng Sông Cửu Long.'),
-- ('Tour Khám Phá Cái Răng', 'tour-kham-pha-cai-rang', '2024-03-16 09:00:00', 'Cái Răng, Cần Thơ', 'Khám phá vẻ đẹp của Cái Răng và vùng lân cận với chuyến đi dẫn đầu của chúng tôi.', 120.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 2, "rating": 4.8, "comment": "Trải nghiệm tuyệt vời!"}]', 'Bắt đầu hành trình để khám phá sự quyến rũ của Cái Răng, từ chợ nổi đến các cảnh đẹp xanh tươi của nó.'),
-- ('Tour Văn Hóa Cái Răng', 'tour-van-hoa-cai-rang', '2024-03-17 10:00:00', 'Cái Răng, Cần Thơ', 'Tham gia vào một hành trình văn hóa qua chợ nổi Cái Răng và khu vực xung quanh.', 130.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 3, "rating": 4.3, "comment": "Trải nghiệm thú vị!"}]', 'Khám phá những di tích văn hóa và tham gia vào các hoạt động vui nhộn trong chuyến tham quan này.'),
-- ('Tour Du Lịch Cái Răng', 'tour-du-lich-cai-rang', '2024-03-18 11:00:00', 'Cái Răng, Cần Thơ', 'Du lịch thông qua chợ nổi Cái Răng và tận hưởng những trải nghiệm độc đáo.', 140.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 4, "rating": 4.9, "comment": "Rất được khuyến khích cho những người yêu văn hóa!"}]', 'Tham gia tour văn hóa của chúng tôi để tìm hiểu về các truyền thống, phong tục và lối sống của người dân Cái Răng và Đồng Bằng Sông Cửu Long.'),
-- ('Du Thuyền Sông Cửu Long', 'du-thuyen-song-cuu-long', '2024-03-21 14:00:00', 'Sông Cửu Long', 'Trải nghiệm vẻ đẹp của sông Cửu Long với chuyến du thuyền của chúng tôi.', 200.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 5, "rating": 4.7, "comment": "Một hành trình thư giãn và thú vị!"}]', 'Bắt đầu một chuyến du thuyền thoải mái dọc theo sông Cửu Long, đi qua Cái Răng và các ngôi làng bên bờ đáng yêu khác.'),
-- ('Tour Du Lịch Sinh Thái Cái Răng', 'tour-du-lich-sinh-thai-cai-rang', '2024-03-22 15:00:00', 'Cái Răng, Cần Thơ', 'Khám phá vẻ đẹp tự nhiên của Cái Răng và vùng lân cận với tour du lịch sinh thái của chúng tôi.', 170.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 6, "rating": 4.4, "comment": "Một cuộc phiêu lưu thân thiện với môi trường!"}]', 'Tham gia tour du lịch sinh thái của chúng tôi để khám phá các hệ sinh thái đa dạng của Cái Răng và Đồng Bằng Sông Cửu Long, từ rừng ngập mặn xanh tươi đến những cánh đồng lúa hình ảnh.'),
-- ('Tour Chụp Ảnh Cái Răng', 'tour-chup-anh-cai-rang', '2024-03-23 16:00:00', 'Cái Răng, Cần Thơ', 'Ghi lại vẻ đẹp của Cái Răng và những người dân của nó với tour chụp ảnh của chúng tôi.', 190.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 7, "rating": 4.1, "comment": "Hoàn hảo cho những người yêu nhiếp ảnh!"}]', 'Tham gia tour chụp ảnh của chúng tôi để ghi lại những hình ảnh đẹp của chợ nổi Cái Răng, những chiếc thuyền màu sắc và những người dân thân quen của nó.'),
-- ('Tour Khám Phá Văn Hóa Đồng Bằng Sông Cửu Long', 'tour-kham-pha-van-hoa-dong-bang-song-cuu-long', '2024-03-24 08:30:00', 'Đồng Bằng Sông Cửu Long', 'Trải nghiệm sự đa dạng văn hóa của Đồng Bằng Sông Cửu Long qua các điểm tham quan và hoạt động văn hóa đặc sắc.', 180.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 8, "rating": 4.6, "comment": "Một chuyến đi văn hóa tuyệt vời!"}]', 'Tham gia tour của chúng tôi để khám phá sự phong phú và đa dạng của văn hóa Đồng Bằng Sông Cửu Long thông qua việc tham quan các di tích lịch sử, ngôi làng truyền thống và các hoạt động văn hóa độc đáo.'),
-- ('Tour Tham Quan Vườn Trái Cây Cái Răng', 'tour-tham-quan-vuon-trai-cay-cai-rang', '2024-03-25 09:00:00', 'Cái Răng, Cần Thơ', 'Khám phá những vườn trái cây phong phú ở Cái Răng và thưởng thức các loại trái cây tươi ngon.', 160.00, 'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 9, "rating": 4.7, "comment": "Rất thú vị và bổ ích!"}]', 'Tham gia tour của chúng tôi để khám phá những vườn trái cây nổi tiếng ở Cái Răng và tận hưởng hương vị tuyệt vời của các loại trái cây tươi ngon.'),
-- ('Tour Cái Răng Đêm', 'tour-cai-rang-dem', '2024-03-26 18:00:00', 'Cái Răng, Cần Thơ', 'Trải nghiệm không khí đêm sôi động và sự lung linh của Cái Răng về đêm.', 200.00,'https://r2.nucuoimekong.com/wp-content/uploads/tour-mien-tay-2-ngay-1-dem-gia-re.jpg','[{"user_id": 10, "rating": 4.5, "comment": "Một trải nghiệm đáng nhớ!"}]', 'Tham gia tour Cái Răng Đêm của chúng tôi để khám phá vẻ đẹp của Cái Răng khi mặt trời lặn và các hoạt động vui vẻ của đêm.');

	CREATE TABLE order_tour (
		id INT AUTO_INCREMENT PRIMARY KEY,
		status INT NOT NULL, -- 0: dnag cho, 1: da xac nhan, 2: da huy
		payment_method VARCHAR(255) ,
		start_time VARCHAR(255),
		quantity INT NOT NULL,
		tour_id INT NOT NULL,
		user_id INT NOT NULL,
		price DECIMAL(10, 2) NOT NULL,
		created_at TIMESTAMP ,
		FOREIGN KEY (tour_id) REFERENCES tour(id),
		FOREIGN KEY (user_id) REFERENCES user(id)
	);
    
 --   UPDATE order_tour SET status = 1 WHERE id = 2;
    
    DELIMITER $$
CREATE TRIGGER calculate_order_price BEFORE INSERT ON order_tour
FOR EACH ROW
BEGIN
    DECLARE tour_price DECIMAL(10, 2);
    SET tour_price = (SELECT Price FROM Tour WHERE Id = NEW.tour_id);
    SET NEW.price = tour_price * NEW.quantity;
END;
$$
DELIMITER ;


INSERT INTO order_tour (status, payment_method, start_time, quantity, tour_id, user_id)
VALUES (0, 'Credit Card', '2024-03-14 10:00:00', 2, 1, 2);


