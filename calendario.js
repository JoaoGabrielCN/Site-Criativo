const mesAnoAtual = document.getElementById('mes-ano-atual');
const tabelaJogos = document.getElementById('tabela-jogos');
const botaoMesAnterior = document.getElementById('mes-anterior');
const botaoProximoMes = document.getElementById('proximo-mes');

let mesAtual = 8; 
let anoAtual = 2023;

const dadosJogos = {

    '2023-09':[
        { dia: '03', horario: '18:30', local: 'Mineirão', adversario: 'RB Bragantino' },
        { dia: '14', horario: '19:00', local: 'Vila Belmiro', adversario: 'Santos' },
        { dia: '20', horario: '21:30', local: 'Maracanã', adversario: 'Fluminense' }

    ],
    '2023-10': [
        { dia: '01', horario: '16:00', local: 'Mineirão', adversario: 'América MG' },
        { dia: '08', horario: '18:30', local: 'Arena Pantanal', adversario: 'Cuiabá' },
        { dia: '19', horario: '19:00', local: 'Mineirão', adversario: 'Flamengo' },
        { dia: '22', horario: '16:00', local: 'Arena MRV', adversario: 'Atlético MG' },
        { dia: '25', horario: '20:00', local: 'Mineirão', adversario: 'Bahia' },
        { dia: '28', horario: 'A confirmar', local: 'Castelão', adversario: 'Fortaleza' }         
    ],
    '2023-11': [
        { dia: '01', horario: 'A confirmar', local: 'Morumbi', adversario: 'São Paulo' },
        { dia: '04', horario: 'A confirmar', local: 'Mineirão', adversario: 'Internacional' },
        { dia: '08', horario: 'A confirmar', local: 'Mineirão', adversario: 'Vasco' },
        { dia: '11', horario: 'A confirmar', local: 'Couto Pereira', adversario: 'Coritiba' },
        { dia: '22', horario: 'A confirmar', local: 'Hailé Pinheiro', adversario: 'Goiás' },
        { dia: '25', horario: 'A confirmar', local: 'Mineirão', adversario: 'Athletico PR'},
        { dia: '29', horario: 'A confirmar', local: 'Nilton Santos', adversario: 'Botafogo'} 
    ],
    '2023-12': [
        {dia: '03', horario: 'A confirmar', local: 'Mineirão', adversario: 'Palmeiras'}
    ]
};

function atualizarTabelaJogos(mes, ano) {
    const nomesMeses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    mesAnoAtual.textContent = `${nomesMeses[mes]} ${ano}`;

    tabelaJogos.querySelector('tbody').innerHTML = '';

    const chaveMesAtual = `${ano}-${String(mes + 1).padStart(2, '0')}`;

    if (dadosJogos[chaveMesAtual]) {
        dadosJogos[chaveMesAtual].forEach(jogo => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${jogo.dia}</td>
                <td>${jogo.horario}</td>
                <td>${jogo.local}</td>
                <td>${jogo.adversario}</td>
            `;
            tabelaJogos.querySelector('tbody').appendChild(linha);
        });
    }
}

function mudarMes(offset) {
    const proximoMes = new Date(anoAtual, mesAtual + offset + 1, 1);

    const ultimoMesPermitido = new Date(2023, 12, 1);
    if (proximoMes <= ultimoMesPermitido && proximoMes >= new Date()) {
        mesAtual += offset;
    }

    atualizarTabelaJogos(mesAtual, anoAtual);
}

botaoMesAnterior.addEventListener('click', () => mudarMes(-1));
botaoProximoMes.addEventListener('click', () => mudarMes(1));

atualizarTabelaJogos(mesAtual, anoAtual);
