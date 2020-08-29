
var basePrice// = 30
var isLogin = true
// services is loaded from server, but now,
var services = [{ item: 'Wifi', price: 3 }, { item: 'Car rental', price: 20 },
{ item: 'BBQ', price: 10 }, { item: 'Laundry', price: 3 },
{ item: 'Breakfast', price: 1 }, { item: 'Airport Shuttle', price: 5 }
]
var itemExtends = document.getElementById('items-extend')
var moreItemsSide = document.getElementsByClassName('more-items')[0]
moreItemsSide.addEventListener('click', updateTotalPrice)

var totalPrice = document.getElementById('total-price')
var btnCheckout = document.getElementById('btn-checkout')
btnCheckout.addEventListener('click', receiveInformationCheckout)
var customerName = document.getElementById('cusname')
customerName.addEventListener('keyup', function () {
    if (!customerName.value)
        setStyleDisplay(customerName.parentElement.lastElementChild, 'inline')
    else setStyleDisplay(customerName.parentElement.lastElementChild, 'none')

});

var customerPhone = document.getElementById('cusphone')
customerPhone.addEventListener('keyup', function () {
    if (!customerPhone.value)
        setStyleDisplay(customerPhone.parentElement.lastElementChild, 'inline')
    else setStyleDisplay(customerPhone.parentElement.lastElementChild, 'none')

});
var customerEmail = document.getElementById('cusmail')
customerEmail.addEventListener('keyup', function () {
    if (!customerEmail.value)
        setStyleDisplay(customerEmail.parentElement.lastElementChild, 'inline')
    else {
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (customerEmail.value.match(mailFormat))
            setStyleDisplay(customerEmail.parentElement.lastElementChild, 'none')
    }

});

// consol   e.log(customerName, customerEmail, customerPhone)

$(document).ready(() => {
    addItemExtendToService(services)
    basePrice = parseFloat(document.getElementById('total-price').textContent)
    document.getElementById('reservationid').value = makeid(15)
    console.log(document.getElementById('reservationid').value)
})
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function addItemExtendToService(services) {
    for (item of services) {
        var text = `
                    <div class="form-check form-check-inline col-sm-6 m-0 p-1">
                        <input class="form-check-input more-services" type="checkbox" id="${item.item}" value = '${item.price}'>
                        <label class="form-check-label" for="${item.item}" > <b> ${item.item}</b> : ${item.price}$/ night</label>
                    </div>`
        itemExtends.insertAdjacentHTML('beforebegin', text)
    }
}
var nbofnight = parseInt(document.getElementById('number-of-night').innerHTML)
function updateTotalPrice() {
    var listCheck = document.getElementsByClassName('more-services');
    var services = document.getElementById('services')
    var listName = []
    var s = parseFloat(basePrice)
    for (check of listCheck) {
        if (check.checked) {
            s += parseFloat(check.value * nbofnight)
            listName.push(check.id)
        }
    }
    console.log(listName.toString())
    services.value = listName.toString()
    document.getElementById('total').value = s.toFixed(2)
    totalPrice.innerText = s + '$'

}

function receiveInformationCheckout() {
    var customerGender = document.getElementById('inputState')
    var customerRequest = document.getElementById('inputRequire')
    var customerArrive = document.getElementById('inputTime')

    if (!isValidInput(customerName.parentElement.lastElementChild) || !isValidInput(customerEmail.parentElement.lastElementChild) || !isValidInput(customerPhone.parentElement.lastElementChild)) {
        return
    }

    // Send data to server 
    // $("#notifyToCustomer").modal({ show: true });

}

function getStyleDisplay(element) {
    return element.style.display
}

function setStyleDisplay(element, value) {
    element.style.display = value
}

function isValidInput(element) {
    return getStyleDisplay(element) == 'none'
}
