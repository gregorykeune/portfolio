function abrirmenu() {
    const menuMobile = document.querySelector('.mobile-menu-links');
    const icon = document.querySelector('.icon');

    const isOpen = menuMobile.classList.toggle('open');
    icon.src = isOpen ? "img/icones/icone-fechar.webp" : "img/icones/barra-menu.svg";
}

function aumentarPerfil(elemento) {
    elemento.classList.toggle("expandida");
}


const projetos = document.querySelectorAll('.img-projeto img');
const descricao = document.getElementById('texto-descricao');
const textoPadrao = descricao.textContent;


function atualizarDescricao(texto) {
    descricao.classList.add('fade-out');
    setTimeout(() => {
        descricao.textContent = texto;
        descricao.classList.remove('fade-out');
    }, 300);
}


projetos.forEach(projeto => {
    const texto = projeto.getAttribute('data-descricao');

    projeto.addEventListener('mouseenter', () => atualizarDescricao(texto));
    projeto.addEventListener('mouseleave', () => atualizarDescricao(textoPadrao));


    projeto.addEventListener('touchstart', () => atualizarDescricao(texto));
    projeto.addEventListener('touchend', () => atualizarDescricao(textoPadrao));
});