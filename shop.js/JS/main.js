async function getData(){
    let response = await fetch('https://fakestoreapi.com/products')
    response = await response.json()
    render(listEl,response)
    localStorage.setItem('data',JSON.stringify(response))
}

getData()

let products = []

var data = localStorage.getItem('data')
data = JSON.parse(data)

// console.log(data)

let listEl = document.getElementById('list')

let sortBtn = document.getElementById('sort')

let filterEl = document.getElementById('select')

let searchInput = document.getElementById('search')
let searchBtn = document.getElementById('search__btn')

let addBtn = document.getElementById('btn__korzinka')
let korzinkaBtn = document.getElementById('korzinka')
let basketBox = document.getElementById('basket__box')

listEl.addEventListener('click',(e) =>{
   if(e.target.matches('.korzinka__btn')){
    console.log(e.target.value)
   }
})



searchBtn.addEventListener('click', ()=>{
    let newArr = []
    for(let i=0; i<data.length; i++){
       if(data[i].title.includes(searchInput.value)) newArr.push(data[i])
    }
    render(listEl,newArr)
})


filterEl.addEventListener('change',(e) =>{    
   let filterd = data.filter(el => el.category ==  e.target.value)
   render(listEl,filterd)
})

sortBtn.addEventListener('click',() =>{
    let sorted = data.sort((a,b) =>{
        return a.price-b.price
    })
    render(listEl,sorted)
})


function render(list,data){

        listEl.innerHTML = ''

        data.forEach(el => {
            let listEl = document.createElement('div')
            listEl.className = 'shop__list'

            let imgBox = document.createElement('div')
            imgBox.className = ('img__box')
    
            let imgEl = document.createElement('img')
            imgEl.className = ('list__img')
            imgEl.src = el.image
    
            let info = document.createElement('div')
            info.className = ('list__info')
            
            let name = document.createElement('p')
            name.className = ('list__name')
            name.textContent = el.title
    
            let category = document.createElement('p')
            category.className = ('list__category')
            category.textContent = el.category
    
            let price = document.createElement('p')
            price.className = ('list__price')
            price.textContent = `$ ${el.price}`

            let btnKorzinka = document.createElement('button')
            btnKorzinka.className = ('btn__korzinka')
            btnKorzinka.value = el.id
            btnKorzinka.textContent = "Add"


            btnKorzinka.addEventListener('click',(e) =>{
                    let product = data.find(el => el.id == e.target.value)
                    products.push(product)
                    localStorage.setItem('products',JSON.stringify(products))
            })

    
            category.append(price)
            imgBox.append(imgEl)
    
            info.append(name,category,btnKorzinka)
    
            listEl.append(imgBox,info)
    
            list.append(listEl)
    
        } ) 
}

function productsRender(list){
    let data = localStorage.getItem('products')
    data = JSON.parse(data)
    list.innerHtml = ''
   data?.forEach(el =>{
       let divEl = document.createElement('div')
       divEl.className = 'basket__cart'

       let imgEl = document.createElement('img')
       imgEl.className = 'basket__img'
       imgEl.src = el.image

       let titleEl = document.createElement('p')
       titleEl.className = 'cart__name'
       titleEl.textContent = el.title;

       let priceEl = document.createElement('span')
       priceEl.className = 'cart__price'
       priceEl.textContent = el.price + '$'

       let btnEl = document.createElement('button')
       btnEl.className = 'cart__btn'
       btnEl.textContent = 'X'
       btnEl.value = el.id

       btnEl.addEventListener('click',(e) =>{
            console.log(e.target.value)
           let product = data.find(el => el.id == e.target.value)
              data.splice(product.id,1)
              products.push(data)
          localStorage.setItem('products',JSON.stringify(products))
       })

       divEl.append(imgEl,titleEl,priceEl,btnEl)
       list.append(divEl)
   })
 }

 productsRender(basketBox)
// document.querySelector('.category__button').addEventListener('click',() => {
//     document.querySelector('.category').classList.toggle('active');
// });

document.querySelector('.korzinka').addEventListener('click',() => {
    document.querySelector('.basket').classList.toggle('active');
});



