async function getData(){
    let response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    response = await response.json()
    render(brandBox,response)
    localStorage.setItem('data',JSON.stringify(response))
}
getData()

var data = localStorage.getItem('data')
data = JSON.parse(data)

let brandBox = document.getElementById('brands__box')

// let brandsCaty = document.getElementById('brands__caty')

let sortBtn = document.getElementById('sort')

let filterEl = document.getElementById('select')

let searchInput = document.getElementById('search')
let searchBtn = document.getElementById('search__btn')


searchBtn.addEventListener('click', ()=>{
    let newArr = []
    for(let i=0; i<data.length; i++){
       if(data[i].name.includes(searchInput.value)) newArr.push(data[i])
    }
    render(brandBox,newArr)
})

// brandsCaty.addEventListener('change',(event) =>{    
//     let filteer = data.filter(el => el.brand ==  event.target.value)
//     render(brandBox,filteer)
//  })

filterEl.addEventListener('change',(e) =>{    
    let filterd = data.filter(el => el.category ==  e.target.value)
    render(brandBox,filterd)
 })
 
sortBtn.addEventListener('click',() =>{
     let sorted = data.sort((a,b) =>{
         return a.price-b.price
     })
     render(brandBox,sorted)
 })
  
function render(list,data){ 

    list.innerHTML = ''

    data.forEach(el => {
        let cardEl = document.createElement('div')
        cardEl.className = 'brands__card'

        let imgEl = document.createElement('img')
        imgEl.className = ('card__img')
        imgEl.src = el.image_link  //== null ? el.image_link : 'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1f473566/ProductImages/Eyes/Epic_Black_Mousse_Liner/800897832162_epicblackmousseliner_main.jpg?sw=390&sh=390&sm=fit'
      
        
        let cardInfo = document.createElement('div')
        cardInfo.className = 'card__info'

        let title = document.createElement('h3')
        title.className = 'brands__name'
        title.textContent = el.brand

        let name = document.createElement('p')
        name.className = ('card__name')
        name.textContent = el.name

        let category = document.createElement('p')
        category.className = ('card__category')
        category.textContent = el.category //== null ? el.category : 'lipstick'

        let price = document.createElement('p')
        price.className = ('card__price')
        price.textContent = `$ ${el.price}`

        let btnKorzinka = document.createElement('button')
        btnKorzinka.className = ('card__korzinka')
        // btnKorzinka.value = el.id
        btnKorzinka.textContent = "Add to basket"

        cardInfo.append(title,name,category,price)

        cardEl.append(imgEl,cardInfo,btnKorzinka)

        list.append(cardEl)

    } ) 
}



// toggle category when toggle button is clicked
document.querySelector('.category__btn').addEventListener('click', () => {
    document.querySelector('.category__list').classList.toggle('category__list__show');
});






// let continerEL = document.getElementById('container')
// let templateEl = document.getElementById('templete').content
// async function getData(){
//     let response = await fetch('https://fakestoreapi.com/products')
//     response = await response.json()
//     render(continerEL,response)
// }

// getData()

// function render(list,array) {
//     list.innerHtml = ''

//     let Fragment = document.createDocumentFragment()

//     array.forEach(el=>{
//         let cardItemTemplete = document.importNode(templateEl,true)

//         let imgEl = cardItemTemplete.querySelector(".card-img")
//         imgEl.src = el.image

//         let titelEl = cardItemTemplete.querySelector(".card-title")
//         titelEl.textContent = el.titel

//         Fragment.append(cardItemTemplete)

//     })
//     list.append(Fragment)
// }

// // // js == syhronik til bir oniy vohtda bitta ishni bajaradi




// fetch
// http://makeup-api.herokuapp.com/api/v1/products.json





