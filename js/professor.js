document.addEventListener('DOMContentLoaded', function() {
    
    b2 = document.querySelector(".titulo_prof")
    b2.innerHTML = localStorage.getItem("prof")

    img = document.querySelector(".estrela_prof")
    estrelas = localStorage.getItem("estrelas")
    img.setAttribute("src", estrelas)

})