import { isLogin, saveContent } from '../firebase/firebase.js'

const title = document.querySelector('#title')
const content = document.querySelector('#content')
const btn = document.querySelector('button')

isLogin()

btn.addEventListener('click', () => {
    const article = {
        title : title.value,
        content : content.value
    }

    saveContent(article)
})
