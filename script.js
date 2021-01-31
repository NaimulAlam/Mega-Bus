//counting the tickets 
function handleticketChanges(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal(); //calling this function here to make a link between them

}

// calculating the prices of tickets
function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount = getInputValue('economy');

    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    const grandTotal = totalPrice + vat;
    const grandTotalNum = document.getElementsByClassName('grand-total');
    //for loop to take both(more than one) class
    for ( var i = 0; i < grandTotalNum.length; i++) {
        grandTotalNum[i].innerText = '$' + grandTotal
    }
    return grandTotalNum;
}

// pairup the input values to reduces some similar lines
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

//Book Now Button
const bookNowBtn = document.getElementById('book-now');
bookNowBtn.addEventListener('click', function () {
    const bookingArea = document.getElementById('booking-area');
    bookingArea.style.display = 'none';
    const confirmationArea = document.getElementById('confirmation-area');
    confirmationArea.style.display = 'block';
    IsEmpty();
})

//Checking the empty values in ticket count and giving alert 
function IsEmpty() {
    var empty = document.getElementById('firstClass-count').value;
    var empty1 = document.getElementById('economy-count').value;
    if (empty == 0 && empty1 == 0) {
        alert('Please reload & select a ticket. Now you purched for $00');
    }
    else {
        return true;
    }
}
