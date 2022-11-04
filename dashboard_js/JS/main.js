import { data } from "./users.js";

let listEl = document.getElementById('list')

let sortBtn = document.getElementById('sort')

let selectEl = document.getElementById('select')

let searchInput = document.getElementById('search')
let searchBtn = document.getElementById('search__btn')

sortBtn.addEventListener('click',() =>{
    let sorted = data.sort((a,b) =>{
        return a.name.localeCompare(b.name)
    })
    render(listEl,sorted)
})

searchBtn.addEventListener('click', ()=>{
    let newArr = []
    for(let i=0; i<data.length; i++){
       if(data[i].name.includes(searchInput.value)) newArr.push(data[i])
    }
    render(listEl,newArr)
})

selectEl.addEventListener('change',(e) =>{
    let filterd = data.filter(el => el.priority ==  e.target.value)
    render(listEl,filterd)
 })
 
 
function render(list,data){
    
        listEl.innerHTML = ''

        data.forEach(el => {
        let itemEl = document.createElement('div')
        itemEl.className = 'box__list__item'
    
        let imgEl = document.createElement('img')
        imgEl.className = ('item__img')
        imgEl.src = el.ava

        let boxEl1 = document.createElement('div')
        boxEl1.className = ('item__text')  
        
        let textEl = document.createElement('p')
        textEl.className = ('text')
        textEl.textContent = el.text  
        
        let comp = document.createElement('span')
        comp.className = ('company')
        comp.textContent = el.company

        let boxEl2 = document.createElement('div')
        boxEl2.className = ('item__name')  

        let nameEl = document.createElement('p')
        nameEl.className = ('name')
        nameEl.textContent = el.name

        let spanEl = document.createElement('span')
        spanEl.className = ('registar')
        spanEl.textContent = el.date_of_register 

        let boxEl3 = document.createElement('div')
        boxEl3.className = ('item__date') 
        
        let dateEl = document.createElement('p')
        dateEl.className = ('online')
        dateEl.textContent = el.date_of_onliine

        let hourEl = document.createElement('span')
        hourEl.className = ('time')
        hourEl.textContent = el.time
        
        let btnEl = document.createElement('button')
        btnEl.className = ('item__btn')  
        btnEl.textContent = el.priority
        if (btnEl.textContent == "high") {
            btnEl.className = ('item__btn high')
        }else if (btnEl.textContent == "normal") {
            btnEl.className = ('item__btn normal')
        }else if (btnEl.textContent == "low") {
            btnEl.className = ('item__btn low')
        }     

        let menuBox = document.createElement('div')
        menuBox.className = ('menu__box')

        let menuBtn = document.createElement('button')
        menuBtn.className = ('menu__btn')
        menuBtn.innerHTML = '<img src="./img/Vector.png" alt="menu">'

        let menuDrop = document.createElement('div')
        menuDrop.className = ('menu__drop')
        
        let btn1 = document.createElement('button')
        btn1.className = ('menu__modul')
        btn1.id = ('dlt')
        btn1.textContent = "Delete"

        let btn2 = document.createElement('button')
        btn2.className = ('menu__modul')
        btn2.id = ('high')
        btn2.textContent = "high"

        let btn3 = document.createElement('button')
        btn3.className = ('menu__modul')
        btn3.id = ('low')
        btn3.textContent = "low"

        let btn4 = document.createElement('button')
        btn4.className = ('menu__modul')
        btn4.id = ('norm')
        btn4.textContent = "normal"

        boxEl1.append(textEl,comp)
        boxEl2.append(nameEl,spanEl)
        boxEl3.append(dateEl,hourEl)
        menuBox.append(menuBtn,menuDrop)
        menuDrop.append(btn1,btn2,btn3,btn4)

        itemEl.append(imgEl,boxEl1,boxEl2,boxEl3,btnEl,menuBox)

        list.append(itemEl)
    })
}
render(listEl,data)



let elBtn = document.querySelector(".thema");
let elBox = document.querySelector(".tickets__box");

elBtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    elBox.classList.toggle("dark");
})

































// document.querySelector('.more-button').addEventListener('click', function () {
//     document.querySelector('.list-container').classList.toggle('active');
// });



// let listEl = document.getElementById('list')

// function render(list){
    
//         listEl.innerHTML = ''

//         for (let i = 0; i < data.length; i++) {
//         let itemEl = document.createElement('div')
//         itemEl.className = 'box__list__item'
    
//         let imgEl = document.createElement('img')
//         imgEl.className = ('item__img')
//         imgEl.src = data[i].ava
    
//         let titleEl = document.createElement('h3')
//         titleEl.textContent = data[i].text
    
//         let nameEL = document.createElement('h3')
//         nameEL.textContent = data[i].name
        
//         let dayEl = document.createElement('h3')
//         dayEl.textContent = data[i].time
    
//         let btnEl = document.createElement('button')
//         btnEl.textContent = data[i].priority
    
//         itemEl.append(imgEl,titleEl,nameEL,dayEl,btnEl)

//         list.append(itemEl)
//     }
// }
// render(listEl)
