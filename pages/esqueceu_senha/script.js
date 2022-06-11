function verificaCampo() {
    const campoEmail = document.querySelector('#email');

    if (campoEmail.value === '' || campoEmail.value.length === 0) {
        const alerta = document.querySelector('.warn-alert');
        alerta.style.display = 'block';
        setTimeout(() => {
            const alerta = document.querySelector('.warn-alert');
            alerta.style.display = 'none';
        }, 2000);
    } else {
        const alerta = document.querySelector('.success-alert');
        alerta.style.display = 'block';
        setTimeout(() => {
            const alerta = document.querySelector('.success-alert');
            alerta.style.display = 'none';
        }, 2000);
    }
}
