let array = [];
let a =+prompt("Nhap kich thuoc cua mang");
for(let i=0;i<a;i++){
    let b = +prompt(`Nhap phan tu thu ${i+1}`);
    array.push(b);
}
let count = 0;
for(let i=0;i<a;i++){
    count = 0;
    for(let j=1;j<a;j++){
        if(array[i] == array[j]){
            count++;
        }
    }
    if(count==0){
        console.log(array[i]);
        break;
    }
}