document.addEventListener("DOMContentLoaded", function(){
    
    dicionario = {'adm': ['Insper', 'FGV', 'USP', 'PUCSP'], 
    'arq': ['USP', 'MACKENZIE', 'FAAP', 'UNICAMP'], 
    'biomed': ['UNESP', 'USP', 'UNIFESP', 'São Camilo'], 
    'dir': ['Insper', 'FGV', 'USP', 'PUCSP'], 
    'econo': ['Insper', 'FGV', 'USP', 'MACKENZIE'], 
    'eng_comp': ['Insper', 'USP', 'UNICAMP', 'Mauá'], 
    'eng_mecat': ['Insper', 'USP', 'UNICAMP', 'Mauá'], 
    'eng_mec': ['Insper', 'USP', 'UNICAMP', 'Mauá'], 
    'enferm': ['USP', 'Santa Casa', 'UNICAMP', 'UNIFESP'], 
    'fisio': ['USP', 'Santa Casa', 'UNICAMP', 'UNIFESP'], 
    'med': ['USP', 'Santa Casa', 'Einstein', 'UNICAMP'], 
    'odonto': ['USP', 'UNICAMP', 'UNESP', 'FSLM'], 
    'psico': ['USP', 'PUCSP', 'UNESP', 'UFSCAR'], 
    'rp': ['USP', 'UNISO', 'UNESP', 'Cásper Líbero'], 
    'ri': ['USP', 'FGV', 'PUCSP', 'UNICAMP'],
    }

    selecao = document.querySelector('select')
    ranking = document.querySelectorAll('.tabelinha')

    top1 = ranking[2]
    top2 = ranking[3]
    top3 = ranking[4]
    top4 = ranking[5]
    selecao.addEventListener('change',function(){
        top1.innerHTML =  '#1 '+ dicionario[selecao.value][0]
        top2.innerHTML =  '#2 '+ dicionario[selecao.value][1]
        top3.innerHTML =  '#3 '+ dicionario[selecao.value][2]
        top4.innerHTML =  '#4 '+ dicionario[selecao.value][3]
    
        checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes[0].name = dicionario[selecao.value][0]
        checkboxes[1].name = dicionario[selecao.value][1]
        checkboxes[2].name = dicionario[selecao.value][2]
        checkboxes[3].name = dicionario[selecao.value][3]
    })

    checkboxes = document.querySelectorAll('input[type=checkbox]')
    for (checkbox of checkboxes) {
        checkbox.addEventListener('change', function(event){
            chkboxs = document.querySelectorAll('input[type=checkbox]:checked');
            lista = []
            for (chkbox of chkboxs){
                lista.push(chkbox.name)
            }
        localStorage.setItem('faculs',lista)
        })
    }




})