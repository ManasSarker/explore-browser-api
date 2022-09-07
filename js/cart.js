const getInputValueById = (id) => {
  const inputField = document.getElementById(id);

  const inputValue = inputField.value;
  inputField.value = "";

  return inputValue;
};

const addProduct = () => {
  const product = getInputValueById("product-name-filed");
  const quantity = getInputValueById("product-quantity-field");

  //set to local storage in simple away

  localStorage.setItem(product, quantity);
  // console.log(product);

  displayProducts(product, quantity);
};

const displayProducts = (product, quantity) => {
  const productContainerId = document.getElementById("product-container");

  const li = document.createElement("li");

  li.innerHTML = `${product} : ${quantity}`;

  productContainerId.appendChild(li);
};
