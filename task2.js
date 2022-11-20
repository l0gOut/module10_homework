let x = NaN;

switch (typeof x) {
  case "number":
    console.log(isNaN(x) ? "Тип x не определён" : "x число");
    break;
  case "boolean":
    console.log("x логический тип");
    break;
  case "string":
    console.log("x строка");
    break;
  default:
    console.log("Тип x не определён");
}
