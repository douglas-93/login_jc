const sair = () => {
    if (confirm('Deseja realmente sair? Os dados que não foram salvos serão perdidos!')) {
        window.location.href = '../../index.html';
    }
};

const adicionar = () => {
    const contato = document.getElementById('contato');
    const phone = document.getElementById('telefone');

    const table = document.getElementById('dados-tabela');
    const row = document.createElement('tr');
    const id = document.createElement('td');
    const nome = document.createElement('td');
    const telefone = document.createElement('td');

    let lastId;
    try {
        lastId = parseInt(table.childNodes.item(table.childNodes.length - 1).innerText.split('\t')[0]) + 1;
    } catch (error) {
        lastId = 1;
    }


    const container = document.createElement('div');

    const excluir = document.createElement('img');
    excluir.src = './img/trash.svg';
    excluir.style.width = '35px';
    excluir.style.marginTop = '8px';
    excluir.style.fill = '#FF0000';

    container.onclick = () => {
        document.getElementById(`pai-${lastId}`).remove();
    };

    row.setAttribute('id', `pai-${lastId}`);
    excluir.setAttribute('class', 'excluir');

    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.cursor = 'pointer';

    container.appendChild(excluir);



    id.innerHTML = lastId;
    nome.innerHTML = contato.value;
    telefone.innerHTML = phone.value;

    row.appendChild(id);
    row.appendChild(nome);
    row.appendChild(telefone);
    row.appendChild(container)
    table.appendChild(row);

    contato.value = '';
    phone.value = '';
};

const load = () => {
    let dados = localStorage.getItem('DB');
    dados = JSON.parse(dados);
    dados.forEach((element, index) => {
        const table = document.getElementById('dados-tabela');
        const row = document.createElement('tr');
        const id = document.createElement('td');
        const nome = document.createElement('td');
        const telefone = document.createElement('td');
        const container = document.createElement('div');

        const excluir = document.createElement('img');
        excluir.src = './img/trash.svg';
        excluir.style.width = '35px';
        excluir.style.marginTop = '8px';
        excluir.style.fill = '#FF0000';

        container.onclick = () => {
            document.getElementById(`pai-${index + 1}`).remove();
        };

        row.setAttribute('id', `pai-${index + 1}`);
        excluir.setAttribute('class', 'excluir');

        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.cursor = 'pointer';

        container.appendChild(excluir);

        id.innerHTML = index + 1;
        nome.innerHTML = element.nome;
        telefone.innerHTML = element.telefone;

        row.appendChild(id);
        row.appendChild(nome);
        row.appendChild(telefone);
        row.appendChild(container);
        table.appendChild(row);
    });
};

// const carregaDados = () => {
//     fetch('./dados.json')
//     .then(response => {
//         return response.json()
//     })
//     .then (data => {
//         data.forEach((element, index) => {
//             const table = document.getElementById('dados-tabela')
//             const row = document.createElement('tr')
//             const id = document.createElement('td')
//             const nome = document.createElement('td')
//             const telefone = document.createElement('td')

//             id.innerHTML = index + 1
//             nome.innerHTML = element.nome
//             telefone.innerHTML = element.telefone

//             row.appendChild(id)
//             row.appendChild(nome)
//             row.appendChild(telefone)
//             table.appendChild(row)
//         });
//     })
// }

const formataNumero = () => {
    const tel = document.getElementById('telefone');
    tel.value = tel.value.replace(/\D/g, '');
    tel.value = tel.value.replace(/^(\d{2})(\d)/g, '($1) $2');
    tel.value = tel.value.replace(/(\d)(\d{4})$/, '$1-$2');
};

const salvar = () => {
    let dados = [];
    document.getElementById('dados-tabela').childNodes.forEach((e) => {
        let row = e.childNodes;
        if (row.length != 0) {
            let cont = {
                nome: row[1].innerText,
                telefone: row[2].innerText,
            };
            dados.push(cont);
        }
    });

    localStorage.setItem('DB', JSON.stringify(dados));

    const msg = document.querySelector('.success-alert')
    msg.style.display = 'block'
    setTimeout(() => {
        msg.style.display = 'none'
    }, 2000)
};

// carregaDados()

const populaDB = () => {
    localStorage.setItem('DB', JSON.stringify([
        {
            "nome": "Joãozinho dos Milagres",
            "telefone": "(31) 98765-4321"
        },
        {
            "nome": "Claudinho do Suporte",
            "telefone": "(31) 98765-4321"
        },
        {
            "nome": "Kleytin da Guerra",
            "telefone": "(31) 98765-4321"
        },
        {
            "nome": "Samuel da Paz",
            "telefone": "(31) 98765-4321"
        },
        {
            "nome": "Jobson Pedreiro",
            "telefone": "(31) 98765-4321"
        },
        {
            "nome": "Jubiscreuza Clementina",
            "telefone": "(31) 98765-4321"
        }
    ]))
}

populaDB()
load();
