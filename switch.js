
let Valor = parseFloat(prompt('Saldo Inicial'))
let menu = parseFloat(prompt('Valor Inicial:' + Valor + 
'\n (1) Adicionar' + '\n (2)Remover \n(3) Sair'))

switch (menu) {
case 1:
    let Adicionar = parseFloat(prompt('Adicionar'))
    Valor = Valor  + Adicionar
    alert('Seu Saldo:' + Valor)
    break
case 2:
    let Remover = parseFloat(prompt('Remover'))
    Valor = Valor - Remover
alert('Seu Saldo:' + Valor)
    break
case 3: 
    let sair
    alert('sair')
    break
}
