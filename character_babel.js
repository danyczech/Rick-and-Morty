'use strict';

var fetchPath = 'https://rickandmortyapi.com/api/character/?page=';
var newHtml = '';
var allCharacters = [];
everything(); //nelze stáhnout všechny postavy najednou, je třeba postupně stáhnout 30 stránek přes API, postupné měnění adresy, ze které se data stahují

function everything() {
  for (var j = 1; j < 31; j++) {
    readData(j);
  }

  ;
}

; //stažení dat přes API

function readData(j) {
  var fetchPathFull = fetchPath + String(j);
  fetch(fetchPathFull).then(function (response) {
    return response.json();
  }).then(getHtml)["catch"](function (err) {
    console.error(err);
  });
}

; // vytvoření kódu v HTML a vložení do souboru .html, s každou osobou se ukládá do id jedinečné číslo, které lze využít pro další práci (např. akci po kliknutí), vytvoření pole všech postav (pro soubor location.js)

function getHtml(data) {
  for (var i = 0; i < data.results.length; i++) {
    newHtml += "<div class=\"person\" id=\"".concat(data.results[i].id, "\">\n        <img class=\"photo-small\" src=\"").concat(data.results[i].image, "\" alt=\"").concat(data.results[i].name, "\">\n        <div class=\"name\"> ").concat(data.results[i].name, " </div>\n        <div class=\"status\"> Status: ").concat(data.results[i].status, " </div>\n        <div class=\"species\"> Species: ").concat(data.results[i].species, "</div>\n        <div class=\"gender\"> Gender: ").concat(data.results[i].gender, " </div>\n        <div class=\"origin\"> Origin: ").concat(data.results[i].origin.name, " </div>\n        <div class=\"location\"> Location: ").concat(data.results[i].location.name, " </div>\n        \n        </div>");
    allCharacters.push(data.results[i]);
  }

  ;
  document.querySelector('#all-persons').innerHTML = newHtml;
}

; // exportování pole všech postav dalším modulům
//export {allCharacters};