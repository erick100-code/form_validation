const form = document.getElementById('form')
const cxnomes = document.querySelectorAll('.cxnome')

form.addEventListener('submit', (infosDoEvento) => {
    infosDoEvento.preventDefault()
    const caixas = document.querySelectorAll('.caixainp')
    const cxnomes = document.querySelectorAll('.cxnome')
    const cxdate = document.getElementById('cxdate')
    const cxgen = document.getElementById('cxgen')
    
    caixas.forEach(caixa => {
        const input = caixa.getElementsByTagName('input')[0]
        const msg = caixa.getElementsByTagName('span')[0]
        
        if (input.value.length == 0) {
            msg.style.display = 'block'
            
            caixa.classList.add('erro')
            caixa.classList.remove('valid')
        }else if (input.value.length <= 4) {
            caixa.classList.add('erro')
            caixa.classList.remove('valid')
            msg.style.display = 'flex'
            msg.textContent = 'o minimo de caracteres é 5'
        } else {
            caixa.classList.remove('erro')
            caixa.classList.add('valid')
            msg.style.display = 'none'
        
        }
    })
    
    cxnomes.forEach((cxnome) => {
        const input = cxnome.getElementsByTagName('input')[0]
        const msg = cxnome.getElementsByTagName('span')[0]
        const value = input.value
        const array = value.split('')
        const regex = /^[a-zA-Z ]/

        if (input.value.length == 0) {
            msg.style.display = 'block'
            
            msg.textContent = 'error' 
            cxnome.classList.add('erro')
            cxnome.classList.remove('valid')
        }else if (input.value.length <= 4) {
            cxnome.classList.add('erro')
            cxnome.classList.remove('valid')
            
            msg.style.display = 'block'
            msg.textContent = 'o minimo de caracteres é 5'
        } else if (regex.test(array)) {
            let err = false
            
            for (let c = 0; c < array.length; c++) {
                if (!regex.test(array[c])) {        
                    err = true
                } 
            }
            
            if (err) {
                msg.style.display = 'block'
                msg.textContent = 'apenas numeros de a-z, A-Z'
                cxnome.classList.add('erro')
                cxnome.classList.remove('valid')
                
            } else {
                cxnome.classList.remove('erro')
                cxnome.classList.add('valid')
                msg.style.display = 'none'
            }
            
        } else if (!regex.test(array)) {
        
            msg.style.display = 'block'
            cxnome.classList.add('erro')
            cxnome.classList.remove('valid')
            msg.textContent = 'apenas caracteres de a-z'
        }
    })
    
    const inpdata = cxdate.getElementsByTagName('input')[0]
    const txt = cxdate.getElementsByTagName('span')[0]

    
    const inpdatavalue = new Date(inpdata.value).getFullYear()
    const dataatual = new Date()
    const anoatual = dataatual.getFullYear()
    const min = anoatual - 80

    if (isNaN(inpdatavalue)) {
        cxdate.classList.add('erro')
        cxdate.classList.remove('valid')
        txt.style.display = 'block'
        txt.textContent = 'o campo não deve estar vazio. preencha!'
    }else if (inpdatavalue < min || inpdatavalue > anoatual) {
        cxdate.classList.add('erro')
        cxdate.classList.remove('valid')
        txt.style.display = 'block'
        txt.textContent = 'data invalida'
    } else {
        cxdate.classList.remove('erro')
        cxdate.classList.add('valid')
        txt.style.display = 'none'
    }

    const span = cxgen.getElementsByTagName('span')[0]
    const radios = document.querySelectorAll('.radin')
    if (!radios[0].checked && !radios[1].checked && !radios[2].checked) {
        span.style.display = 'block'
        cxgen.classList.add('erro')
        cxgen.classList.remove('valid')
    } else {
        cxgen.classList.remove('erro')
        cxgen.classList.add('valid')
        span.style.display = 'none'
    }
  
})

// QUEBRANDO O PROBLEMA EM PARTES

// adicionar estilos aos inputs invalidos
// apenas enviar o formulario se tudo estiver valido