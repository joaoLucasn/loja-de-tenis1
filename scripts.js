// Função para abrir o modal
function openModal(imageSrc, title, description) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Atualiza o conteúdo do modal
    modalImage.src = imageSrc;
    modalTitle.innerText = title;
    modalDescription.innerText = description;

    // Exibe o modal com animação
    modal.classList.add('modal-show');
    
    // Desativa a rolagem do fundo
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('productModal');
    
    // Oculta o modal com animação
    modal.classList.remove('modal-show');
    
    // Reativa a rolagem do fundo
    document.body.style.overflow = '';
}

// Fecha o modal quando clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('productModal')) {
        closeModal();
    }
});

// Função para o carrossel
let currentSlide = 0;
const slideInterval = 3000; // Intervalo de 3 segundos para troca de imagem

function showSlide(index) {
    const slides = document.querySelectorAll('#carousel .carousel-slide img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * (1080 + 30); // Ajuste com base na largura da imagem e o espaço entre imagens
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}px)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Inicializa o carrossel e configura a troca automática de imagens
function startCarousel() {
    showSlide(currentSlide);
    setInterval(() => {
        moveSlide(1);
    }, slideInterval);
}

// Chama a função para iniciar o carrossel ao carregar a página
window.addEventListener('load', startCarousel);
