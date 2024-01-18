let array = [];
let a = +prompt("Nhap kich thuoc cua mang");
for (let i = 0; i < a; i++) {
  let b = +prompt(`Nhap phan tu thu ${i + 1}`);
  array.push(b);
}
for (let i = 0; i < a; i++) {
  for (let j = i + 1; j < a; j++) {
    if (array[i] === array[j]) {
      array.splice(j, 1);
      a--; 
      j--;
    }
  }
}
for (let i = 0; i < a; i++) {
  console.log(array[i]);
}