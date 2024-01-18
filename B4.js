let array = [];
let array2 = [];
let array3 = [];
let a =+prompt("Nhap kich thuoc cua mang");
for(let i=0;i<a;i++){
    let b = +prompt(`Nhap phan tu thu ${i+1}`);
    array.push(b);
}
for(let i=0;i<a;i++){
    if(array[i]%2==0){
        array2.push(array[i]);
    }else{
        array3.push(array[i]);
    }
}
for(let i=0;i<array2.length;i++){
    console.log(array2[i]);
}
for(let i=0;i<array3.length;i++){
    console.log(array3[i]);
}