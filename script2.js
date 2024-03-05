const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
document.addEventListener('DOMContentLoaded', function() {
    const goBtn = document.querySelector('.signup-btn');
    goBtn.addEventListener('click', function() {
        document.querySelector('.product').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cardBtns = document.querySelectorAll('.card-btn');
    cardBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const productCard = btn.closest('.product-card');
            const discountTag = productCard.querySelector('.discount-tag');
            let cur = parseInt(discountTag.textContent);
            discountTag.textContent = cur + 1;
            const productContainer = productCard.parentNode;
            const cardArrays = Array.from(productContainer.children);
            cardArrays.sort(function(a, b){
                return parseInt(b.querySelector('.discount-tag').textContent) - parseInt(a.querySelector('.discount-tag').textContent);
            });
            cardArrays.forEach(function(card){
                productContainer.appendChild(card);
            })
            btn.scrollIntoView();
        });
    });
});