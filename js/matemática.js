document.addEventListener('DOMContentLoaded', function() {
    
    b2 = document.querySelector("h1")
    b2.innerHTML = localStorage.getItem("t2")

    profs = document.querySelectorAll('.prof')
    for (prof of profs){
        prof.addEventListener('click', function(event){            
            event.stopPropagation()
            a = event.currentTarget
            prof = a.querySelector('p').innerHTML
            localStorage.setItem("prof",prof)
            
            estrelas = a.querySelector('.estrelas').getAttribute('src')
            localStorage.setItem("estrelas",estrelas)
        })
    }



})