document.addEventListener('DOMContentLoaded', function() {

    a_s = document.querySelectorAll('a')

    for (a of a_s) {
        a.addEventListener('click', function(event) {
            t = event.currentTarget
            tt = t.querySelector('li')
            t2 = tt.innerHTML
            localStorage.setItem("t2",t2)
        })
    }

})