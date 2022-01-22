import { priceSlider, getValue, widthSlider } from "./sliders.js";
// Price value container
const priceValue = document.querySelector(".price__value");
// Width value container
const widthValue = document.querySelectorAll(".c-filter-width__value__text");
// Pointers
const pointers = document.getElementById("pointers");
// Toggle products button
const productBtns = document.querySelectorAll(".c-product__item");
// Features buttons
const featureBtns = document.querySelectorAll(".c-features__item");
// Set value to page in price block
getValue("$", priceSlider, priceValue);

// Set value to page in width block
getValue("cm", widthSlider, widthValue[0], widthValue[1]);

// Add pointers to slider WIDTH
document.querySelector(".c-filter-width-slider").prepend(pointers);
pointers.classList.add("c-pointers--visible");

const removeClasses = (elemList, classes) => {
  elemList.forEach((item) => {
    item.classList.remove(classes);
  });
};

productBtns.forEach((item) => {
  item.addEventListener("click", () => {
    removeClasses(productBtns, "activeBtnFilter");
    item.classList.add("activeBtnFilter");
  });
});

featureBtns.forEach((item) => {
  item.addEventListener("click", () => {
    removeClasses(featureBtns, "activeBtnFilter");
    item.classList.add("activeBtnFilter");
  });
});
