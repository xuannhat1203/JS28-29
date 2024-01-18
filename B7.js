var a = prompt("Nhập vào chuỗi:");
var array = [];
for (var i = 0; i < a.length; i++) {
  for (var j = i + 1; j <= a.length; j++) {
    array.push(a.slice(i, j));
  }
}
console.log(array);