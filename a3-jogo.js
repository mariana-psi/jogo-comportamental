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
  perfil: "", // "NT" ou "ND"
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
    const perfis = ["NT", "ND"];
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

  faseSituacao.innerHTML = "";
  faseAlternativas.innerHTML = "";
  faseFeedback.style.display = "none";
  faseFinal.style.display = "none";
  faseSituacao.style.display = "block";
  faseAlternativas.style.display = "block";

  let listaFases;
  if (gameState.perfil === "NT") listaFases = fasesNT;
  else if (gameState.perfil === "ND") listaFases = fasesND;
  else listaFases = fasesNT; // fallback

  if (gameState.faseAtual >= listaFases.length) {
    finalizarJogo();
    return;
  }

  const fase = listaFases[gameState.faseAtual];
  const nomeCrianca = gameState.crianca.nome || "A criança";

  // Aplica expressão inicial
  if (fase.expressaoInicial && !modoDebug) {
    trocarParaExpressao(fase.expressaoInicial);
  }

  faseSituacao.innerHTML = `<p>${fase.situacao.replace(/{{NOME}}/g, nomeCrianca)}</p>`;

  fase.alternativas.forEach((alt, index) => {
    const btn = document.createElement("button");
    btn.textContent = alt.texto.replace(/{{NOME}}/g, nomeCrianca);
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
  else listaFases = fasesNT;

  const fase = listaFases[gameState.faseAtual];
  const alternativa = fase.alternativas[alternativaIndex];

  for (let key in alternativa.efeitos) {
    if (gameState.metricas.hasOwnProperty(key)) {
      gameState.metricas[key] += alternativa.efeitos[key];
    }
  }

  saveGameState();
  atualizarInfoCrianca();

  // Expressão personalizada no feedback
  if (alternativa.expressaoFeedback && !modoDebug) {
    trocarParaExpressao(alternativa.expressaoFeedback);
  }

  const faseSituacao = document.getElementById("fase-situacao");
  const faseAlternativas = document.getElementById("fase-alternativas");
  const faseFeedback = document.getElementById("fase-feedback");
  const faseFinal = document.getElementById("fase-final");
  const faseBotoes = document.getElementById("fase-botoes");

  faseSituacao.style.display = "none";
  faseAlternativas.style.display = "none";
  faseFeedback.style.display = "block";
  faseFinal.style.display = "none";

  const nomeCrianca = gameState.crianca.nome || "A criança";
  faseFeedback.innerHTML = `<p>Feedback: ${alternativa.feedback.replace(/{{NOME}}/g, nomeCrianca)}</p>`;

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

  const nomeCrianca = gameState.crianca.nome || "A criança";
  const { aprendizado, vinculo, estresse, autonomia } = gameState.metricas;

  // Converter atributos para escala -12 a +12
  const A = aprendizado * 2;
  const V = vinculo * 2;
  const E = estresse * 2;
  const AU = autonomia * 2;

  // Seleção do final com base nas prioridades
  let finalEscolhido = null;

  if (V <= -6 && AU <= -7 && E >= 8) {
    finalEscolhido = {
      titulo: "Silêncio aprendido",
      expressao: "triste",
      texto: `“${nomeCrianca} aprendeu que expressar sentimentos pode ser perigoso.\nAs interações foram marcadas por ordens, punições ou ausências. A confiança foi abalada, e a autonomia, sufocada.\nÉ possível que ${nomeCrianca} obedeça mais — mas à custa da espontaneidade e da alegria.\nToda criança merece crescer em um ambiente onde ser quem se é não seja um risco.\nAinda é tempo de recomeçar, se o afeto for a base.”\nO maior erro talvez não tenha sido a rigidez, mas a tentativa de ajustar a infância a uma forma que ela nunca pediu para ter. Crianças são e merecem ser crianças.`
    };
  } else if (A >= 7 && E >= 8 && V <= -5) {
    finalEscolhido = {
      titulo: "Obediência com estresse",
      expressao: "neutro",
      texto: `“${nomeCrianca} aprendeu a obedecer, mas com medo.\nSuas escolhas foram guiadas por coerção ou pressão emocional, e isso deixou marcas invisíveis.\nTalvez ${nomeCrianca} pareça mais ‘calme’ ou ‘ajustade’, mas, por dentro, há tensão, frustração e silêncio.\nAprender por medo pode até funcionar por fora — mas deixa feridas por dentro.\nHá tempo para reconstruir — com mais empatia e menos exigência.”\nA dor que ficou talvez não tenha sido por falta de amor — mas por não enxergar que não existe um jeito único e “certo” de ser criança.`
    };
  } else if (V >= 8 && AU >= 7 && E <= -5) {
    finalEscolhido = {
      titulo: "Crescimento com raízes",
      expressao: "feliz",
      texto: `“${nomeCrianca} está crescendo se sentindo respeitade, ouvide e seguro para tomar decisões. A relação entre vocês é baseada na confiança e no diálogo.\nNas pequenas rotinas do dia, ${nomeCrianca} aprendeu que pode ser quem é — sem medo. E você aprendeu que cuidar é, antes de tudo, escutar. Esse é o início de uma jornada saudável, rica em trocas reais.”\nVocê escolheu cuidar com respeito, escuta e afeto — exatamente o que toda criança merece, seja qual for seu jeito de existir no mundo.`
    };
  } else if (AU >= 8 && A <= -2 && V >= -2 && V <= 4 && E <= -2) {
    finalEscolhido = {
      titulo: "Cuidado permissivo, sem norte",
      expressao: "neutro",
      texto: `“${nomeCrianca} está crescendo com liberdade, mas sentindo falta de apoio claro para compreender limites e responsabilidades.\nA relação é carinhosa, mas às vezes sem direção. Sem apoio claro, ${nomeCrianca} pode se sentir perdide mesmo ao seu lado.\nLiberdade não é o oposto de cuidado — e sim parte de um equilíbrio.\nQue tal ensinar com afeto e direção, sem abrir mão da escuta?”\nDar liberdade não é deixar solto — é caminhar ao lado. Mesmo quem voa precisa saber onde pousar.`
    };
  } else if (A >= 6 && V < 5 && AU <= 0 && E >= -2 && E <= 4) {
    finalEscolhido = {
      titulo: "Cuidado com condições",
      expressao: "feliz",
      texto: `“${nomeCrianca} aprendeu regras importantes, mas talvez sem compreender totalmente o porquê.\nAs interações foram funcionais, mas faltou espaço para escolher, expressar e errar com acolhimento. O cuidado foi cheio de boas intenções, mas talvez guiado mais por metas do que por escuta.\nHá vínculo, mas ele pode ser frágil. O futuro depende da sua disposição em abrir mais espaço para o afeto espontâneo e a escuta ativa.”\nÀs vezes, cuidar demais de como a criança deve ser nos impede de perceber quem ela já está sendo.`
    };
  }

  // Fallback se nenhum final encaixar
  if (!finalEscolhido) {
    finalEscolhido = {
      titulo: "Final indefinido",
      expressao: "neutro",
      texto: "Não foi possível determinar um final claro. Isso pode acontecer se os valores estiverem muito próximos ou inconsistentes. Reveja as interações e tente novamente com mais intenção."
    };
  }

  // Mostra expressão facial final
  if (!modoDebug) {
  trocarParaExpressao(finalEscolhido.expressao);
}


  // Renderiza feedback final
  const resumoEl = document.createElement("div");
  resumoEl.innerHTML = `
    <h3>${finalEscolhido.titulo}</h3>
    <p>${finalEscolhido.texto.replace(/{{NOME}}/g, nomeCrianca)}</p>
    <hr>
    <p><strong>Pontuação:</strong><br>
    🧠 ${A} | ❤️ ${V} | 🌪️ ${E} | 🌀 ${AU}</p>
  `;
  faseContainer.appendChild(resumoEl);

  // Botão reiniciar
  const faseBotoes = document.createElement("div");
  faseBotoes.id = "fase-botoes";
  faseBotoes.className = "fase-botoes";

  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "Reiniciar Jogo";
  btnReiniciar.className = "botao-fase";
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
// ========================
// 12. trocar expressão facial
// ========================

function trocarParaExpressao(nome) {
  const expressoes = ['raiva', 'birra', 'medo', 'triste', 'feliz', 'nojo', 'neutro'];

  expressoes.forEach(exp => {
    const el = document.getElementById('rosto-' + exp);
    if (el) el.style.display = 'none';
  });

  const elNova = document.getElementById('rosto-' + nome);
  if (elNova) elNova.style.display = 'block';
}
