let array = [];
let a = +prompt("nhap do dai cua mang");
for(let i=0;i<a;i++){
    let b = +prompt(`Nhap phan tu thu ${i} cua mang`);
    array.push(b);
}
let max = array[0];
for(let i=1;i<size;i++){
    if(array[i]>max){
        max = array[i];
    }
}
console.log("Phan tu lon nhat la: " + max);
let min = array[0];
for(let i=1;i<size;i++){
    if(array[i]<min){
        min = array[i];
    }
}
console.log(`Phan tu nho nhat la ${min}`);