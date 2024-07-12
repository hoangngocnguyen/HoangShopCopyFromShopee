import products from './products.js';

// Hàm định dạng số với dấu chấm phân cách
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}
const productList = document.getElementById('product-list');

function createProduct(product) {
    // Col
    const colDiv = document.createElement('div');
    colDiv.classList.add('col', 'l-2-4', 'm-4', 'c-6');

    // Product Link
    const productLink = document.createElement('a');
    productLink.classList.add('product-item');
    productLink.href = '#';

    // 1. Product Image
    const productImg = document.createElement('div');
    productImg.classList.add('product-item__img');
    productImg.style.backgroundImage = `url(${product.imgSrc})`;

    // 2. Product Name
    const productName = document.createElement('h4');
    productName.classList.add('product-item__name');
    productName.textContent = product.name;

    // 3. Product Price
    const productPrice = document.createElement('div');
    productPrice.classList.add('product-item__price');

    const productOldPrice = document.createElement('span');
    productOldPrice.classList.add('product-item__price-old');
    productOldPrice.textContent = formatPrice(product.oldPrice);

    const productCurrentPrice = document.createElement('span');
    productCurrentPrice.classList.add('product-item__price-current');
    productCurrentPrice.textContent = formatPrice(product.currentPrice);
    productPrice.appendChild(productOldPrice);
    productPrice.appendChild(productCurrentPrice);

    // 4. Product Action
    const productAction = document.createElement('div');
    productAction.classList.add('product-item__action');
    
    // 4.1. Action: Like
    const likeDiv = document.createElement('div');
    likeDiv.classList.add('product-item__like');
    if (product.isLiked === true) {
        likeDiv.classList.add('product-item__like--liked');
    }
    
    likeDiv.onclick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        // console.log(product.isLiked)
        if(product.isLiked === false) {
            likeDiv.classList.add('product-item__like--liked');
            product.isLiked = true;
        } else {
            likeDiv.classList.remove('product-item__like--liked');
            product.isLiked = false;
        }
    }

    const likeIconEmpty = document.createElement('i');
    likeIconEmpty.classList.add('fa-regular', 'fa-heart', 'product-item__like-icon-emty');

    const likeIconFill = document.createElement('i');
    likeIconFill.classList.add('fa-solid', 'fa-heart', 'product-item__like-icon-fill');
    likeDiv.appendChild(likeIconEmpty);
    likeDiv.appendChild(likeIconFill);
        
    // 4.2. Action: Rating
    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('product-item__rating');
    for (let i = 0; i < product.rating; i++) {
        const star = document.createElement('i');
        star.classList.add('product-item__star--gold', 'fa-solid', 'fa-star');
        ratingDiv.appendChild(star);
    }
    for (let i = 5; i> product.rating; i--) {
        const star = document.createElement('i');
        star.classList.add('fa-solid', 'fa-star');
        ratingDiv.appendChild(star);
    }
    
    // 4.3. Action: Sold
    const soldSpan = document.createElement('span');
    soldSpan.classList.add('product-item__sold');
    soldSpan.textContent = `${product.sold} đã bán`;
    if (product.sold > 9999) {
        let roundValue = Math.round(product.sold/1000).toFixed(1);
        soldSpan.textContent = `${parseFloat(roundValue)}N+ đã bán`;
    }

    // Thêm class vào Product Action
    productAction.appendChild(likeDiv);
    productAction.appendChild(ratingDiv);
    productAction.appendChild(soldSpan);

    // 5. Product Origin
    const productOrigin = document.createElement('div');
    productOrigin.classList.add('product-item__origin');
    // 5.1 Brand
    const brandSpan = document.createElement('span');
    brandSpan.classList.add('product-item__brand');
    brandSpan.textContent = product.brand;
    // 5.2 Origin name
    const originNameSpan = document.createElement('span');
    originNameSpan.classList.add('product-item__origin-name');
    originNameSpan.textContent = product.origin;
    // Thêm class vào Product Origin
    productOrigin.appendChild(brandSpan);
    productOrigin.appendChild(originNameSpan);


    // 6. Product Favorite
    const productFavorite = document.createElement('div');
    productFavorite.classList.add('product-item__favorite');

    const favoriteIcon = document.createElement('i');
    favoriteIcon.classList.add('fa-solid', 'fa-check');

    const favoriteSpan = document.createElement('span');
    favoriteSpan.textContent = "Yêu thích";

    // Thêm class vào Product Favorite
    productFavorite.appendChild(favoriteIcon);
    productFavorite.appendChild(favoriteSpan);


    // 7. Product Sale off
    const productSaleOff = document.createElement('div');
    productSaleOff.classList.add('product-item__sale-off');

    const saleOffPercent = document.createElement('span');
    saleOffPercent.classList.add('product-item__sale-off-percent')
    saleOffPercent.textContent = product.saleOffPercent + '%';

    const saleOffLabel = document.createElement('span');
    saleOffLabel.classList.add('product-item__sale-off-label')
    saleOffLabel.textContent = product.saleOffLabel;

    // Thêm class vào Product Sale off
    productSaleOff.appendChild(saleOffPercent);
    productSaleOff.appendChild(saleOffLabel);


    // Thêm class vào Product Link (Product-item)
    productLink.appendChild(productImg);                
    productLink.appendChild(productName);
    productLink.appendChild(productPrice);
    productLink.appendChild(productAction);
    productLink.appendChild(productOrigin);
    productLink.appendChild(productFavorite);
    productLink.appendChild(productSaleOff);

    // Thêm class vào Col
    colDiv.appendChild(productLink);

    // ***Thêm col vào Product List
    productList.appendChild(colDiv);
}

function createProductList(products) {
    products.forEach(product => {
        createProduct(product);
    });
}

function renderProducts(products) {
    productList.innerHTML = '';
    createProductList(products);
}

createProductList(products);



// Sắp xếp danh sách sản phẩm theo giá
// Giá thấp -> cao
let sortAscBtns = document.querySelectorAll('.js-sort-asc');

for (let sortAscBtn of sortAscBtns) {
    sortAscBtn.addEventListener('click', (event) => {
        event.preventDefault();
        products.sort((a,b) => a.currentPrice - b.currentPrice);
        renderProducts(products);
    }) 
}


// Giá cao -> thấp
let sortDescBtns = document.querySelectorAll('.js-sort-desc');
for (let sortDescBtn of sortDescBtns) {
    sortDescBtn.addEventListener('click', (event) => {
        event.preventDefault();
        products.sort((a,b) => b.currentPrice - a.currentPrice);
        renderProducts(products);
    }) 
}


// **Tìm kiếm sản phẩm và hiển thị ở product list
const searchInput = document.getElementById('js-header-search-input');
const searchBtn = document.getElementById('js-header__search-btn');
function searchProduct() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProduct = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProduct);
}

searchBtn.addEventListener('click', searchProduct);
searchInput.addEventListener('input', function() {
    document.getElementById('js-header__search-history').classList.add('hidden');
    searchProduct();
});



