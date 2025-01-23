document.addEventListener("DOMContentLoaded", () => {
  const strategySection = document.querySelector(".strategy");
  const originalHTML = strategySection.innerHTML;

  const adjustLayout = () => {
    if (window.innerWidth <= 768) {
      strategySection.innerHTML = `
       <div class="title">
          Metodologia
          <p>
            Utilizamos uma abordagem estratégica e personalizada para alcançar
            resultados mensuráveis.
          </p>
        </div>
        
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <span class="subtitle">Análise</span>
              <p>Bate papo para entendermos qual a situação e o tipo de relacionamento.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <span class="subtitle">Planejamento</span>
              <p>Com a aprovação da cliente, é criada uma estratégia para modificar o comportamento, baseada na necessidade do caso, de uma forma que possa gerar gatilhos emocionais no ex/atual.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <span class="subtitle">Implementação</span>
              <p>Conforme o avanço do caso, mudaremos as estratégias, caso haja necessidade, respeitando os limites imposto pela cliente.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <span class="subtitle">Monitoramento e Otimização</span>
              <p>Acompanhamento diário do desempenho e ajuste das estratégias para otimizar os resultados.</p>
            </div>
          </div>
        </div>
      `;
    } else {
      strategySection.innerHTML = originalHTML;
    }
  };

  adjustLayout();

  window.addEventListener("resize", adjustLayout);
});
