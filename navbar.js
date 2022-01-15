// $('.nav-toggle').click(function(e) {
  
//     e.preventDefault();
//     $("html").toggleClass("openNav");
//     $(".nav-toggle").toggleClass("active");
  
//   });



var dropdown = document.getElementsByClassName("dropdown-btn");

console.log(dropdown.length);


for ( let i = 0; i < dropdown.length; i++) {
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