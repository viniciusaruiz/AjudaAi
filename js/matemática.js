document.addEventListener('DOMContentLoaded', function() {

    // SEU CÓDIGO AQUI: pegue do localStorage o
    // nome e o src da imagem da pessoa clicada
    // e coloque eles na página.

    b2 = document.querySelector("h1")
    b2.innerHTML = localStorage.getItem("t2")
    

})