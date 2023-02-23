const p0 = document.getElementsByTagName('p')[0]//pega o primeiro 'p' que aparecer no documento
const p1 = document.getElementsByTagName('p')[1]

document.writeln(`<br>no p1 está escrito "${p1.innerText}"`) //'innerText' n pega a formatação
document.writeln(`<br><br>no p1 está escrito "${p1.innerHTML}"`) //'innerHTML' pega a formatação. Todos os filhos de p1

document.querySelector('#msg').onmousedown = function () { mudar() }

function mudar() {

    document.querySelector('#msg').innerText = 'Opa, baum?'
    document.querySelector('#msg').onmouseout = function () { mudar2() }
    function mudar2() {
        document.querySelector('#msg').innerText = 'Clique em mim'
    }
}
