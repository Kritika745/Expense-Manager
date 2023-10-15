// window.onload = function() {
//   localStorage.clear();
//   displayExpenses();
//   calculateTotalExpenses();
// }

function addExpense(event) {
     event.preventDefault();
  
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    
    if (!description || isNaN(amount) || amount <= 0 || !date || number<0) {
      alert('Please enter valid expense details.');
      return;
    }

    const expense = {
        description,
        amount,
        date,
      };

       let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      expenses.push(expense);

      localStorage.setItem('expenses', JSON.stringify(expenses));
  
      displayExpenses();
      calculateTotalExpenses();
    }
    
    function displayExpenses() {
      const expenseItems = document.getElementById('expenseItems');
      expenseItems.innerHTML = '';
    
      let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    
      for (let i = 0; i < expenses.length; i++) {
        const li = document.createElement('li');
        li.innerText = `Date: ${expenses[i].date} |  Amount: Rs${expenses[i].amount} | Description: ${expenses[i].description} `;
        expenseItems.appendChild(li);
      }
    }
    
    function calculateTotalExpenses() {
      let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      let totalExpenses = 0;
      const number = document.getElementById('number').value;
    
      for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
      }
    
      const totalExpensesElement = document.getElementById('totalExpenses');
      totalExpensesElement.innerText = totalExpenses.toFixed(2);
    
  
      const amountOwed = totalExpenses / number; 
      const amountOwedElement = document.getElementById('amountOwed');
      amountOwedElement.innerText = amountOwed.toFixed(2);
    }
    
    displayExpenses();
    calculateTotalExpenses();