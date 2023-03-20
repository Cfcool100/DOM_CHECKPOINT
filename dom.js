let btnPlus = document.querySelectorAll('.plus');
let btnMinus = document.querySelectorAll('.minus');
let btnRemove = document.querySelectorAll('.remove');
let btnAdd = document.querySelector('button');
let sumSousTotal = document.querySelector('.Total')
btnPlus.forEach((btn) => {btn.addEventListener('click', increase);});
btnMinus.forEach((btn) => {btn.addEventListener('click', diminuer);});
btnRemove.forEach((btn) => {btn.addEventListener('click', removeArticle);});
btnAdd.addEventListener('click', addArticle);
function increase(){
    this.previousElementSibling.value =  parseInt(this.previousElementSibling.value) + 1;
    sTotal(this);
    total();
}

function diminuer(){
    if (this.nextElementSibling.value > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
    }
    sousT(this);
    total();
}
function removeArticle(){
    this.parentElement.parentElement.parentElement.innerHTML = '';
    total();
}
function sTotal(a){
    let price = parseInt(a.parentElement.parentElement.nextElementSibling.innerHTML);
    let qty = parseInt(a.previousElementSibling.value);
    let sousTtl = price * qty;
    a.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = sousTtl + ' fr';
}
function sousT(a) {
    let price = parseInt(a.parentElement.parentElement.nextElementSibling.innerHTML);
    let qty = parseInt(a.nextElementSibling.value);
    let sousTtl = price * qty;
    a.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = sousTtl + ' fr';
}
function addArticle() {
    let nameNewArticle = document.querySelector('.input_article');
    let priceNewArticle = document.querySelector('.price');
    document.querySelector('tbody').innerHTML += '<tr><td class="product"><div><p class="title">' + nameNewArticle.value + '</p><p class="remove">supprimer</p></div></td><td><div class="qty"><div class="minus"><img src="img/icon-minus.svg" alt=""></div><input type="text" name="" id="" value="1" class="unity"><div class="plus"><img src="img/icon-plus.svg" alt=""></div></div></td><td class="price_u">' + priceNewArticle.value +' fr</td><td class="sous_total">' + priceNewArticle.value +' fr</td></tr>'
}
function total(){
    sumSousTotal.innerHTML = 0;
    let btnPrix = document.querySelectorAll(".sous_total");
    btnPrix.forEach((elt) => {sumSousTotal.innerHTML = parseInt(sumSousTotal.innerHTML) + parseInt(elt.innerHTML) + " fr"});
}