
//Khai báo một đối tượng


const products = [
    { 
        id:"1",
    name:" Kim chi thập cẩm",
    price:59000,
    description:"có đầy đủ kim chi, tôm, mực, bò, xúc xích,cá viên...",
    image:"../assets/images/thapcam.jpg",
    link:"chi-tiet.html"
    },
    {
       id:"3",
    name:"Kim chi xúc xích-cá viên",
    price:42000,
    description:"Có kim chi, xúc xích, cá viên...",
    image:"../assets/images/xucxichcavien.jpg",
    link:"chi-tiet.html" 
    },
    {
        id:"4",
    name:"Kim chi bò",
    price:49000,
    description:"Có kim chi, bò, cá viên...",
    image:"../assets/images/bo.jpg",
    link:"chi-tiet.html"
    }


];

function addItemV2(product){
    document.getElementById("product-list").innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="product-image">
                    <img class="card-img-top" src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-body bg-light product-info">
                    <h4 class="card-title">${product.name}</h4>
                    <h5 class="card-text">${product.price} VNĐ</h5>
                    <p class="card-text">${product.description}</p>
                    <a class="btn btn-info" href="${product.link}">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

function loadAllProduct(){
    let i = 0;
    while(i < products.length)
    {
        addItemV2(products[i]);
        i++;
    }
}





























