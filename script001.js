var confirmar = window.confirm('está gostando da aula?')
if (confirmar) {
    window.alert('ótimo!')
    var nome = window.prompt('qual seu nome?')
    nome == null || nome.trim().length === 0 ? nome = "Sem nome" : nome //chega se o nome está vazio. Se sim, o nome vira 'sem nome', se não, usa nome mesmo.
    document.getElementById('title').innerHTML = `Olá, ${nome}!`
    document.querySelector(".livre").innerHTML = "Seja muito bem-vindo!! <3"
    document.querySelector('.prox').style.display = "inline-block"
    document.querySelector('.voltar').style.display = "inline-block"
} else {

    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    window.alert('poxa =c')
    document.getElementById('title').innerHTML = "Sinto muito..."
    document.querySelector(".livre").innerHTML = "Espero que volte ^^"
    document.querySelector('.voltar').style.display = "inline-block"
}
