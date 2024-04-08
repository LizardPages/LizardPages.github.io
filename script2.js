
var slideIndex2 = 1;
showDivs(slideIndex2);

function plusDivs(n2) {
  showDivs(slideIndex2 += n2);
}

function showDivs(n2) {
  var i2;
  var x2 = document.getElementsByClassName("mySlides2");
  if (n2 > x2.length) {slideIndex2 = 1}
  if (n2 < 1) {slideIndex2 = x2.length} ;
  for (i2 = 0; i2 < x2.length; i2++) {
    x2[i2].style.display = "none";
  }
  x2[slideIndex2-1].style.display = "block";
}

function drop() {
  document.getElementById("booksdropdown").classList.toggle("show");
}
