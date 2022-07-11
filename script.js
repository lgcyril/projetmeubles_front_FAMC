// I. API and database functions
async function getAPI(endpoint) {
    try {
        let response = await fetch(endpoint)
        let result = await response.json()
        return result
    } 
    catch (error) {
        console.log(error);
    }
}


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
  const data = await getAPI("http://localhost:4000/last4items")
  const res = await data.slice(0,4)
  return res
}

async function getCategoryFurniture(category) {
  const url = "http://localhost:4000/get-items-byCategory/"+category
  const data = await getAPI(url)
  return data
}

//II. Vue objects management

//Template of Vue displayers
const displayerTemplate = `
  <div class="card col-sm-3">
    <img v-bind:src="obj.img_url" class="card-img-top">
      <div class="card-body">
        <h3 class="card-title"> {{ this.obj.name }} </h3>
        <p class="card-text"> {{ this.obj.description }} </p>
        <h5 class="card-price"> {{ this.obj.price }}€ </h5>
        <div class="discover-btn-container">
          <a href="#" class="btn btn-outline-secondary btn-discover"> Découvrir </a>
        </div>
      </div>
  </div>
`
//Creator allows to create a displayer in a single function call. 
//Requires a promise to feed its data
//Still requires mounting + creation of <product-card> html + import of vue script in all html pages
function productCardCreator(promise) {
  const vm = Vue.createApp({
    data() {
      return { //contient toutes les données nécessaires à l'affichage de l'objet => vide au début, le remplissage se fait avec un appel API (promise) au moment du montage
        objects: [] 
      }
    },
    mounted() { //événement de déclenchement (comme click). Ici c'est lui qui déclenche la résolution de la promesse liée à l'appel API    
      promise.then((payload) => {
        this.objects = payload; //peuplement de data.objects avec le résultat de la promesse
      })
        .catch(err => console.log(err + "when mounted()"))
    }
  })
  vm.component('product-card', { //la partie front de l'objet => permet de créer une balise <product-card> dans le HTML
    props: ['obj'], //le(s) paramètre(s) qui définissent le composant front. Ici obj est un objet qui contient toutes les infos nécessaires à l'affichage
    template: displayerTemplate //défini au dessus : le code jsx qui définit l'apparence du module
  })

  return vm
}