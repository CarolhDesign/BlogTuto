import {loadOneDoc} from './firebase/firebase.js'

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

async function displayContent(id){
    const article = await loadOneDoc(id)
    console.log(article)
    document.querySelector('h1').textContent = article.title
    document.querySelector('p').textContent = article.content
}

displayContent(id)