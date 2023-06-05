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

    selecao = document.querySelector('select')
    selecao.addEventListener('change', function(){
        dropdown = selecao.value
        li1 = document.getElementById('29')
        li2 = document.getElementById('30')
        li3 = document.getElementById('31')
        if (dropdown=='jan' || dropdown=='mar' || dropdown=='mai' || dropdown=='jul' || dropdown=='ago' || dropdown=='out' || dropdown=='dez'){
            li1.innerHTML = '29'
            li2.innerHTML = '30'
            li3.innerHTML = '31'
            }
        if (dropdown=='fev'){
            li1.innerHTML = ''
            li2.innerHTML = ''
            li3.innerHTML = ''
            }
        if (dropdown=='abr' || dropdown=='jun' || dropdown=='set' || dropdown=='nov'){
            li3.innerHTML = ''
            }
    })
 

    dias = document.querySelectorAll('.dia')
    fechar = document.querySelector('.fechar')
    janela = document.querySelector('.janela')

    lista = localStorage.getItem('faculs').split(',')

    dic2 = {}
    for (item of lista){
        i = 0
        for (dia of dic[item]){
            aux = []
            if (i == 0){
                aux.push('Abertura Inscrições'+' '+item)
            }
            if (i == 1){
                aux.push('Encerramento Inscrições'+' '+item)
            }
            if (i == 2){
                aux.push('1°Fase'+' '+item)
            }
            if (i == 3){
                aux.push('2°Fase'+' '+item)
            }
            if (dic2.hasOwnProperty(dia) == false){
                dic2[dia] = aux
            }
            else if (dic2.hasOwnProperty(dia) == true){
                dic2[dia] = dic2[dia].concat(aux)
            }
            i+=1
        }
    }

    

    for (dia of dias){
        dia.addEventListener('click', function(event){
            
            event.stopPropagation()
            janela.style.display = 'block'
            a = event.currentTarget.innerHTML
            
            if (dic2.hasOwnProperty(a) == true){
                ul = document.querySelector('.faculs')
                ul.innerHTML = ''
                console.log(dic2[a])
                for (evento of dic2[a]){
                    li = document.createElement('li')
                    li.innerHTML = evento
                    ul.appendChild(li)
                }
            }
        })
        
        if (dic2.hasOwnProperty(dia.innerHTML) == true){
            dia.style.color = '#141A8C'
        }
    }
    fechar.addEventListener('click', function(event){
        event.stopPropagation()
        janela.style.display = 'none'
    })
    
        
    





})