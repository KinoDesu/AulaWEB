
function start() {
    var nome = window.prompt('qual seu nome?')
    window.alert('eai, ' + nome)
    document.getElementById('title').innerHTML = `Olá, ${nome}!`
    document.querySelector(".livre").innerHTML = `Seu nome tem ${nome.length} letras`

    //var n1 = Number.parseInt(window.prompt('me dê um número:')) prompt sempre retorna String, por isso precisa converter

    var n1 = Number(window.prompt('me dê um número:'))
    var n2 = Number(window.prompt('me dê outro número:')) //é possível usar só 'Number(n)'. JS vai saber qual tipo de número
    var soma = n1 + n2

    //pra converter para String pode ser 'String(s)' ou 's.toString()'

    window.alert(`a soma dos números é ${soma}`) //window.alert('a soma dos números é ' + soma)

    // document.write(`<p>Seja muito bem-vindo!! <3</p>`) => escreve um texto na página

    //a página pega seu numero de letras no nome faz ele elevado à 3 e devolve em reais
    // utilizar '**' é fazer potência de um número por outro

    window.alert(`o valor do seu nome é ${(nome.length ** 3).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    //toLocaleString faz uma localização da String e 'currency' faz o valor ser mostrado como 'R$'

}

var btn = document.querySelector('.start')

btn.addEventListener("click", start)