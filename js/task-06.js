import products from './products.js';

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;

  allProdcuts.forEach(product => {
    const { name, price, quantity } = product;

    if (name === productName) {
      totalPrice = price * quantity;
    }
  });

  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар'));

console.log(calculateTotalPrice(products, 'Дроид'));
