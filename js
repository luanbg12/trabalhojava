let debito: []
let opcao = ''

while (opcao !=4){
    let opcao = prompt(`Bem-Vindo ao sistema de finanças
    Saldo : ${debito.lenght}
1-Cadastrar Credito           
2-Cadastrar Debito              
3-Extrato dos Débitos e Créditos 
4-Sair`)
}

switch (opcao){
    case '1':
        let debito = {}
        debito.descricao= prompt('Digite a descrição do Credito:')
        debito.tipo = 'C'
        debito.valor = parseFloat(prompt('Digite o valor;'))

        const confirma = confirm(`Salvar
        Salário: ${debito.descricao}
        Compra Salário: ${debito.tipo}
        PGTO Luz: ${debito.valor}`)
        
        if (confirma {
            debito.push(debito)
        }
        break;
        )

}
