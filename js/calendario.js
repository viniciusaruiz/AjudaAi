document.addEventListener("DOMContentLoaded", function(){
    e = document.querySelector("h1")
    e.innerHTML = "ATUALIZAR NOME MATÉRIA"

    // CALENDARIO
    dias = document.querySelectorAll('.dia')
    fechar = document.querySelector('.fechar')
    janela = document.querySelector('.janela')

    for (dia of dias){
        dia.addEventListener('click', function(event){
            event.stopPropagation()
            janela.style.display = 'block'
        })}
    fechar.addEventListener('click', function(event){
        event.stopPropagation()
        janela.style.display = 'none'
    })

    // MATERIAS
    materias  = document.querySelectorAll('.a_materias')
    console.log(materias)
    for (materia of materias){
        
        materia.addEventListener('click', function(event){
            
            localStorage.setItem('materia',materia.innerHTML)
        })
    }
})