let originalNumbers = [2,5,8,10,3];
originalNumbers.forEach((item,index,arr)=>{
    arr[index] = item*2
})
console.log(originalNumbers)