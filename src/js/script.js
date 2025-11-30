function openMenu() {
  document.getElementById("menu_aba").style.display = "block"; 
}

function closeMenu() {
  document.getElementById("menu_aba").style.display = "none";    
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
}

function temaDark() {
    const cores = {
        '--cor-click': '#CEF09D',
        '--cor-sombra': '#9b0a59',
        '--cor-text': 'black',
        '--cor-back1': '#38184C',
        '--cor-back2': '#4f6a93',
        '--md-sys-color-primary': '#CEF09D'
    };

    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}

function abrirImoveis() {
    window.open('https://www.inatel.br/moradia-e-republicas/', '_blank');
}

/* Imagens e Video */

const eventos =
[
    {
        "id": 1,
        "title": "Semana do Software 2025",
        "date": "12/05",
        "time": "10:00",
        "location": "Salão de Eventos",
        "type": "tech",
        "description": "Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
        "id": 2,
        "title": "Workshop de IoT",
        "date": "12/01",
        "time": "08:00",
        "location": "Laboratório CS&I",
        "type": "tech",
        "description": "Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
        "id": 3,
        "title": "Festa dos Alunos 2025",
        "date": "18/05",
        "time": "19:00",
        "location": "Área Esportiva",
        "type": "cultural",
        "description": "Venha comemorar a melhor Festa dos Alunos de todos os tempos!",
        "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400"
    },
    {
        "id": 4,
        "title": "Feira de Oportunidades",
        "date": "04/05",
        "time": "10:00",
        "location": "Salão de Eventos",
        "type": "academic",
        "description": "Venha conhecer empresas e projetos com destaque na área da engenharia.",
        "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400",
        "nota": 8.5
    }
]
const carousel = document.querySelector('.carousel');

// Função para criar os cards
function createCards(eventos) {
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = ''; // limpa antes
  eventos.forEach(event => {
    const card = document.createElement('div');
    card.classList.add('card');
    const nota = typeof event.nota !== 'undefined' ? event.nota : null;
    const notaClass = nota !== null ? getNotaClass(nota) : '';
    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="info">
        <div class="lable-nota ${notaClass}">${nota !== null ? nota : ''}</div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
      </div>
    `;
    carousel.appendChild(card);
  });
}

// Retorna a classe CSS conforme a regra de notas:
// <6 => nota-vermelha, 6<=nota<8 => nota-laranja, >=8 => nota-verde
function getNotaClass(nota) {
    const n = Number(nota);
    if (isNaN(n)) return '';
    if (n < 6) return 'nota-vermelha';
    if (n >= 6 && n < 8) return 'nota-laranja';
    return 'nota-verde';
}

// Inicializando
createCards();

/* Interação e Animação */

// Controle do carrossel
let index = 0;
// Avança para o próximo card
function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}

// Volta ao card anterior
function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Adicionando interatividade
document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

// Arrastar no celular
let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});


// - A cada 5 segundos o card deve passar automaticamente.


// A cada 5 segundos o card deve passar automaticamente.
let autoSlideInterval = setInterval(nextCard, 5000);

// Se passar o tempo, passa um card e o intervalo é reiniciado
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextCard, 5000);
}

function contatar(imovel) {
    // Simula um processamento de 1 segundo e dá o feedback
    document.body.style.cursor = 'wait'; // Muda cursor para "carregando"
    
    setTimeout(() => {
        document.body.style.cursor = 'default';
        // Feedback visual exigido
        alert("✅ Contato iniciado!\n\nVocê será redirecionado para o WhatsApp do responsável por: " + imovel);
    }, 800);
}