const formulario = document.getElementById('form')
const dadosCep = document.getElementById('dadosCep')


formulario.onsubmit = event => {
    event.preventDefault()
    
    const inputCep = document.getElementById('inputCep').value
    const url = `http://viacep.com.br/ws/${inputCep}/json/`

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