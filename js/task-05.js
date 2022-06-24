import products from './products.js';

const getAllPropValues = function (arr, prop) {
  const allNeededValues = [];

  for (const product of arr) {
    const keys = Object.keys(product);

    for (const key of keys) {
      if (key.indexOf(prop) !== -1) {
        allNeededValues.push(product[key]);
      }
    }
  }

  return allNeededValues;
};

console.log(getAllPropValues(products, 'name'));

console.log(getAllPropValues(products, 'quantity'));

console.log(getAllPropValues(products, 'category'));
