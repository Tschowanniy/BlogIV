// Get the div element
var nav_item = document.getElementById("nav_bar");

// Get all sctions with class="sctn" inside the div
var sections = nav_item.getElementsByClassName("sctn");

// Loop through the list items and add the active class to the current/clicked list item
for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    
  });
}



window.addEventListener('scroll', function () {
    let cur_pos = this.window.scrollY;
    document.getElementById("cur_pos_varII").innerHTML = cur_pos ;
});


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "150px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }