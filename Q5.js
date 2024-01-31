let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];
const total = expenses.reduce((total,item)=>{
    total += item.amount
    return total
},0)
console.log(`Total amount is ${total}`)