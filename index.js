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
const scrollInOut = document.querySelectorAll('.scroll-in'),
      disappearingAppearing = document.querySelectorAll('.disappear');
// end of Initiating site contents

// Intersection options

// options for sliding in and sliding out
const slideInOptions = {
    threshold: [0.4, 1]
};

const sildeOutOptions = {
    threshold: 0.3
}

// options for appearing and disappearing
const disappearingOptions = {
    threshold: .2
}

const appearingOptions = {
    threshold: [.3, 1]
}
// end of Intersection options

// Initiating Intersection Observer for sliding in
const slideInOnLoad = new IntersectionObserver(function(entries, slideInOnLoad) {
    entries.forEach(entry => {  
        if (!entry.isIntersecting) {
            return;
        } else{
            entry.target.classList.add('scroll-out')
        }
    });
}, slideInOptions); 

// Initiating Intersection Observer for sliding out
const slideOutOnLoad = new IntersectionObserver(function(entries, slideOutOnLoad) {
    entries.forEach(entry => {  
        if (entry.isIntersecting) {
            return;
        } else{
            entry.target.classList.remove('scroll-out')
        }
        
    });
}, sildeOutOptions); 

//Initiating Intersection Obsrver for diappearing
const appearingOnScroll = new IntersectionObserver((entries, disappearingOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }else {
            entry.target.classList.add('appear');
        }
    })
}, appearingOptions);

//Initiating Intersection Obsrver for diappearing
const disappearingOnScroll = new IntersectionObserver((entries, disappearingOnScroll)=>{
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            entry.target.classList.remove('appear');
        }else {
            return;
        }
        console.log(entry);
    })
}, disappearingOptions)

// activating intersecting effect
scrollInOut.forEach(element => {
    slideInOnLoad.observe(element)
    slideOutOnLoad.observe(element)
})

disappearingAppearing.forEach(element => {
    appearingOnScroll.observe(element)
    disappearingOnScroll.observe(element)
})
