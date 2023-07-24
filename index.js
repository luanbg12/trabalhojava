let pacientes = ["Matheus", "Marcos","Lucas","João"];

function mostrarFila() {
    let listaPacientes = "Fila de espera:\n";
    pacientes.forEach((paciente, index) => {
        listaPacientes += `${index + 1}º ${paciente}\n`;
    });
    alert(listaPacientes);
}

function novoPaciente() {
    let nome = prompt("Digite o nome do novo paciente");
    pacientes.push(nome);
    alert(`${nome} foi adicionado à fila.`)
    mostrarFila();
}

function consultarPaciente(){
    if (pacientes.length === 0) {
        alert("A fila está vazia");
        return;
    }

    let nome = pacientes.shift();
    alert(`O Paciente consultado foi ${nome}.`);
    mostrarFila();
}

window.onload = function() {
    let opcao;
    mostrarFila();
    do {
        opcao = prompt("Escolha uma opção;\n1. Novo Paciente\n2. Consultar paciente\n3. Sair");
        switch (opcao) {
            case "1":
                novoPaciente();
                break;
            case "2":
                consultarPaciente();
                break;
            case "3":
                alert("Programa encerrado.");
                break;
            default:
                alert("Opção Inválida");
        }
    } while (opcao !== "3")
};
