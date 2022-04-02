const formulario = document.getElementById('form')
const dadosCep = document.getElementById('dadosCep')


formulario.onsubmit = event => {
    event.preventDefault()
    const inputCep = document.getElementById('inputCep')
    
    
    if(document.forms[0],inputCep.value == ''){
        inputCep.classList.add('hidden')
        inputCep.classList.remove('input')
        inputCep.value = 'por favor digite seu cep'
    } else {
        inputCep.classList.add('input')
        inputCep.classList.remove('hidden')
        const url = `http://viacep.com.br/ws/${inputCep.value}/json/`
    
            fetch(url)
            .then(response => response.json())
            .then(data => {
                
                const logradouro = document.getElementById('logradouro').value = data.logradouro
                const bairro = document.getElementById('bairro').value = data.bairro
                const cidade = document.getElementById('cidade').value = data.localidade
                const uf = document.getElementById('uf').value = data.uf
                const ddd = document.getElementById('ddd').value = data.ddd
                
            })
        }
}