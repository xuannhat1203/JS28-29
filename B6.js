let array = [];
let a =+prompt("Nhap kich thuoc cua mang");
for(let i=0;i<a;i++){
    let b = +prompt(`Nhap phan tu thu ${i+1}`);
    array.push(b);
}
console.log("sap xep tang dan");
for(let i=0;i<a;i++){
    for(let j=i+1;j<a;j++){
        if(array[i]>array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
for(let i=0;i<a;i++){
    console.log(array[i]);
}