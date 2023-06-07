document.addEventListener('DOMContentLoaded', function() {
    ul = document.querySelector('.botoes_metas')
    adds = document.querySelectorAll('.mais')
    input = document.querySelectorAll('.input_planejamento')
    for (add of adds){
        add.addEventListener('click', function(event){
            frase = 'Meta adicionada!'
            div = document.createElement('div')
            p = document.createElement('p')
        

            div.style.display = 'none'
            div.style.fontStyle = 'italic'
            div.style.color = '#000000'

            texto  = document.createTextNode(frase)
            ul.appendChild(div)
            div.appendChild(texto)
            div.style.display = 'block';
            setTimeout(function(){ div.style.display = 'none';}, 2000);
        })


    }

})