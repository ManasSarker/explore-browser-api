const getInputValueById = (id) => {
  const inputField = document.getElementById(id);

  const inputValue = inputField.value;
  inputField.value = "";

  return inputValue;
};

const addProduct = () => {
  const product = getInputValueById("product-name-filed");
  const quantity = getInputValueById("product-quantity-field");

  console.log(product);
};
