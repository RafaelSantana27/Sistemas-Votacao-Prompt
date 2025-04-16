// Lista de candidatos disponíveis para votação
const canditatos = [
    {
        id: 1,
        nome: "O Candidato Honesto",
        partido: "PEDN - Partido da Ética Democrática Nacional",
        votos: 0,
    },
    {
        id: 2,
        nome: "Advogado Paloma",
        partido: "PA - Partido dos Advogados",
        votos: 0,
    },
    {
        id: 3,
        nome: "João Plenario",
        partido: "PCO - Partido dos corruptos e oportunistas",
        votos: 0,
    },
    {
        id: 4,
        nome: "Programador da Silva",
        partido: "PPY - Partidos dos Programadores Youtuber",
        votos: 0,
    }
];

// Função que recebe um ID e adiciona um voto ao candidato correspondente
const inserirVoto = (id) => {
    const candidato = canditatos.find((c) => c.id === id);
    if(!candidato) {
        console.log("Candidato invalido");
        return false;
    }
    candidato.votos++;
}

// Função que solicita ao usuário o ID do candidato via prompt
const obterIdVoto = () => {
    const id = parseInt(window.prompt("Informe o id do candidato:"));
    return id
}

// Função principal que controla o processo de votação
const votacao = () => {
    let controle = true;

    while (controle) {
        const id = obterIdVoto();

        if (id == 0) {
            controle = false;
            break;
        }
        inserirVoto(id);
    }
    // console.log(canditatos);
    console.log(obterVencedor());
}

// Função que determina o vencedor ou os vencedores (em caso de empate)
const obterVencedor = () => {
    const candidadoOrdenados = canditatos.sort((a, b) => b.votos - a.votos);
    const qtdVotos = [...candidadoOrdenados.map(item => item.votos)];
    const maiorQtdVotos = Math.max(...qtdVotos);

    const vencedores = canditatos.filter((canditado) => canditado.votos == maiorQtdVotos);
    
    if(vencedores.length > 1) {
        console.log("Há um empate na votação");
    }
    
    // return vencedores;
    return vencedores.map(v => v.nome)
}

// Inicia o processo de votação
votacao();