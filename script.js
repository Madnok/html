
const btn = document.querySelectorAll('.choose-btn');

// console.log(btn)
var totalPlaces = 0
let isOpen = false;
btn.forEach(function(button){
    button.addEventListener('click', function(event){
        var btnItem = event.target
        var places = btnItem.parentElement
        var placesImg = places.querySelector('img').src
        var placesName = places.querySelector(('.places-item-text p')).innerText
        // console.log(placesImg,placesName)
        addMenu(placesImg,placesName)
        nxtBtn.forEach(btn => {
            btn.style.display = 'none';
        });
        document.querySelector('.menu').style.right = "0"
        isOpen = !isOpen;
    })
    
})
function addMenu(placesImg,placesName){
    var existingPlaces = document.querySelectorAll('tbody tr td:nth-child(2)');
    var placesExist = false;
    existingPlaces.forEach(function(place){
        if(place.innerHTML == placesName){
            placesExist = true;
            alert("Mỗi Chỗ Đi Một Lần Thoi Ní!!!");
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
const saveBtn = document.querySelector('.order')
const moveOnBtn = document.querySelector('.button-move-on')
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const placesContainers = [...document.querySelectorAll('.places-container')];

placesContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

openBtn.addEventListener('click', function() {
    if (isOpen) {
        document.querySelector('.menu').style.right = "-100%";
        nxtBtn.forEach(btn => {
            btn.style.display = 'block';
        });
    } else {
        document.querySelector('.menu').style.right = "0";
        nxtBtn.forEach(btn => {
            btn.style.display = 'none';
        });
    }
    isOpen = !isOpen;
});

closeBtn.addEventListener('click',function(){
    document.querySelector('.menu').style.right = "-100%"
    nxtBtn.forEach(btn => {
        btn.style.display = 'none';
    });
    isOpen = false;
});

saveBtn.addEventListener('click', function() {
    var places = document.querySelectorAll('tbody tr td:nth-child(2)');
    var placesData = [];
    places.forEach(function(place){
      var placeName = place.innerText;
      placesData.push(placeName);
    });
  
    var data = new Blob([placesData.join('\n')], { type: 'text/plain' });
    var url = window.URL.createObjectURL(data);
  
    var link = document.createElement('a');
    link.href = url;
    link.download = 'WhereToGo.txt';
    link.click();
  
    window.alert('Đã note lại địa điểm thành công hehe!');
    saveBtnClicked = true;
    if (!sessionStorage.getItem('pageRefreshed')) {
    location.reload(); // Refresh the page only if it's not refreshed before
    sessionStorage.setItem('pageRefreshed', 'true');
    }
});
window.addEventListener('load', function() {
    var moveOnBtn = document.querySelector('.places-move-on button');
    moveOnBtn.style.display = 'block';
    moveOnBtn.addEventListener('click', function() {
        moveOnBtn.addEventListener('click', function() {
          window.location.href = 'index5.html';
        }); 
    })
});



