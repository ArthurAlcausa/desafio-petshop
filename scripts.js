document.addEventListener("DOMContentLoaded", () => {
    // Botões e elementos principais
    const novoAgendamentoBtn = document.getElementById("novo-agendamento");
    const modal = document.getElementById("modal");
    const cancelarBtn = document.getElementById("cancelar");
    const form = document.getElementById("agendamento-form");
  
    // Função para configurar botões de remoção
    function configurarBotoesRemover() {
      const botoesRemover = document.querySelectorAll(".remove-btn");
      botoesRemover.forEach((botao) => {
        botao.addEventListener("click", (event) => {
          const item = event.target.parentElement; // O botão é filho do item <li>
          item.remove(); // Remove o item da lista
        });
      });
    }
  
    // Configura os botões de remoção iniciais
    configurarBotoesRemover();
  
    // Função para abrir o modal
    novoAgendamentoBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  
    // Função para fechar o modal
    cancelarBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    // Função para adicionar um novo agendamento
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Captura os dados do formulário
      const nome = document.getElementById("nome").value;
      const pet = document.getElementById("pet").value;
      const horario = document.getElementById("horario").value;
      const servico = document.getElementById("servico").value;
      const periodo = document.getElementById("periodo").value;
  
      // Cria um novo item na agenda
      const novoItem = document.createElement("li");
      novoItem.innerHTML = `
        <span>${horario}</span> ${pet} / ${nome} - ${servico}
        <button class="remove-btn">Remover</button>
      `;
  
      // Adiciona o item no período correto
      const periodoContainer = document.getElementById(periodo).querySelector("ul");
      periodoContainer.appendChild(novoItem);
  
      // Configura o botão "Remover" do novo item
      configurarBotoesRemover();
  
      // Fecha o modal
      modal.classList.add("hidden");
  
      // Limpa o formulário
      form.reset();
    });
  });
  
  