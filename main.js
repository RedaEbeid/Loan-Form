// Counter

let aboutSection = document.querySelector(".about");
let statsH2 = document.querySelectorAll(".count h2");
let started = false;


let skillsSection = document.querySelector(".skills .cont");
let progSpan = document.querySelectorAll(".skills .cont .prog-holder .prog span");



function counter (el) {

    let goal = el.dataset.goal;
    
    let count = setInterval( () => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000/ goal);
    
}

let up = document.querySelector('.button-up');


window.onscroll = function () {


    if (window.scrollY >= aboutSection.offsetTop - 1000) {
        if (!started) {
            statsH2.forEach((num) => counter(num));
        }
        started = true;
    };


    if (window.scrollY >= skillsSection.offsetTop - 1000) {
        progSpan.forEach( (e) => {
            e.style.width = e.dataset.width;
        })
    };
    
    // Button Up
    this.scrollY >= 1000 ? up.classList.add('show') : up.classList.remove('show'); 

};

up.onclick = function() {
    window.scrollTo( {
        top: 0,
        behavior: "smooth",
    })
}


// Filter

let flexLi = document.querySelectorAll('.portfolio .flex li');
let Img = Array.from(document.querySelectorAll('.portfolio .img-container .card'))

flexLi.forEach( (li) => {

    // Clear And Add Class
    li.addEventListener('click', RemoveAndAdd);
    li.addEventListener('click', removeImg);

});

function RemoveAndAdd() {
    flexLi.forEach( (el) => {
            el.classList.remove('active');
            this.classList.add('active');
    })
}


// Remove Image
function removeImg() {
    Img.forEach( (img) => {
        img.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.filter).forEach( (el) => {
        el.style.display = 'block';
    })
}