const products = [
    {
        name: "Xiaozhubangchu keycaps Mario bàn phím cơ 124 phím keycaps chất lượng cao kết hợp",
        imgSrc: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbk5-lmzewxxfis7u0b",
        oldPrice: 301000,
        currentPrice: 149000,
        isLiked: false,
        rating: 3,
        sold: 126,
        brand: "XiaoZhu",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Xiaozhubangchu Pikachu keycap MOA chiều cao PBT keycap năm mặt thăng"
            + "hoa dễ thương tùy chỉnh bộ keycap cá tính",
        imgSrc: "https://down-vn.img.susercontent.com/file/sg-11134201-7rcf1-ltg5obospr6i3b",
        oldPrice: 267000,
        currentPrice: 141000,
        isLiked: true,
        rating: 5,
        sold: 193,
        brand: "XiaoZhu",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM"
    },
    {
        name: "[Nhập ELHP15 giảm 15% tối đa 3TR] Laptop HP 15s-fq2712TU (7C0X2PA)/"
               + "Intel Core i3-1115G4 / RAM 8GB/ 256GB",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llsps9gol7tred",
        oldPrice: 19299600,
        currentPrice: 13590000,
        isLiked: false,
        rating: 4.3,
        sold: 643,
        brand: "HP",
        origin: "Việt Nam",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Điện thoại Apple IPhone 14 128GB",
        imgSrc: "https://down-vn.img.susercontent.com/file/sg-11134201-23020-q78nka801cnv83",
        oldPrice: 27900000,
        currentPrice: 16930000,
        isLiked: true,
        rating: 5,
        sold: 12045,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Màn hình Samsung 27 inch Cong LC27R500FHEXXV FHD AMD FreeSync 4ms Bảo"
               + "vệ mắt Khử nhấp nháy",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lwcdqa92w3lb3a",
        oldPrice: 4120000,
        currentPrice: 3400000,
        isLiked: false,
        rating: 2,
        sold: 1234,
        brand: "Samsung",
        origin: "Việt Nam",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Full Bộ Máy Tính PC Core i5, i7 Kèm Màn Full HD Chơi Mượt Mọi Game"
               + "FIFA, LOL, PUBG - Thiết Kế Đồ Họa",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqm6ddekvgone9",
        oldPrice: 7860000,
        currentPrice: 6340000,
        isLiked: true,
        rating: 5,
        sold: 45861,
        brand: "CGO",
        origin: "Việt Nam",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Chuột Gaming không dây Rapoo VT960S Wireless 2.4G pin sạc",
        imgSrc: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfakrxoi6b9m8d",
        oldPrice: 170000,
        currentPrice: 149000,
        isLiked: false,
        rating: 5,
        sold: 512,
        brand: "Rapoo",
        origin: "Trung Quốc",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Apple iPad (Gen 9) WIFI Chính hãng (ZA/A)",
        imgSrc: "https://down-vn.img.susercontent.com/file/ada38c6e6ea23c99065eba067b184b0f",
        oldPrice: 12900000,
        currentPrice: 1149000,
        isLiked: false,
        rating: 3,
        sold: 31400,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Máy tính xách tay Apple Macbook Air (2022) M2 chip, 13.6 inches, 8GB,"
               + "256GB SSD",
        imgSrc: "https://down-vn.img.susercontent.com/file/1cba156175a5ef0b0d356b52451b4c42",
        oldPrice: 3290000,
        currentPrice: 2700000,
        isLiked: true,
        rating: 5,
        sold: 1026,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM"
    },
    {
        name: "Tai nghe Apple AirPods 3rd gen lightning charge",
        imgSrc: "https://down-vn.img.susercontent.com/file/f2f9ddaf332def792d62021325ca0198",
        oldPrice: 5310000,
        currentPrice: 4590000,
        isLiked: true,
        rating: 3,
        sold: 5162,
        brand: "Apple",
        origin: "USA",
        saleOffLabel: "GIẢM"
    }
]

products.forEach(product => {
    product.saleOffPercent = Math.round((1 - (product.currentPrice / product.oldPrice)) * 100);
});

export default products;