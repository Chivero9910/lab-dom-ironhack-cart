// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = price.innerHTML * quantity.value;
  let subtotalClass = product.querySelector('.subtotal span');
  subtotalClass.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;
  allProducts.forEach((eachProduct) => {
    totalPrice += updateSubtotal(eachProduct);
    return totalPrice;
  });

  // ITERATION 3
  let totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentElement = event.target.parentNode.parentNode;
  parentElement.remove();
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector('.create-product input[type="text"]');
  let productPrice = document.querySelector('.create-product input[type="number"]');
  let container = document.querySelector("tbody");
  let name = productName.value;
  let price = productPrice.value;

  let newProduct = document.createElement("tr");
  newProduct.classList("product")
  newProduct.innerHTML = "<td><input type="text" placeholder="Product Name" /></td><td><input type="number" min="0" value="0" placeholder="Product Price" /></td><td></td><td></td><td><button id="create" class="btn">Create Product</button></td>"

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll(".btn-remove")
  removeButton.forEach((eachButton) => {
    eachButton.addEventListener("click", removeProduct);
  })

  let addProduct = document.querySelector("#create");
  addProduct.addEventListener("click", createProduct);
});
