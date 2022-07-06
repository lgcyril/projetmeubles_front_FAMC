let nameProduct="";

// Création fonction getAPI
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
        
        // AFFICHE LE TABLEAU
         //for (let i = 0; i < 3; i++) {
            //console.log(result.records[i].fields.rang + ". " + result.records[i].fields.titre + " de " + result.records[i].fields.auteur)
            // rang += `<td>` + result.records[i].fields.rang + `<br>` + `</td>`
            nameProduct = result[0].name;
            console.log(result) 
            console.log("name : " + nameProduct)
            // auteur += `<td>` + result.records[i].fields.auteur + `<br>` + `</td>`
        // }  // fin for
        // document.getElementById("rang").innerHTML = rang
       document.getElementById("test").innerHTML = nameProduct
        // document.getElementById("auteur").innerHTML = auteur
    }  // fin try
    catch (error) {
        console.log(error);
    }
}

 //getAPI();


// DEUXIEME VERSION PLUS SIMPLE
function getAPI2() {
    console.log("fetching") 
    fetch("http://localhost:4000/items")
      .then(res => res.json())
      .then(
        (res) => {
          console.log(res)
          this.setState({
              isLoaded : true,
              items : res
            })
          console.log("fetched")
        })
  return res      
}

async function get4LastFurniture() {
  const pl = await fetch("http://localhost:4000/items")
  const data = await pl.json()
  const res = await data.slice(0,4)
  return res
}

// getAPI2()