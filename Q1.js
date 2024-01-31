const ordersList = [
    {name: "Laptop",price: 120000},
    {name: "Mobile", price: 70000},
    {name: "Mobile Charger", price: 1500},
    {name: "Laptop Charger",price: 10500},
];
function totalPrice (ordersList) {
    let total = 0
    ordersList.forEach((items)=>{
        total += items.price
    })
    return total;
}
console.log(`The total price is Rs.${totalPrice(ordersList)}`)