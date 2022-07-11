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
  const data = await getAPI("http://localhost:4000/get-allItems")
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
        <h5 class="card-title"> {{ this.obj.name }} </h5>
        <p class="card-text"> {{ this.obj.description }} </p>
        <a href="#" class="btn"> Découvrir </a>
      </div>
  </div>
`
//Creator allows to create a displayer in a single function call. 
//Requires a promise to feed its data
//Still requires mounting + creation of <product-card> html + import of vue script in all html pages
function productCardCreator(promise) {
  const vm = Vue.createApp({
    data() {
      return {
        objects: []
      }
    },
    mounted() {      
      promise.then((payload) => {
        this.objects = payload;
      })
        .catch(err => console.log(err + "when mounted()"))
    }
  })
  vm.component('product-card', {
    props: ['obj'],
    template: displayerTemplate
  })

  return vm
}