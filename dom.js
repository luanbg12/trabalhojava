const botao = document.querySelector('btn')
botao.addEventListener('click', function somar(){
    let n1 = Number(document.querySelector('#n1').value)
    let n2 = Number(document.querySelector('#n2').value)
    let soma = n1 + n2
    alert (soma)
})
