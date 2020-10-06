// GOBACK BUTTON
function goBack() {
  window.history.back();
}


// HEADER MENU TOGGLE BUTTON
function menuToggle(x) {
  x.classList.toggle("change");
  document.getElementById("menu").classList.toggle("appear");
  document.getElementsByTagName("body")[0].classList.toggle("overlay");
}



// SIDEBAR MENU DROP DOWN
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


// TERRAIN SIDEBAR CHANGE
function orleanaisSidebar() {
  document.getElementById("float-left").style.display = "none";
  document.getElementById("sidebar-orleanais").style.display = "block";
  document.getElementsByClassName("main-right")[0].style.marginLeft = "5rem";
}





// MAP DISPLAY
var mapTerrain = document.getElementById("terrain_map");
function rebrechien() {
  mapTerrain.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.3514515377574!2d-0.5823211844621834!3d44.8754962790984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5528464d2e1995%3A0xd6ebb7d73e822d68!2s6%20Avenue%20de%20Chavailles%20Bat%207%2C%2033520%20Bruges!5e0!3m2!1sen!2sfr!4v1600162211424!5m2!1sen!2sfr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
};
function saintAy() {
  mapTerrain.innerHTML = '<iframe src="https://maps.googleapis.com/maps/api/js?v=3.38&key=AIzaSyD-Prsm3tG6Vv5XkuDrVY8yfRC57-LuAbE" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
};

// SIMULATEUR STEPS 
var steps = document.getElementsByClassName("steps");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var stepName = document.getElementById("step-name");
var bar = document.getElementById("bar");

var currentStep = 0;
steps[currentStep].style.display = "block";

if (currentStep == 0) 
{
  nextBtn.onclick = ()=> {
    currentStep++;
    var backStep = currentStep -1;
    if ((currentStep > 0) && (currentStep < 4))
    {
      steps[currentStep].style.display = "block";
      steps[backStep].style.display = "none";
      stepName.innerHTML = "Étape " + (currentStep+1);
      bar.style.width = ((currentStep+1) * 30)+"px";
    }

    //  SHOW Mentions Légales LINK ON THE LAST PAGE
    if (currentStep == 3) {
      var legales = document.getElementById("legales");
      legales.style.display = "inline-block";
      nextBtn.style.display = "none"
    }
  }
  prevBtn.onclick = () => {
    if (currentStep > 0)
    {
      currentStep--;
      var backStep = currentStep + 1;
      steps[currentStep].style.display = "block";      
      steps[backStep].style.display = "none";
      stepName.innerHTML = "Étape " + (currentStep+1);
      bar.style.width = ((currentStep+1) * 30)+"px";   
    }   

    //  HIDE Mentions Légales LINK EXCEPT ON THE LAST PAGE
    if (currentStep !== 3) {
      var legales = document.getElementById("legales");
      legales.style.display = "none";
      nextBtn.style.display = "block"
    }    
    if (currentStep == 0) {
      prevBtn.setAttribute("onclick", "window.location='simulateur.html'");  
    }
  }
} 






// LEXIQUE 
// SEARCH 