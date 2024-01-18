let array = [];
let array2  = [];
let a = +prompt("nhap do dai cua mang");
for(let i=0;i<a;i++){
    let b = +prompt(`Nhap phan tu thu ${i} cua mang`);
    array.push(b);
}
for(let i=0;i<a;i++){
    if(array[i]%2 != 0){
        console.log(array[i]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        array.shift();
    }
}

