window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function photo() {

    document.getElementById("content").innerHTML='<object type="text/html" data="photo.html" ></object>';

}

function video() {

    document.getElementById("content").innerHTML='<object type="text/html" data="video.html" ></object>';

}

function about() {

    document.getElementById("content").innerHTML='<object type="text/html" data="about.html" ></object>';

}

function motionDesign {

    document.getElementById("content").innerHTML='<object type="text/html" data="motiondesign.html" ></object>';

}
