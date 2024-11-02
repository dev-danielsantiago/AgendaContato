let linhas = ''
const nomes = []
const telefones = []
const contatosQuantidade = document.getElementById('contatos_quantidades')

const form = document.getElementById('form-agenda')
console.log(form)

form.addEventListener('submit', function(e){   
    e.preventDefault()
    adicionarLinha()
    atualizarContatosQuantidade()
    atualizarTabela()
    console.log(e)
})


function adicionarLinha(){
    const NomeContato = document.getElementById('NomeContato')
    const NumeroContato = document.getElementById('NumeroContato')
    
    const numeroContatoValor = parseInt(NumeroContato.value)

    if(nomes.includes(NomeContato.value) && telefones.includes(numeroContatoValor)){
        alert(`O nome ${NomeContato.value} já foi inserida`)
    } else{
        nomes.push(NomeContato.value)
        telefones.push(parseInt(NumeroContato.value))
    
        let linha = '<tr>'
        linha += `<td> ${NomeContato.value}</td>`
        linha += `<td>${NumeroContato.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    
    }
    
    NomeContato.value = ''
    NumeroContato.value = ''
}


function atualizarTabela(){
    const corpoTabela  = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

}

function atualizarContatosQuantidade(){
    contatosQuantidade.innerHTML = `${telefones.length}`;
}