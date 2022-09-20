"use strict";

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 2000,
    img: "https://kontakt.ge/resize/display?url=https%3A%2F%2Fkontakt.ge%2Fresize%2Fdisplay%2Fresize%2F400x400%2Fwhite.png%3Fop%3Dop%3Aflat%2Bpath%3Amedia%2Fcatalog%2Fproduct%2FN%2Fe%2FNew-Project-2021-09-15T172813.821-min.png%2Bpos%3A0.0.100.100&op=resize&fmt=webp",
  },
  {
    id: 2,
    title: "Mouse",
    price: 10,
    img: "https://resource.logitech.com/content/dam/logitech/en/products/mice/m100/gallery/m100-charcoal-gallery-1.png",
  },
  {
    id: 3,
    title: "Keyboard",
    price: 800,
    img: "https://www.cnet.com/a/img/resize/c2fb79b15d18f335e85fc4acd72910059cc9758b/hub/2021/08/20/453e37bf-61cb-4e16-ad90-fd822bdc390a/keychron-k3-mechanical-keyboard.jpg?auto=webp&fit=crop&height=900&width=1200",
  },
  {
    id: 4,
    title: "Gamepad",
    price: 500,
    img: "https://www.citrus.ge/images/products/CS436911/joistiki-PS5-Dualsense-Wireless-Controller-10904.png",
  },
];

const renderProduct = (productsObj) => {
  return `<div class="product">
    <img src="${productsObj.img}" alt="product-image-${productsObj.title}">
    <h2 class="product__title">${productsObj.title}</h2>
    <p class="product__price">${productsObj.price} USD</p>
    <button class="btn btn_buy">Buy</button>
</div>`;
};

const renderPage = (list) => {
  const productsList = list.map((each) => renderProduct(each));
  document.querySelector(".products").innerHTML = productsList.join("");
};

renderPage(products);
