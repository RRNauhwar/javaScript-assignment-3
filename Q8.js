let originalNumbers = [2,5,8,10,3];
let newEvenArray =[]
originalNumbers.forEach((item,index,arr)=>{
    if (item%2==0) {
    newEvenArray.push(item) }
})
console.log(newEvenArray)