document.addEventListener('DOMContentLoaded', function() {
    ul = document.querySelector('.botoes_metas')
    adds = document.querySelectorAll('.mais')
    for (add of adds){
        add.addEventListener('click', function(event){
            div = document.querySelector('.linha_planejamento')
            div.querySelector('input').value = 'oi'
            ul.appendChild(div)
            console.log(div)
        })

        add.addEventListener('mouseover', function(event){
            add = event.currentTarget
            add.style.color = '#141A8C'
        })
        add.addEventListener('mouseout', function(event){
            add = event.currentTarget
            add.style.color = '#F25E5E'
        })
    }

})