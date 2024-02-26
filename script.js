const btn = document.querySelectorAll('button');
// console.log(btn)
var totalPlaces = 0
btn.forEach(function(button,index){
    button.addEventListener('click', function(event){
        var btnItem = event.target
        var places = btnItem.parentElement
        var placesImg = places.querySelector('img').src
        var placesName = places.querySelector('p').innerText
        // console.log(placesImg,placesName)
        addMenu(placesImg,placesName)
       
    })

    
})
function addMenu(placesImg,placesName){
    var existingPlaces = document.querySelectorAll('tbody tr td:nth-child(2)');
    var placesExist = false;
    existingPlaces.forEach(function(place){
        if(place.innerHTML == placesName){
            placesExist = true;
            alert("Một Chỗ Đi Một Lần Thoi Ní!!!");
        }
    });
    var addTr;
    if(!placesExist){
        addTr = document.createElement('tr')
        var trContent = '<tr><td style="display: flex;"><img style="width: 70px;" src="'+placesImg+'" alt=""></td><td align-items: center>'+placesName+'</td><td style="cursor: pointer;">Xóa</td></tr>'
        addTr.innerHTML = trContent
        var cartMenu = document.querySelector('tbody')
        if(cartMenu){
            cartMenu.append(addTr)
            totalPlaces++;
            cartMenuTotal(totalPlaces);
        
            addTr.querySelector('td:last-child').addEventListener('click', function(){
                addTr.remove();
                totalPlaces--;
                cartMenuTotal(totalPlaces);
            });
        }
    }
}
//----------------Total Places------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function cartMenuTotal() {
    var cartMenu = document.querySelector('div.places-total')
    var total = document.querySelector('span')
    total.innerText =" "+totalPlaces+" ";
}
const openBtn = document.querySelector(".openMenu")
const closeBtn = document.querySelector(".custom-size")

let isOpen = false;
openBtn.addEventListener('click',function(){
    if(isOpen){
        document.querySelector('.menu').style.right = "-100%"
    } else {
        document.querySelector('.menu').style.right = "0"
    }
    isOpen = !isOpen
})

closeBtn.addEventListener('click',function(){
    document.querySelector('.menu').style.right = "-100%"
    isOpen = false;
})