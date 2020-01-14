// Your code goes here
const intro = document.querySelector('.intro');
console.log(intro);

const container = document.querySelector('.container');
console.log(container);


const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);
const imgContent = document.querySelectorAll('.img-content')
console.log(imgContent);

const destination = document.querySelectorAll('.destination')


intro.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'purple';
});


document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener("click", (event) =>{
        event.preventDefault();
    })
   
});

document.querySelectorAll('.destination').forEach(el => {
    el.addEventListener("mouseenter", () =>{
        el.style.transform = "scale(1.2)";
        el.style.transition = "all 0.3s";
    }) 
});

document.querySelectorAll('.destination').forEach(el => {
    el.addEventListener("mouseleave", () =>{
        el.style.transform = "scale(1)";
      
    })
});

document.querySelectorAll('.text-content').forEach(el => {
    el.addEventListener("dblclick", () =>{
        el.style.backgroundColor = "red";
      
    })
});
document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}


window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });