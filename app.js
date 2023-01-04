// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//Step-1- Accessing the elements to apply JavaScript for functionality
const navToggle = document.querySelector(".nav-toggle"); //you can name anything to this variabele like "navButton" or simply "button"
const links = document.querySelector(".links");

//Step2- Applying add event listener on toggle button or icon.
navToggle.addEventListener("click", function () {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("links"));
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }
  links.classList.toggle("show-links");
});
