let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];
const tax = expenses.map ((items) => items.amount += (items.amount/10))
console.log(tax)