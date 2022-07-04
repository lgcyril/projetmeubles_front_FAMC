// Création fonction bdAdultes
async function getAPI() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        // mode: 'cors',
        // cache: 'default'
    };
    try {
        let response = await fetch('http://localhost:4000/items')
        let result = await response.json()
        let rang, name, auteur;
        // AFFICHE LE TABLEAU
        // for (let i = 0; i < 3; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            // rang += `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            //name = result.item.name;
            console.log("Dans API : " + result) 
            // auteur += `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
        // }  // fin for
        // document.getElementById("rang").innerHTML = rang
       // document.getElementById("titre").innerHTML = name
        // document.getElementById("auteur").innerHTML = auteur
    }  // fin try
    catch (error) {
        console.log(error);
    }
}

getAPI();