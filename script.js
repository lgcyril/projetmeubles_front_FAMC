// Création fonction bdAdultes
async function bdAdultes() {
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    try {
        let response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret&q=&rows=133&sort=-rang&facet=type_de_document&facet=auteur&refine.type_de_document=Bande+dessin%C3%A9e+adulte')
        let result = await response.json()
        let rang, titre, auteur;
        // document.getElementById("afficheTableau").innerHTML="<tr> <th scope='col'>Rang</th> <th scope='col'>Titre</th> <th scope='col'>Auteur</th></tr> <tr><th scope='row' id='rang'> </th> <td id='titre'></td> <td id='auteur'></td> </tr>" ;
        // AFFICHE LE TABLEAU
        for (let i = 0; i < 3; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            // rang += `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            titre += `<td>` + result.records[i].fields.titre + `<br>` + `</td>`
            // auteur += `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
        }  // fin for
        // document.getElementById("rang").innerHTML = rang
        document.getElementById("titre").innerHTML = titre
        // document.getElementById("auteur").innerHTML = auteur
    }  // fin try
    catch (error) {
        console.log(error);
    }
}

bdAdultes();