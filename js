let contas = []
let opcao = ''
let saldo = 0

while (opcao !="4"){
    let opcao = prompt(`Bem-Vindo ao sistema de finanças
    Saldo : ${saldo}
1-Cadastrar Credito           
2-Cadastrar Debito              
3-Extrato dos Débitos e Créditos 
4-Sair`)

switch (opcao){
    case '1':
        let credito = {}
        credito.descricao= prompt('Digite a descrição do Credito:')
        credito.tipo = 'C'
        credito.valor = parseFloat(prompt('Digite o valor do Crédito;'))
        saldo += credito.valor
        
        const confirma = confirm(`Confirma o Crédito?`)
        if (confirma) {
            contas.push(credito)
        }
        break;
        case '2':
        let debito = {}
        debito.descricao= prompt('Digite a descrição do Debito:')
        debito.tipo = 'd'
        debito.valor = parseFloat(prompt('Digite o valor do Débito;'))
        saldo -= debito.valor
            const confirmar = confirm(`Confirma o Dédito`)
        if (confirmar) {
        contas.push(debito)   
            }         
            break;
        case '3':
        let extrato = ""
        for (let i=0;i < contas.length; i++){
        extrato += `${contas[i].descricao} - ${contas[i].tipo} - ${contas[i].valor} \n`
            }   
        alert(`
        Extrato:
        ${extrato}
        Saldo: ${saldo}`)   
        break
        case '4':
            alert("Saindo do Sistema")
            break
        default:
        alert("Opção Inválida")
        break
    }
}
