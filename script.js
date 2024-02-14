$(document).ready(function() {
    // Add animations or interactivity here using jQuery
    $('.project').click(function() {
        $(this).toggleClass('project-expanded');
    });
});


function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
  