const modoDebug = true; // Coloque true para ativar escolha manual de perfil e de expressões faciais

// ========================
// 1. Configurações Iniciais
// ========================

document.addEventListener('DOMContentLoaded', () => {
  iniciarMontagemPersonagem();

  if (modoDebug) {
    const debugContainer = document.createElement("div");
    debugContainer.innerHTML = `
      <label for="select-perfil-debug">Escolher perfil:</label>
      <select id="select-perfil-debug">
        <option value="NT">Neurotípica</option>
        <option value="ND">Autista</option>
        <option value="TA">Traços de Autismo</option>
      </select>
      <br><br>
      <label for="select-expressao-debug">Escolher expressão facial:</label>
      <select id="select-expressao-debug">
        <option value="neutro">Neutro</option>
        <option value="feliz">Feliz</option>
        <option value="triste">Triste</option>
        <option value="birra">Birra</option>
        <option value="raiva">Raiva</option>
        <option value="medo">Medo</option>
        <option value="nojo">Nojo</option>
      </select>
    `;
    document.getElementById("criador-personagem").prepend(debugContainer);

    // Adicionar listener para expressão manual
    const selectExpressao = document.getElementById("select-expressao-debug");
    selectExpressao.addEventListener("change", (e) => {
      const expressaoSelecionada = e.target.value;
      const expressoes = ['raiva', 'birra', 'medo', 'triste', 'feliz', 'nojo', 'neutro'];

      expressoes.forEach(nome => {
        const el = document.getElementById('rosto-' + nome);
        if (el) el.style.display = 'none';
      });

      const elNova = document.getElementById('rosto-' + expressaoSelecionada);
      if (elNova) elNova.style.display = 'block';
    });
  }
});

// ========================
// 2. Estado do jogo
// ========================

const gameState = {
  crianca: {},
  perfil: "", // "NT", "ND" ou "TA"
  faseAtual: 0,
  metricas: {
    aprendizado: 0,
    vinculo: 0,
    estresse: 0,
    autonomia: 0
  }
};

// ========================
// 3. Inicialização do boneco
// ========================

function iniciarMontagemPersonagem() {
  const cabelos = ['hair-liso', 'hair-onda', 'hair-cacho', 'hair-crespo'];
  const expressoes = ['raiva', 'birra', 'medo', 'triste', 'feliz', 'nojo', 'neutro'];

  cabelos.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  expressoes.forEach(nome => {
    const el = document.getElementById('rosto-' + nome);
    if (el) el.style.display = (nome === 'neutro') ? 'block' : 'none';
  });

  const nomeInput = document.getElementById('input-nome');
  const peleSelect = document.getElementById('select-pele');
  const cabeloTipo = document.getElementById('select-cabelo-tipo');
  const cabeloCor = document.getElementById('select-cabelo-cor');
  const blusaCor = document.getElementById('select-cor-blusa');
  const calcaCor = document.getElementById('select-cor-calca');

  const corInicial = getCorPele(peleSelect.value);
  document.querySelectorAll('.pele-cor').forEach(el => {
    el.setAttribute('fill', corInicial);
  });
  document.querySelectorAll('.cor-cabelo').forEach(el => {
    el.setAttribute('fill', cabeloCor.value);
  });
  document.querySelectorAll('.cor-olho').forEach(el => {
    el.setAttribute('fill', "white");
  });
  document.querySelectorAll('.cor-roupa-1').forEach(el => {
    el.setAttribute('fill', blusaCor.value);
  });
  document.querySelectorAll('.cor-roupa-2').forEach(el => {
    el.setAttribute('fill', calcaCor.value);
  });

  // Listeners
  peleSelect.addEventListener('change', () => {
    const cor = getCorPele(peleSelect.value);
    document.querySelectorAll('.pele-cor').forEach(el => {
      el.setAttribute('fill', cor);
    });
  });

  cabeloTipo.addEventListener('change', () => {
    cabelos.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = (id === cabeloTipo.value) ? 'block' : 'none';
    });
  });

  cabeloCor.addEventListener('change', () => {
    document.querySelectorAll('.cor-cabelo').forEach(el => {
      el.setAttribute('fill', cabeloCor.value);
    });
  });

  blusaCor.addEventListener('change', () => {
    document.querySelectorAll('.cor-roupa-1').forEach(el => {
      el.setAttribute('fill', blusaCor.value);
    });
  });

  calcaCor.addEventListener('change', () => {
    document.querySelectorAll('.cor-roupa-2').forEach(el => {
      el.setAttribute('fill', calcaCor.value);
    });
  });
}

// ========================
// 4. Funções auxiliares
// ========================

function getCorPele(nome) {
  const cores = {
    branco: "#f2d6cb",
    pardo1: "#f7dfc6",
    pardo2: "#d9b189",
    pardo3: "#a47245",
    negro: "#8d5524",
    cinza: "#cccccc"
  };
  return cores[nome] || '#ccc';
}

function trocarExpressaoFacial() {
  const expressoes = ['raiva', 'birra', 'medo', 'triste', 'feliz', 'nojo', 'neutro'];

  expressoes.forEach(nome => {
    const el = document.getElementById('rosto-' + nome);
    if (el) el.style.display = 'none';
  });

  const { vinculo, estresse } = gameState.metricas;

  let novaExpressao = 'neutro';
  if (estresse >= 3 && vinculo <= -2) {
    novaExpressao = 'raiva';
  } else if (estresse >= 2 && vinculo <= -1) {
    novaExpressao = 'medo';
  } else if (estresse >= 2) {
    novaExpressao = 'birra';
  } else if (vinculo < 0 && estresse > 0) {
    novaExpressao = 'triste';
  } else if (vinculo > 1 && estresse <= 0) {
    novaExpressao = 'feliz';
  }

  const elNova = document.getElementById('rosto-' + novaExpressao);
  if (elNova) elNova.style.display = 'block';
}

function saveGameState() {
  localStorage.setItem("a3JogoState", JSON.stringify(gameState));
}

// ========================
// 5. Iniciar o Jogo
// ========================

function definirPerfil() {
  if (modoDebug) {
    const select = document.getElementById("select-perfil-debug");
    gameState.perfil = select.value;
  } else {
    const perfis = ["NT", "ND", "TA"];
    const indice = Math.floor(Math.random() * perfis.length);
    gameState.perfil = perfis[indice];
  }
}

function iniciarJogo() {
  const nome = document.getElementById("input-nome").value.trim();
  const pele = document.getElementById("select-pele").value;
  const cabeloTipo = document.getElementById("select-cabelo-tipo").value;
  const cabeloCor = document.getElementById("select-cabelo-cor").value;
  const blusaCor = document.getElementById("select-cor-blusa").value;
  const calcaCor = document.getElementById("select-cor-calca").value;

  if (!nome) {
    alert("Por favor, informe o nome da criança.");
    return;
  }

  definirPerfil();

  gameState.crianca = { nome, pele, cabeloTipo, cabeloCor, blusaCor, calcaCor };
  gameState.metricas = { aprendizado: 0, vinculo: 0, estresse: 0, autonomia: 0 };
  gameState.faseAtual = 0;

  saveGameState();
  mostrarFase();
  atualizarInfoCrianca();

  document.getElementById("criador-personagem").style.display = "none";
  document.getElementById("fase-jogo").style.display = "block";
}

document.getElementById("btn-iniciar-jogo").addEventListener("click", iniciarJogo);

// ========================
// 6. Mostrar Fase
// ========================

function mostrarFase() {
  const faseJogo = document.getElementById("fase-jogo");
  const faseSituacao = document.getElementById("fase-situacao");
  const faseAlternativas = document.getElementById("fase-alternativas");
  const faseFeedback = document.getElementById("fase-feedback");
  const faseFinal = document.getElementById("fase-final");

  // Limpa tudo e garante o que deve estar visível
  faseSituacao.innerHTML = "";
  faseAlternativas.innerHTML = "";
  faseFeedback.style.display = "none";
  faseFinal.style.display = "none";
  faseSituacao.style.display = "block";
  faseAlternativas.style.display = "block";

  let listaFases;
  if (gameState.perfil === "NT") listaFases = fasesNT;
  else if (gameState.perfil === "ND") listaFases = fasesND;
  else if (gameState.perfil === "TA") listaFases = fasesTA;
  else listaFases = fasesNT; // fallback

  if (gameState.faseAtual >= listaFases.length) {
    finalizarJogo();
    return;
  }

  const fase = listaFases[gameState.faseAtual];
  const nomeCrianca = gameState.crianca.nome || "A criança";

  // Mostra a situação
  faseSituacao.innerHTML = `<p>${fase.situacao.replace(/{{NOME}}/g, nomeCrianca)}</p>`;

  // Cria os botões de alternativas
  fase.alternativas.forEach((alt, index) => {
    const btn = document.createElement("button");
    btn.textContent = alt.texto;
    btn.className = "botao-fase";
    btn.addEventListener("click", () => processarResposta(index));
    faseAlternativas.appendChild(btn);
  });
}

// ========================
// 7. Processar Resposta
// ========================

function processarResposta(alternativaIndex) {
  let listaFases;
  if (gameState.perfil === "NT") listaFases = fasesNT;
  else if (gameState.perfil === "ND") listaFases = fasesND;
  else if (gameState.perfil === "TA") listaFases = fasesTA;
  else listaFases = fasesNT;

  const fase = listaFases[gameState.faseAtual];
  const alternativa = fase.alternativas[alternativaIndex];

  for (let key in alternativa.efeitos) {
    if (gameState.metricas.hasOwnProperty(key)) {
      gameState.metricas[key] += alternativa.efeitos[key];
    }
  }

  saveGameState();
  trocarExpressaoFacial();
  atualizarInfoCrianca();

  const faseSituacao = document.getElementById("fase-situacao");
  const faseAlternativas = document.getElementById("fase-alternativas");
  const faseFeedback = document.getElementById("fase-feedback");
  const faseFinal = document.getElementById("fase-final");
  const faseBotoes = document.getElementById("fase-botoes");

  // Atualiza a interface
  faseSituacao.style.display = "none";
  faseAlternativas.style.display = "none";
  faseFeedback.style.display = "block";
  faseFinal.style.display = "none";

  faseFeedback.innerHTML = `<p>Feedback: ${alternativa.feedback}</p>`;

  // Limpa e adiciona botão
  faseBotoes.innerHTML = "";
  const btnProxima = document.createElement("button");
  btnProxima.textContent = "Próxima Fase";
  btnProxima.className = "botao-fase";
  btnProxima.id = "btn-proxima-fase";
  btnProxima.addEventListener("click", () => {
    gameState.faseAtual++;
    saveGameState();
    mostrarFase();
  });
  faseBotoes.appendChild(btnProxima);
}

// ========================
// 8. Finalizar Jogo
// ========================

function finalizarJogo() {
  const faseContainer = document.getElementById("fase-jogo");
  faseContainer.innerHTML = "";

  const resumoEl = document.createElement("div");
  resumoEl.innerHTML = `
    <h3>Avaliação Final</h3>
    <p>Aprendizado: ${gameState.metricas.aprendizado}</p>
    <p>Vínculo: ${gameState.metricas.vinculo}</p>
    <p>Estresse: ${gameState.metricas.estresse}</p>
    <p>Autonomia: ${gameState.metricas.autonomia}</p>
  `;
  faseContainer.appendChild(resumoEl);

  const feedbackTeorico = document.createElement("p");
  feedbackTeorico.textContent = "Feedback teórico: Revise as estratégias escolhidas e reflita sobre os efeitos a longo prazo.";
  faseContainer.appendChild(feedbackTeorico);

  // Adicionar botão "Reiniciar Jogo"
  const faseBotoes = document.createElement("div");
  faseBotoes.id = "fase-botoes";
  faseBotoes.className = "fase-botoes"; // se quiser estilizar depois

  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "Reiniciar Jogo";
  btnReiniciar.className = "botao-fase"; // mesmo estilo dos outros
  btnReiniciar.addEventListener("click", reiniciarJogo);

  faseBotoes.appendChild(btnReiniciar);
  faseContainer.appendChild(faseBotoes);
}

// ========================
// 9. Atualizar Info da Criança
// ========================

function atualizarInfoCrianca() {
  const el = document.getElementById("info-crianca");
  const { nome } = gameState.crianca;
  const { aprendizado, vinculo, estresse, autonomia } = gameState.metricas;
  const perfil = gameState.perfil;

  let perfilTexto = "";
  if (perfil === "ND") {
    perfilTexto = "<p>(autista)</p>";
  }

  el.innerHTML = `
    <h1>${nome}</h1>
    ${perfilTexto}
    <p>🧠 ${aprendizado} | ❤️ ${vinculo} | 🌪️ ${estresse} | 🌀 ${autonomia}</p>
  `;
}

// ========================
// 10. Criar botão de reiniciar
// ========================

function reiniciarJogo() {
  window.location.reload();
}

// ========================
// 11. Abrir/fechar legenda no mobile
// ========================

function toggleLegenda() {
  const legenda = document.querySelector('.a3-jogo-legenda');
  if (legenda.style.display === 'block') {
    legenda.style.display = 'none';
  } else {
    legenda.style.display = 'block';
  }
}