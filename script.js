const login = () => {
    const user = document.querySelector('#user')
    const passwd = document.querySelector('#passwd')

    if (naoEstaPreenchido()) {
        const alerta = document.querySelector('.warn-alert')
        alerta.style.display = 'block'
        setTimeout(() => {
            alerta.style.display = 'none'
        }, 2000)
    } else if (user.value.toLowerCase() === 'admin' && passwd.value.toLowerCase() === 'admin') {
        window.location.href = './pages/home/index.html'
    } else {
        const error = document.getElementsByClassName('error-alert')[0]
        error.style.display = 'block'
        setTimeout(() => {
            error.style.display = 'none'
        }, 2000)
    }
}

const naoEstaPreenchido = () => {
    const user = document.querySelector('#user')
    const passwd = document.querySelector('#passwd')

    return (user.value === '' || user.value === undefined || user.value === null) ||
    (passwd.value === '' || passwd.value === undefined || passwd.value === null)
}

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter')
        login()
})