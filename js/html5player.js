
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function addItem(itemToPlay){
    var ul = document.getElementById("play-list");
   /* var candidate;
    candidate.value = "Test1"; */
    var li = document.createElement("li");
   li.setAttribute('id',"Test1"); 
    li.appendChild(document.createTextNode(itemToPlay));
    ul.appendChild(li);
}