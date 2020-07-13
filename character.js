'use strict';

const fetchPath= 'https://rickandmortyapi.com/api/character/?page=';
let newHtml='';
let allCharacters= [];

everything ();

//nelze stáhnout všechny postavy najednou, je třeba postupně stáhnout 30 stránek přes API, postupné měnění adresy, ze které se data stahují

function everything () {
    for (let j=1; j<31; j++) {
        readData (j);
    };
}; 

//stažení dat přes API

function readData (j) { 
    let fetchPathFull= fetchPath + String(j);
    fetch (fetchPathFull) 
	.then( response => response.json())
	.then(getHtml)
	.catch (err => {
        console.error (err);
	});
}; 

// vytvoření kódu v HTML a vložení do souboru .html, s každou osobou se ukládá do id jedinečné číslo, které lze využít pro další práci (např. akci po kliknutí), vytvoření pole všech postav (pro soubor location.js)

function getHtml (data) {
    
    for(let i=0; i<data.results.length; i++) {
        newHtml += `<div class="person" id="${data.results[i].id}">
        <img class="photo-small" src="${data.results[i].image}" alt="${data.results[i].name}">
        <div class="name"> ${data.results[i].name} </div>
        <div class="status"> Status: ${data.results[i].status} </div>
        <div class="species"> Species: ${data.results[i].species}</div>
        <div class="gender"> Gender: ${data.results[i].gender} </div>
        <div class="origin"> Origin: ${data.results[i].origin.name} </div>
        <div class="location"> Location: ${data.results[i].location.name} </div>
        
        </div>`

        allCharacters.push(data.results[i]);
    };
    
    document.querySelector('#all-persons').innerHTML = newHtml;
};

// exportování pole všech postav dalším modulům

//export {allCharacters};


