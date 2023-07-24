const nomeAluno = prompt('Digite seu Nome:')
const Nota1 = parseFloat(prompt('Digite a 1ªNota:'))
const Nota2 = parseFloat(prompt('Digite a 1ªNota:'))
const Nota3 = parseFloat(prompt('Digite a 3ªNota:'))
const Nota4 = parseFloat(prompt('Digite a 4ªNota:'))

const mediaFinal = (Nota1 + Nota2 + Nota3 + Nota4)/4

if (mediaFinal>=7){
    alert(`${nomeAluno} voce esta aprovado sua media foi: ${mediaFinal}`)
} else if (mediaFinal >= 4 && mediaFinal <=6){
        alert (`${nomeAluno} voce esta de recuperação sua media foi ${mediaFinal}`)
} else if (mediaFinal>= 0 && mediaFinal <=3){
        alert(`${nomeAluno} voce esta de reprovado sua media foi ${mediaFinal}`)
} 
