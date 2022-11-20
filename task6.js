let listFirst = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let listSecond = [2, 2, 2, 2, 2, 2, 2, 1];

listFirst.forEach((item, index) => {
  if (listFirst[0] !== item) {
    console.log(false);
    return;
  }

  if (index === listFirst.length - 1) console.log(true);
});

listSecond.forEach((item, index) => {
  if (listSecond[0] !== item) {
    console.log(false);
    return;
  }

  if (index === listSecond.length - 1) console.log(true);
});
