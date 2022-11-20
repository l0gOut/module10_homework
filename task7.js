let list = [0, 31, 12, 54, 524, 7654, "Строка", NaN, 72, 11, undefined, null];

let sortList = [[], [], []];

list.forEach(value => {
  if (typeof value === "number" && !isNaN(value) && value !== 0)
    value % 2 ? sortList[0].push(value) : sortList[1].push(value);
  else sortList[2].push("" + value);
});

console.log(`
      Нечётное кол-во чисел: ${sortList[0].length}
      Чётное кол-во чисел: ${sortList[1].length}
      Остальное что не относится чётному и нечётному: ${sortList[2].join(", ")}
      `);
