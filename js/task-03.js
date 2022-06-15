const findBestEmployee = function (employees) {
  const arrEmployees = Object.entries(employees);
  let countTasks = 0;
  let nameBestEmployee = '';

  for (const [name, value] of arrEmployees) {
    if (value > countTasks) {
      countTasks = value;
      nameBestEmployee = name;
    }
  }

  return nameBestEmployee;
};

console.log(
  findBestEmployee({
    anna: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
