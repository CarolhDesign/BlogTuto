import { login } from '../firebase/firebase.js'

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btn = document.querySelector('button')

// On créer un event sur le bouton au clic
btn.addEventListener('click', () => {
    login(email.value, password.value)
})