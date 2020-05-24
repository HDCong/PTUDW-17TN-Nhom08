var tabInformation = document.getElementsByClassName('infor-tab')[0]
var tabPassword = document.getElementsByClassName('pwd-tab')[0]
var rightSideInfor = document.getElementsByClassName('on-infor')[0]
var rightSidePwd = document.getElementsByClassName('on-pwd')[0]
console.log(tabInformation, tabPassword)
var btnChangePhoto = document.getElementsByClassName('btn-change')[0]
tabInformation.addEventListener('click', showInformationTab)
tabPassword.addEventListener('click', showPasswordTab)

function changeNewAvatar() {
    $('#myImage').trigger('click')
        // console.log('helo')

    // upload to Server
    // change link avatar
}
btnChangePhoto.addEventListener('click', changeNewAvatar)

var userInformation = {
    name: 'Sea Diamond',
    email: 'example@example.com',
    phone: '0954124758',
    gender: 'male',
    DOB: 8,
    MOB: 8,
    YOB: 1999
}
render()

function render() {
    loadDataFromServer()
    setDataToShow()

}

function loadDataFromServer() {
    // Get data from server and storage in variable: userInformation

}

function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function setDataToShow() {
    console.log('hello')
    var customerName = document.getElementById('inputName');
    var customerEmail = document.getElementById('inputEmail');
    var customerPhone = document.getElementById('inputPhone');
    customerName.value = userInformation.name
    customerEmail.value = userInformation.email
    customerPhone.value = userInformation.phone
    selectElement('inputDayDOB', userInformation.DOB.toString())
    selectElement('inputMonthDOB', userInformation.MOB.toString())
    selectElement('inputYearDOB', userInformation.YOB.toString())
}

// /Listener
function showInformationTab() {
    console.log('info')
    if (!tabInformation.classList.contains('on-showing')) {
        tabInformation.classList.add('on-showing')

    }
    if (tabPassword.classList.contains('on-showing')) {
        tabPassword.classList.remove('on-showing')

    }
    if (!rightSidePwd.classList.contains('not-show')) {
        // rightSideInfor.classList.remove('not-show')
        $('.on-pwd').fadeOut('slow', function() {
            rightSidePwd.classList.add('not-show')
        })

    }

    if (rightSideInfor.classList.contains('not-show')) {
        // rightSidePwd.classList.add('not-show')
        $('.on-infor').fadeIn('slow', function() {
            rightSideInfor.classList.remove('not-show')

        })
    }



    console.log(tabInformation), console.log(rightSideInfor), console.log(tabPassword), console.log(rightSidePwd)

}

function showPasswordTab() {
    console.log('pwd')
    if (!tabPassword.classList.contains('on-showing')) {
        tabPassword.classList.add('on-showing')

    }
    if (tabInformation.classList.contains('on-showing')) {
        tabInformation.classList.remove('on-showing')

    }

    if (!rightSideInfor.classList.contains('not-show')) {
        $('.on-infor').fadeOut('slow', function() {
            rightSideInfor.classList.add('not-show')
        })
    }
    if (rightSidePwd.classList.contains('not-show')) {
        // rightSideInfor.classList.add('not-show')
        $('.on-pwd').fadeIn('slow', function() {
            rightSidePwd.classList.remove('not-show')
        })
    }
}


var usernameData = document.getElementById('inputName')
usernameData.addEventListener('keyup', function() {
    if (!usernameData.value)
        usernameData.parentElement.lastElementChild.style.display = 'inline'
    else
        usernameData.parentElement.lastElementChild.style.display = 'none'
})

var buttonUpdate = document.getElementsByClassName('btn-update-inf')[0]
buttonUpdate.addEventListener('click', updateUserInformation)
var buttonChangePwd = document.getElementsByClassName('btn-change-pwd')[0]
buttonChangePwd.addEventListener('click', changePassword)

function updateUserInformation() {
    console.log('btn update clicked')

    // send to server
}

function changePassword() {
    console.log('btn update clicked')

    // send to server
}