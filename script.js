// Listen for Submit
document.getElementById('expense-form').addEventListener('submit', calculateResults)

// Calculate Results

function calculateResults(e) {

  // console.log('Calculating....')
  // UI Vars
  const travelCost = document.getElementById('travel-cost');
  const hotelCost = document.getElementById('hotel-cost');
  const eventCost = document.getElementById('event-cost');
  const foodCost = document.getElementById('food-cost');
  const totalPerson = document.querySelector('#total-person') //Fuck u ritesh it was person Not Person 
  const totalCost = document.querySelector('#total-cost')


 const x = parseFloat(travelCost.value) + parseFloat(hotelCost.value) + parseFloat(eventCost.value) + parseFloat(foodCost.value)


 const calculatedExpense =  x * totalPerson.value

  // console.log(calculatedExpense)

 if (isFinite(calculatedExpense) ) {
     
     totalCost.value = calculatedExpense

  } else {
    showError('Please check your numbers');
  }

   e.preventDefault();
}

function showError(error){


  //create a div
  const errorDiv = document.createElement('div')

  //get Element

  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  //Add Class

  errorDiv.className = 'alert alert-danger';

  // Create text Node and append to div

  errorDiv.appendChild(document.createTextNode(error))

  card.insertBefore(errorDiv, heading)

  // clear error after 3 sec

  setTimeout(clearError, 3000)


}

//Clear Error

function clearError() {
  document.querySelector('.alert').remove()
}


