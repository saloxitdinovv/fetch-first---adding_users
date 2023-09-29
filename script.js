let users = []

fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => reload(res.users))

let young = document.querySelector('.young .users')
let adult = document.querySelector('.adult .users')
let old = document.querySelector('.old .users')

function reload(users) {
    for (let user of users) {
        let userBox = document.createElement('div')
        let userName = document.createElement('h2')
        let ageBox = document.createElement('div')
        let ageText = document.createElement('p')
        let age = document.createElement('p')

        userBox.classList.add('user_box')
        userName.classList.add('user_name')
        ageBox.classList.add('age_box')
        ageText.classList.add('age_text')
        age.classList.add('age')

        userName.innerHTML = `${user.firstName} ${user.lastName}`
        ageText.innerHTML = 'Age'
        age.innerHTML = `${user.age}`

        userBox.append(userName)
        userBox.append(ageBox)
        ageBox.append(ageText, age)

        if (user.age < 25) {
            young.append(userBox)
        } else if (user.age >= 25 && user.age <= 50) {
            adult.append(userBox)
        } else {
            old.append(userBox)
        }
    }
}



let form = document.forms['adding']
let nameInput = document.querySelector('.name')
let ageInput = document.querySelector('.age')

form.onsubmit = function (event) {
    event.preventDefault()

    let name = nameInput.value;
    let age = +ageInput.value;

    if (name && age >= 0) {
        let user = {
            firstName: name,
            lastName: '',
            age: age
        }

        let userBox = document.createElement('div')
        let userName = document.createElement('h2')
        let ageBox = document.createElement('div')
        let ageText = document.createElement('p')
        let ageElement = document.createElement('p')

        userBox.classList.add('user_box')
        userName.classList.add('user_name')
        ageBox.classList.add('age_box')
        ageText.classList.add('age_text')
        ageElement.classList.add('age')

        userName.innerHTML = `${user.firstName}`
        ageText.innerHTML = 'Age'
        ageElement.innerHTML = `${user.age}`

        userBox.append(userName)
        userBox.append(ageBox)
        ageBox.append(ageText, ageElement)

        if (user.age < 25) {
            young.append(userBox)
        } else if (user.age >= 25 && user.age <= 50) {
            adult.append(userBox)
        } else {
            old.append(userBox)
        }

        users.push(user)
        nameInput.value = '';
        ageInput.value = '';

    }
}