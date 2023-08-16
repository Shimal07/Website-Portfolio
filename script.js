/*typed js*/
const typed = new Typed('.multiple-text',{
  strings: ["Frontend Developer","Backend Developer"],
  typeSpeed :75,
  backSpeed :75,
  backDelay :1000,
  loop: true
});

let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}