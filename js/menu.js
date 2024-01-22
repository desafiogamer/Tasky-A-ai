let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.icones li a');
const carrin = document.querySelector('.Comprados')
const enderoco = document.querySelector('.endereco')

const copoDe300 = document.getElementById('Copo')
const copoDe500 = document.getElementById('copo500')
const copoDe700 = document.getElementById('copo700')

const Btn300 = document.getElementById('300')
const Btn500 = document.getElementById('500')
const Btn700 = document.getElementById('700')

Btn300.addEventListener('click', ()=>{
    copoDe300.classList.add('ativo')
    copoDe500.classList.remove('ativo')
    copoDe700.classList.remove('ativo')
})

Btn500.addEventListener('click', () => {
    copoDe300.classList.remove('ativo')
    copoDe500.classList.add('ativo')
    copoDe700.classList.remove('ativo')
})

Btn700.addEventListener('click', () => {
    copoDe300.classList.remove('ativo')
    copoDe500.classList.remove('ativo')
    copoDe700.classList.add('ativo')
})

function abrir() {
    enderoco.classList.add('ativo')
}

function carrinho() {
    carrin.classList.toggle('ativo')
}



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('ativo');
                document.querySelector('.icones li a[href*=' + id + ']').classList.add('ativo');
            });
        }
    });
}

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR');
}