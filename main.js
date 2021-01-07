var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
var item7 = document.getElementById('item7');
var item8 = document.getElementById('item8');
var item9 = document.getElementById('item9');
var item10 = document.getElementById('item10');
var item11 = document.getElementById('item11');
var item12 = document.getElementById('item12');
var item13 = document.getElementById('item13');
var item14 = document.getElementById('item14');
var item15 = document.getElementById('item15');
var item16 = document.getElementById('item16');


var items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16];

item1.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item2.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item3.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item4.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item5.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item6.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item7.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item8.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item9.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item10.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item11.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item12.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item13.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item14.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item15.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});
item16.addEventListener('click', function(){
    for(var i = 0; i<items.length; i++) {
        items[i].classList.remove('active');
    }
    this.classList.add('active');
});

// COLORS

var color1 = document.querySelector('.colors--color1');
var color2 = document.querySelector('.colors--color2');
var color3 = document.querySelector('.colors--color3');
var color4 = document.querySelector('.colors--color4');
var color5 = document.querySelector('.colors--color5');
var color6 = document.querySelector('.colors--color6');
var color7 = document.querySelector('.colors--color7');
var color8 = document.querySelector('.colors--color8');
var color9 = document.querySelector('.colors--color9');
var color10 = document.querySelector('.colors--color10');
var color11 = document.querySelector('.colors--color11');
var color12 = document.querySelector('.colors--color12');
var color13 = document.querySelector('.colors--color13');
var color14 = document.querySelector('.colors--color14');
var color15 = document.querySelector('.colors--color15');
var color16 = document.querySelector('.colors--color16');
var color17 = document.querySelector('.colors--color17');
var color18 = document.querySelector('.colors--color18');
var color19 = document.querySelector('.colors--color19');
var color20 = document.querySelector('.colors--color20');
var color21 = document.querySelector('.colors--color21');
var color22 = document.querySelector('.colors--color22');
var color23 = document.querySelector('.colors--color23');
var color24 = document.querySelector('.colors--color24');
var color25 = document.querySelector('.colors--color25');
var color26 = document.querySelector('.colors--color26');
var color27 = document.querySelector('.colors--color27');
var color28 = document.querySelector('.colors--color28');

var selected = document.querySelector('.selected');
var selected2 = document.querySelector('.selected2');

selected.addEventListener('click', function(){
    var aux = selected.style.backgroundColor;
    this.style.backgroundColor = selected2.style.backgroundColor;
    selected2.style.backgroundColor = aux;
});

selected2.addEventListener('click', function(){
    var aux = selected2.style.backgroundColor;
    this.style.backgroundColor = selected.style.backgroundColor;
    selected.style.backgroundColor = aux;
});

color1.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color2.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color3.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color4.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color5.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color6.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color7.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color8.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color9.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color10.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color11.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color12.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color13.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color14.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color15.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color16.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color17.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color18.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color19.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color20.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color21.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color22.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color23.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color24.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color25.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color26.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color27.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});
color28.addEventListener('click', function(){
    selected.style.backgroundColor = this.style.backgroundColor;
});

function photo() {

    document.getElementById("content").innerHTML='<object type="text/html" data="photo.html" ></object>';

}

function video() {

    document.getElementById("content").innerHTML='<object type="text/html" data="video.html" ></object>';

}

function about() {

    document.getElementById("content").innerHTML='<object type="text/html" data="about.html" ></object>';

}

function motionDesign() {

    document.getElementById("content").innerHTML='<object type="text/html" data="motiondesign.html" ></object>';

}
