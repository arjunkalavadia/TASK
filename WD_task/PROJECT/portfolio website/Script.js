document.getElementById('nl1').style.color="#858792"
document.getElementById('nl2').style.color="#858792"
document.getElementById('nl3').style.color="#858792"
document.getElementById('nl4').style.color="#858792"
document.getElementById('nl5').style.color="#858792"
document.getElementById('b1').style.color="#858792"
document.getElementById('nbti').style.color="#858792"


// scroll nav bar

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 5) {
    document.getElementById("navbarid").style.display = "block";
  } else {
    document.getElementById("myP").style.display = "block";
  }
}
// ======================================================================================


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
