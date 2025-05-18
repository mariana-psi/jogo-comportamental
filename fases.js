// Fases para perfil Neurotípico
const fasesNT = [
  {
    situacao: "{{NOME}} (3 anos) está com sono, mas se recusa a dormir e começa a correr pela casa.",
    alternativas: [
      {
        texto: "Gritar com ela e dizer que, se não deitar, não terá TV amanhã.",
        efeitos: { aprendizado: 1, vinculo: -2, estresse: 2, autonomia: -1 },
        feedback: "Funciona a curto prazo, mas reforça obediência por medo."
      },
      {
        texto: "Ignorar e esperar que ela canse.",
        efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: 0 },
        feedback: "Pode funcionar eventualmente, mas ignora necessidades físicas e emocionais."
      },
      {
        texto: "Criar um ritual divertido de dormir com histórias e canção.",
        efeitos: { aprendizado: 2, vinculo: 2, estresse: -1, autonomia: 2 },
        feedback: "Ajuda a ensinar o comportamento desejado sem coercitividade."
      }
    ]
  }
];

// Fases para perfil Autista
const fasesND = [
  {
    situacao: "{{NOME}} (3 anos, autista) está com sono, mas se recusa a dormir e corre em padrão repetitivo.",
    alternativas: [
      {
        texto: "Tentar forçar fisicamente ela a deitar.",
        efeitos: { aprendizado: -1, vinculo: -2, estresse: 3, autonomia: -2 },
        feedback: "Pode gerar trauma e resistência ainda maior."
      },
      {
        texto: "Criar um ambiente sensorialmente confortável e sugerir dormir com uma música suave.",
        efeitos: { aprendizado: 2, vinculo: 2, estresse: -1, autonomia: 1 },
        feedback: "Acomoda suas necessidades sensoriais respeitando seu ritmo."
      },
      {
        texto: "Ignorar e esperar ela se cansar.",
        efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: 0 },
        feedback: "Pode funcionar, mas não ensina autorregulação."
      }
    ]
  }
];

// Fases para perfil Traços de Autismo
const fasesTA = [
  {
    situacao: "{{NOME}} (3 anos, TDAH) está com sono, mas está hiperativo e disperso.",
    alternativas: [
      {
        texto: "Mandar deitar agora e ficar bravo se não obedecer.",
        efeitos: { aprendizado: 0, vinculo: -2, estresse: 2, autonomia: -2 },
        feedback: "Muitas crianças com TDAH reagem mal à imposição direta sob estresse."
      },
      {
        texto: "Fazer um jogo de 'desacelerar' até a cama, com desafios divertidos.",
        efeitos: { aprendizado: 2, vinculo: 2, estresse: -1, autonomia: 2 },
        feedback: "Ajuda a transição com humor e conexão emocional."
      },
      {
        texto: "Deixar ele pulando até cansar e dormir onde cair.",
        efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: 0 },
        feedback: "Pode aumentar desorganização e não ensinar habilidades de transição."
      }
    ]
  }
];
