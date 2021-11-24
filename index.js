let mobileControl = document.querySelector('.closeNav'), 
    hamburger = document.querySelector('.hamburger'),
    hamburgerLine = document.querySelectorAll('.line-weight')

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
