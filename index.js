const tenTP = document.createElement('h1');
const tenTG = document.createElement('h2');
const tenND = document.createElement('h3');

tenTP.innerText = "Tác phẩm: Truyện Kiều"
tenTG.innerText = "Tác giả: Nguyễn Du";
tenND.innerText = "Nội dung: Truyện Kiều xoay quanh cuộc đời và số phận của nhân vật chính tên là Vương Thúy Kiều – một người con gái tài sắc vẹn toàn. Thúy Kiều sinh ra trong một gia đình trung lưu, có em gái là Thúy Vân và em trai là Vương Quan. Trong tiết Thanh Minh tháng ba, Thúy Kiều du xuân gặp Kim Trọng. Họ thề nguyền và đính ước với nhau. Trong khi Kim Trọng phải trở về Liêu Dương chịu tang chú thì gia đình Kiều gặp tai họa do thằng bán tơ vu oan. Kiều phải bán mình chuộc cha. Trước khi theo Mã Giám Sinh và Tú Bà Thúy Kiều đã trao duyên cho Thúy Vân. Khi biết mình bị lừa và đưa vào lầu xanh, Kiều tự tử nhưng không thành, Tú Bà đưa Kiều ra lầu Ngưng Bích. Tại đó, Kiều bị Sở Khanh lừa và nàng phải tiếp khách ở lầu xanh. Kiều được Thúc Sinh chuộc ra làm vợ lẽ nhưng bị Hoạn Thư – vợ cả của Thúc Sinh ghen tuông và hành hạ. Kiều bỏ trốn và nhờ sư Giác Duyên nương nhờ cửa Phật. Bị Bạc Hà, Bạc Hạnh phát hiện, Kiều lại vào lầu xanh lần thứ hai. Tai đây, Kiều được Từ Hải chuộc ra và giúp nàng báo ân báo oán. Vì bị mắc lừa Hồ Tôn Hiến, Từ Hải chết đứng, Thúy Kiều bị ép gả cho tên Thổ quan. Kiều tự tử ở sông Tiền Đường nhưng lại được sư Giác Duyên cứu. Sau 15 năm lưu lạc, gia đình được đoàn tụ, Thúy Kiều và Kim Trọng đổi tình yêu thành tình bạn.";

const divTitle = document.querySelector('div.tacPham');
const divTG = document.querySelector('div.tacGia');
const divND = document.querySelector('div.noiDung');

divTitle.appendChild(tenTP);
divTG.appendChild(tenTG);
divND.appendChild(tenND);

const image = document.createElement('img');
image.src = './truyen-kieu.jpg';
document.querySelector('div.truyenkieu').appendChild(image);
