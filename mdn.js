const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1,
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] （月は 0 基点であるため）
console.log(year + "年" + month + "月" + day + "日");
