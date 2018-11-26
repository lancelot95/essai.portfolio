let tabs = document.querySelectorAll('header  .collapse .navbar-nav .a');
let panels = document.querySelectorAll('.panels section');

for (let i = 0; i < tabs.length; i++) {
   tabs[i].addEventListener('click', () => {
       event.preventDefault();
       for (let j = 0; j < tabs.length; j++) {
           tabs[j].parentElement.classList.remove("active");
           panels[j].classList.remove("visible");
       }
       tabs[i].parentElement.classList.add("active");
       panels[i].classList.add("visible");
   })
}