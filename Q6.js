function categorizeExpense (expenses) {
 return expenses.map((item)=>{
    if (item.amount>100) {
        return "High Expense"
    }
    else 
    return "Low Expense"
})
}
let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];
const category = categorizeExpense(expenses)
console.log(category)