import {loadContent} from './firebase/firebase.js'
let params = new URLSearchParams(document.location.search);
let id = params.get("id");


//Affiche les articles
async function displayContent(){
    const data =  await loadContent()

    
    for(let article of data){

        document.querySelector('ul').innerHTML += `
        <a href="article.html?id=${article.id}">
            <li id="${article.id}">
                <h3>${article.data.title}</h3>
                <p>${article.data.content}</p>
            </li>
        </a>
        <br><br>
        `

    }



}

displayContent()

