function addItem(name, price, description, link, image)
{
    const item = document.createElement("div");
    item.setAttribute("class", "container-item");

    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image);
    imageProduct.setAttribute("alt", name);
    imageProduct.style.width = "100%";
    imageProduct.style.maxWidth = "200px";

    containerImage.appendChild(imageProduct);

    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    // Tên sản phẩm
    const nameProduct = document.createElement("h3");
    nameProduct.innerHTML = name;

    // Giá
    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    // Mô tả
    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    // Link
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    document.getElementById("container-product-list")
            .appendChild(item);
}