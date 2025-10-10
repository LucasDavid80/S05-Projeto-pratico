class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('src/aulas.json');
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'src/css/styles_componente.css'; // Caminho correto para o arquivo CSS
    
    this.shadowRoot.appendChild(link); // Adiciona o link do CSS ao shadow DOM

    

    this.shadowRoot.innerHTML += `
      <div>
        ${aulasDia.map(a => {
          let provaDisplay = a.prova_alert ? '' : 'display: none;';
          return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable">CR: <b>${a.nota}</b></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    link.onload = () => {
      console.log("Stylesheet do componente carregado. Aplicando estilos dinâmicos...");
      const todosCamposNota = this.shadowRoot.querySelectorAll('.lable-nota');

      aulasDia.forEach((aula, index) => {
        const campoNotaAtual = todosCamposNota[index];
        console.log('Aula:', aula.disciplina, ' - Nota:', aula.nota);
        if (campoNotaAtual) {
          aula.nota < 6 ?
            campoNotaAtual.style.backgroundColor = 'red' :
            aula.nota >= 6 && aula.nota < 8 ?
              campoNotaAtual.style.backgroundColor = 'orange' :
              campoNotaAtual.style.backgroundColor = 'green';
        }
      });
    }

  }
}

customElements.define('aulas-component', AulasComponent);  