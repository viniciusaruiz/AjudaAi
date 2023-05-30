document.addEventListener("DOMContentLoaded", function(){
    dic = {'FGV': [5,9,12,18],
    'USP':[6,18,22,27],
    'PUCSP':[9,18,24,28],
    'MACKENZIE':[2,8,18,22],
    'FAAP':[8,14,21,27],
    'UNIFESP':[1,7,26,28],
    'São Camilo':[3,10,15,25],
    'UNICAMP':[11,16,24,28],
    'Mauá':[10,19,24,28],
    'Santa Casa':[5,10,21,27],
    'Einstein':[1,10,20,22],
    'FSLM':[14,18,22,28],
    'UFSCAR':[4,8,15,19],
    'UNISO':[2,9,20,26],
    'Cásper Líbero':[10,15,20,25],
    'Insper':[1,10,20,26]
}

    // function getOption(){
    //     dropdown = document.querySelector('#meses').value
    //     console.log(dropdown)
    // if (dropdown=='jan' || dropdown=='mar' || dropdown=='mai' || dropdown=='jul' || dropdown=='ago' || dropdown=='out' || dropdown=='dez'){
    // lista = document.querySelector('.calendario')
    // li1 = document.createElement('li .dia')
    // li1.innerHTML = '29'
    // li2 = document.createElement('li .dia')
    // li2.innerHTML = '30'
    // li3 = document.createElement('li .dia')
    // li3.innerHTML = '31'
    // lista.appendChild(li1)
    // lista.appendChild(li2)
    // lista.appendChild(li3)
    //     // }
    // }
    dias = document.querySelectorAll('.dia')
    fechar = document.querySelector('.fechar')
    janela = document.querySelector('.janela')

    lista = localStorage.getItem('faculs').split(',')
    ul = document.querySelector('ul')

    dic2 = {}
    for (item of lista){
        i = 0
        console.log(dic[item])
        for (dia of dic[item]){
            if (i == 0){
                // aux[]
            }
        }
    }

    for (dia of dias){
        dia.addEventListener('click', function(event){
            event.stopPropagation()
            janela.style.display = 'block'
        })}
    fechar.addEventListener('click', function(event){
        event.stopPropagation()
        janela.style.display = 'none'

    // if (parseInt(dia.innerHTML) == )
    })





})