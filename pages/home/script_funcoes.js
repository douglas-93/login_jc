const estilo = `
@import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono&display=swap');

:root {
    --fundo: #121214;
    --frente: #202024;
    --fonte: #ffffff;
    --roxo: #8257e5;
    --verde: #63e557;
    --vermelho: #e55757;
}

* {
    font-family: 'Spline Sans Mono', monospace;
    font-size: 24px;
    padding: 0;
    margin: 0;
}

body {
    width: 100vw;
    height: 100vh;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--fundo);
}

.login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: var(--frente);
    color: var(--fonte);
    padding: 50px;
}

.login-box h1 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 20px;
}

.login-box a {
    text-decoration: none;
    color: var(--fonte);
    margin-top: 5px;
    transition: ease-in-out 0.5s;
}

.login-box a:hover {
    transition: ease-in-out 0.5s;
    color: var(--roxo);
}

.btn-roxo {
    background-color: var(--roxo);
    color: var(--fonte);
    font-weight: 600;
    padding: 10px 30px;
    border-radius: 25px;
    border: none;
    outline: 0;
    margin: 15px 0;
    font-weight: 600;
    transition: ease-in-out 0.5s;
}

.btn-roxo:hover {
    background-color: var(--verde);
    transition: ease-in-out 0.5s;
}

.btn-roxo:focus {
    background-color: var(--verde);
    transition: ease-in-out 0.5s;
}

.input-login {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 15px;
    border: var(--roxo) solid 2px;
    color: var(--fonte);
    margin: 5px 0;
    outline: 0;
    padding: 5px;
    transition: ease-in-out 0.5s;
    text-align: center;
    width: 100%;
}

.input-login:hover {
    border-color: var(--verde);
    transition: ease-in-out 0.5s;
}

.input-login:focus {
    border-color: var(--verde);
    transition: ease-in-out 0.5s;
}

.input-login::placeholder {
    color: var(--fonte);
}

.input-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.input-row input {
    margin: 20px 25px;
}

table, tr, td, th {
    padding: 10px 20px;
    border: var(--fonte) solid 1px;
    border-collapse: collapse;
    vertical-align: middle;
    border-spacing: 10px 20px;
}

th {
    background-color: var(--roxo);
}

tr:nth-child(even) {
    background-color: #3d3d43;
}

.btn-sair {
    background-color: var(--roxo);
    color: var(--fonte);
    font-weight: 600;
    padding: 10px 30px;
    border-radius: 25px;
    border: none;
    outline: 0;
    margin: 15px 0;
    font-weight: 600;
    transition: ease-in-out 0.5s;
}

.btn-sair:hover {
    background-color: var(--vermelho);
    transition: ease-in-out 0.5s;
}

.btn-sair:focus {
    background-color: var(--vermelho);
    transition: ease-in-out 0.5s;
}

.row-sair {
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
}

.excluir {
    color: var(--vermelho);
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
}
`;

// const geraPDF = () => {
//     const table = document.getElementsByTagName('table')[0];

//     const doc = new jsPDF();

//     const res = doc.autoTableHtmlToJson(table);
//     doc.autoTable(res.columns, res.data);
//     doc.save('table.pdf');
// };
