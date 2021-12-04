// Hamburger effect

let mobileControl = document.querySelector('.closeNav'), 
    hamburger = document.querySelector('.hamburger'),
    hamburgerLine = document.querySelectorAll('.line-weight'),
    cancelNav = document.querySelector('.closeNav')

hamburger.addEventListener('click', () =>{
    hamburgerLine.forEach(element => {
        element.classList.toggle('open')
    })

    if(mobileControl.classList.contains('closeNav')){
        mobileControl.classList.remove('closeNav')
        mobileControl.classList.add('openNav')
    }else if(mobileControl.classList.contains('openNav')){
        mobileControl.classList.add('closeNav')
        mobileControl.classList.remove('openNav')
    }
})

// Intersection observer for site content

//  Initiating site contents
const heroScrolled = document.querySelector('.sub-hero');
// Intersection options
const appearOnLoadOptions = {
    threshold: [0.4, 1]
};

const dissapearOnScrollOptions = {
    threshold: 0.3
}

// Initiating Intersection Observer for sliding in
const appearOnLoad = new IntersectionObserver(function(entries, appearOnLoad) {
    entries.forEach(entry => {  
        if (!entry.isIntersecting) {
            return;
        } else{
            console.log(entry);
            entry.target.classList.add('sub-hero-scrolled')
        }
        
    });
}, appearOnLoadOptions); 

// Initiating Intersection Observer for sliding out
const dissappearOnLoad = new IntersectionObserver(function(entries, appearOnLoad) {
    entries.forEach(entry => {  
        if (entry.isIntersecting) {
            return;
        } else{
            console.log(entry);
            entry.target.classList.remove('sub-hero-scrolled')
        }
        
    });
}, dissapearOnScrollOptions); 

appearOnLoad.observe(heroScrolled)
dissappearOnLoad.observe(heroScrolled)


