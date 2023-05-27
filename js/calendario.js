document.addEventListener("DOMContentLoaded", function(){

    // function getOption(){
    //     dropdown = document.querySelector('#meses').value
    //     console.log(dropdown)
    // if (dropdown=='jan' || dropdown=='mar' || dropdown=='mai' || dropdown=='jul' || dropdown=='ago' || dropdown=='out' || dropdown=='dez'){
    lista = document.querySelector('.calendario')
    li1 = document.createElement('li .dia')
    li1.innerHTML = '29'
    li2 = document.createElement('li .dia')
    li2.innerHTML = '30'
    li3 = document.createElement('li .dia')
    li3.innerHTML = '31'
    lista.appendChild(li1)
    lista.appendChild(li2)
    lista.appendChild(li3)
        // }
    // }
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
})