'use strict';

//import {allCharacters} from './character.js'; //import pole všech postav
 
//console.log (allCharacters);

const fetchPath= 'https://rickandmortyapi.com/api/location/?page=';
let newHtml='';

everything ();

//nelze stáhnout všechna místa najednou, je třeba postupně stáhnout 5 stránek přes API, postupné měnění adresy, ze které se data stahují

function everything () {
    for (let j=1; j<6; j++) {
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


// vytvoření kódu v HTML a vložení do souboru .html, každé místo má v id uloženo svoje identifikační číslo pro případnou další práci např. po kliknutí

function getHtml (data) {

        for(let i=0; i<data.results.length; i++) { 
        newHtml += `<div class="place" id="${data.results[i].id}">
        <div class="name"> ${data.results[i].name} </div>
        <div class="type"> Type: ${data.results[i].type} </div>
        <div class="dimension"> Dimension: ${data.results[i].dimension}</div>
        </div>`            
  /*   nevyužitý kus - nepodařilo se mi rozchodit moduly (verze níže, ze souboru character.js jsem chtěla importovat celé pole všech postav poté, co mne nepustila API a Json (řve mi konzole už jen když mám v souboru .html <script src="location.js" type="module"></script> a nevím jak ji umlčet) - u API se mi některé postavy načetly a některé hlásily Error, původně jsem chtěla ke každé lokalitě vygenerovat div Inhabitants a tam vykreslit jednotlivé postavy podobně jako v souboru character.html. Opravit to neumím, odrazuje mne upozornění, ať doporučenou operaci kdesi v hloubi nastavení mého počítače nedělám, pokud si nejsem jistá, co dělám)   
         for (let j=0; j<data.results[i].residents.length; j++) {
             let k=0;
             while (data.results[i].residents[j]==allCharacters[k].url) {
                 k++;
             }
        
        newHtml += `<div class="person">
        <img class="photo-small" src="${allCharacters[k].image}" alt="${allCharacters[k].name}">
        <div class="name"> ${allCharacters[k].name} </div>
        <div class="status"> Status: ${allCharacters[k].status} </div>
        <div class="species"> Species: ${allCharacters[k].species}</div>
        <div class="gender"> Gender: ${allCharacters[k].gender} </div>
        <div class="origin"> Origin: ${allCharacters[k].origin.name} </div>
        <div class="location"> Location: ${allCharacters[k].location.name} </div>
        
        </div>`

        }
        newHtml += `</div>`
        
        
    };

    newHtml += `</div>` */

    };
    
    document.querySelector('#all-places').innerHTML = newHtml;
};

