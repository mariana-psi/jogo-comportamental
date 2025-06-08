// Fases para perfil Autista
const fasesND = [
// autista1  
  {
situacao: "{{NOME}} está concentrade brincando com carrinhos — é sua atividade favorita. Você precisa convidar {{NOME}} para participar da roda de música na escola.",
expressaoInicial: "neutro",
alternativas: [
{
texto: "Você tira os carrinhos e diz: “Depois que for para a roda de música e voltar, pode brincar de novo.”",
efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Essa escolha usa o brinquedo favorito como forma de convencer a criança a obedecer. Isso segue a lógica da ABA tradicional, que muitas vezes usa reforços para conseguir comportamentos desejados. Mas é importante lembrar que esses objetos não são só brinquedos — eles ajudam {{NOME}} a se acalmar e se organizar. Tirar esse recurso pode causar estresse e desrespeitar o jeito único da criança de lidar com o mundo.",
expressaoFeedback: "triste"
},
{
texto: "Você permite que {{NOME}} continue com os carrinhos e diz: “Quer levar um carrinho para a roda de música? Assim você participa com ele.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa escolha respeita a necessidade de {{NOME}} e propõe um jeito de integrar o interesse da criança à atividade escolar. É uma alternativa mais acolhedora e sensível. Quando você reconhece o que ajuda a criança a se sentir segura, ela tende a confiar mais e participar com mais tranquilidade — sem sentir que está sendo forçada.",
expressaoFeedback: "neutro"
},
{
texto: "Você tira os carrinhos à força e leva {{NOME}} até a roda de música.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Essa atitude usa a força para obrigar a criança a fazer o que você quer. Isso pode causar muito estresse e até medo. Crianças pequenas — especialmente as neurodivergentes — precisam se sentir respeitadas para se desenvolver bem. Obrigar uma criança a largar o que a acalma pode gerar efeitos negativos duradouros.",
expressaoFeedback: "raiva"
},
{
texto: "Você se aproxima e pergunta: “Você prefere continuar brincando agora ou ir para a roda de música? Podemos fazer as duas coisas, uma depois da outra.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa opção convida {{NOME}} a participar, mas sem pressão. Dá escolhas reais e mostra respeito pelo seu tempo e interesse. Esse é um exemplo de disciplina positiva, que combina empatia com firmeza. Ao fazer isso, você ajuda a criança a desenvolver autonomia e segurança emocional.",
expressaoFeedback: "feliz"
},
{
texto: "Você decide não intervir. Deixa {{NOME}} brincando e não fala nada sobre a roda de música.",
efeitos: { aprendizado: 0, vinculo: 0, estresse: -1, autonomia: -1 },
feedback: "Deixar a criança totalmente sozinha pode parecer respeitoso, mas às vezes pode ser omissão. Crianças precisam de orientação e apoio para aprender a fazer transições. Ignorar essa situação pode acabar dificultando a socialização e o aprendizado.",
expressaoFeedback: "neutro"
}
]
  },
// autista2 
  {
situacao: "{{NOME}} está num lugar público balançando as mãos e fazendo sons repetitivos. Você percebe que {{NOME}} está calmo e se sentindo bem com esse movimento. Algumas pessoas observam com estranhamento e um familiar comenta: “Será que não dá pra {{NOME}} parar com isso?”",
expressaoInicial: "neutro",
alternativas: [
{
texto: "Você pede para {{NOME}} parar: “As pessoas vão ficar olhando… Não é legal.”",
efeitos: { aprendizado: 0, vinculo: 0, estresse: 1, autonomia: -1 },
feedback: "Pedir para parar só porque outras pessoas estão olhando ensina que o conforto alheio é mais importante do que o bem-estar da criança. {{NOME}} está apenas se regulando — não está fazendo nada errado. Quando dizemos que algo natural precisa ser escondido, podemos causar vergonha, insegurança e afastamento.",
expressaoFeedback: "raiva"
},
{
texto: "Você finge que não está vendo o movimento, para não “reforçar”.",
efeitos: { aprendizado: 0, vinculo: 0, estresse: 0, autonomia: -1 },
feedback: "Ignorar esse comportamento como se fosse algo errado é um erro. Movimentos como esse — chamados de stims — são uma forma legítima de a criança se acalmar ou se organizar. Tratar isso com silêncio pode fazer {{NOME}} se sentir invisível ou incompreendide. É importante acolher, não esconder.",
expressaoFeedback: "neutro"
},
{
texto: "Você oferece carrinhos, mas só se {{NOME}} parar com os movimentos por alguns minutos.",
efeitos: { aprendizado: -1, vinculo: 1, estresse: -1, autonomia: -1 },
feedback: "Trocar o movimento por um “prêmio” parece inofensivo, mas passa a ideia de que {{NOME}} só será valorizade se agir de outro jeito. Mesmo sem intenção, isso reforça a ideia de que {{NOME}} precisa mudar para agradar os outros. O cuidado verdadeiro não tenta apagar quem a criança é.",
expressaoFeedback: "neutro"
},
{
texto: "Você responde ao familiar: “Esse é o jeito de {{NOME}} se sentir confortável. Está tudo bem.”",
efeitos: { aprendizado: 1, vinculo: 0, estresse: -1, autonomia: 1 },
feedback: "Essa é uma atitude que protege a criança e educa quem está ao redor. Em vez de tentar mudar {{NOME}}, você ajuda as pessoas a entender que cada um tem seu jeito de se expressar. Isso mostra respeito e também fortalece a relação de confiança entre vocês.",
expressaoFeedback: "neutro"
},
{
texto: "Você se aproxima e pergunta: “Isso está te ajudando agora? Quer me mostrar como faz?”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Aqui você não só respeita o que {{NOME}} está fazendo, como também demonstra interesse genuíno. Quando você pergunta com carinho, abre espaço para conexão. Isso mostra que {{NOME}} pode ser quem é — e que você quer aprender com elx. Esse tipo de gesto fortalece o vínculo e ajuda a construir um mundo mais acolhedor.",
expressaoFeedback: "neutro"
}
]
  },
// autista3
  {
situacao: "{{NOME}} tem sensibilidade sensorial e não gosta de contato físico.",
expressaoInicial: "neutro",
alternativas: [
{
texto: "Você tenta abraçar {{NOME}}, mesmo sem consentimento.",
efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Forçar um contato físico que a criança não quer pode parecer carinho, mas é uma forma de desrespeito. Mesmo com boa intenção, isso pode causar estresse e desconforto. Crianças neurodivergentes costumam ter formas diferentes de sentir o toque — e isso deve ser respeitado. Quando forçamos esse tipo de contato, reforçamos a ideia errada de que elas devem se adaptar a qualquer custo, o que não é saudável nem justo.",
expressaoFeedback: "birra"
},
{
texto: "Você grita: “Você não pode agir assim com as pessoas!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Gritar com a criança pode gerar medo e afastamento. Pode até mudar o comportamento no momento, mas cria insegurança e não ensina nada útil. O grito passa a mensagem de que há apenas uma forma certa de interagir — o que desvaloriza a forma singular da criança existir. Isso pode reforçar vergonha ou isolamento.",
expressaoFeedback: "birra"
},
{
texto: "Você para de insistir e deixa que {{NOME}} decida se quer contato mais tarde.",
efeitos: { aprendizado: 1, vinculo: 1, estresse: 0, autonomia: 1 },
feedback: "Essa é uma atitude sensível e respeitosa. Permitir que a criança decida se quer ou não contato mostra que você respeita seus limites. Isso ajuda {{NOME}} a confiar em você e fortalece a relação. É uma forma de acolher a diferença — sem forçar, sem cobrar.",
expressaoFeedback: "neutro"
},
{
texto: "Você diz que, se aceitar o contato, poderá comer sua comida favorita depois.",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Oferecer comida como troca por carinho pode parecer uma solução, mas é problemático. Isso transforma um gesto de afeto em uma negociação. A criança pode acabar aceitando por medo de perder algo que gosta, não porque se sente segura. Isso não ajuda a construir confiança verdadeira — apenas obediência.",
expressaoFeedback: "neutro"
},
{
texto: "Você pergunta se existe algum tipo de contato que seja confortável para {{NOME}}.",
efeitos: { aprendizado: 2, vinculo: 1, estresse: -1, autonomia: 2 },
feedback: "Essa é a melhor opção. Ao perguntar e escutar, você mostra que respeita o corpo e o tempo da criança. Assim, {{NOME}} pode se expressar com segurança e você aprende como agir de forma respeitosa. Esse tipo de conversa ensina muito mais do que qualquer regra: ensina empatia e confiança.",
expressaoFeedback: "neutro"
}
]
  },
// autista4
  {
situacao: "{{NOME}} passou por consulta médica e foi diagnosticade com deficiência de vitaminas. Isso aconteceu após um longo período comendo apenas os alimentos de que {{NOME}} gosta.",
expressaoInicial: "neutro",
alternativas: [
{
texto: "Você para de oferecer a comida preferida de {{NOME}} e diz que só vai comer se aceitar os novos alimentos.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 2, autonomia: -1 },
feedback: "Forçar uma troca assim pode causar medo e insegurança. Tirar o que a criança gosta para “obrigar” a comer outra coisa é uma forma de punição. Em vez de ensinar, isso pode causar estresse, gerar resistência ainda maior e enfraquecer a confiança entre vocês. O cuidado com a alimentação deve respeitar o tempo e o corpo da criança, e não virar uma briga de poder.",
expressaoFeedback: "birra"
},
{
texto: "Você esconde os novos alimentos na comida sem que {{NOME}} perceba.",
efeitos: { aprendizado: 0, vinculo: 0, estresse: 0, autonomia: -1 },
feedback: "Essa estratégia pode parecer prática, mas ela engana. A criança come sem saber o que está comendo, e isso pode quebrar a confiança. Mais do que resolver o problema do momento, é importante ajudar {{NOME}} a construir autonomia e participar das escolhas. Quando a alimentação é feita com escuta e clareza, ela se torna um aprendizado — não um truque.",
expressaoFeedback: "neutro"
},
{
texto: "Você conversa com {{NOME}}, explica a importância dos novos alimentos e juntos montam um plano de refeições.",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa é uma forma respeitosa de envolver {{NOME}} no processo. Você mostra que se importa, mas sem impor. Quando a criança participa das escolhas, sente que tem voz e aprende com isso. Essa atitude promove vínculo, segurança e responsabilidade, e ainda ajuda a desenvolver hábitos mais saudáveis a longo prazo",
expressaoFeedback: "neutro"
},
{
texto: "Você mistura os alimentos novos com os preferidos de {{NOME}}, aos poucos.",
efeitos: { aprendizado: 1, vinculo: 1, estresse: 0, autonomia: 1 },
feedback: "Essa é uma boa forma de introduzir novidades sem causar estranhamento. Combinar os alimentos preferidos com os novos ajuda a criar confiança e tornar a experiência mais tranquila. Essa transição gradual respeita o corpo e os sentidos da criança, evitando rupturas bruscas e fortalecendo a relação de cuidado.",
expressaoFeedback: "neutro"
},
{
texto: "Você apenas coloca as vitaminas no suco ou na água, sem mudar a alimentação de {{NOME}}.",
efeitos: { aprendizado: -1, vinculo: 0, estresse: 0, autonomia: -1 },
feedback: "Essa solução pode ajudar no início, principalmente se {{NOME}} tiver muita dificuldade com novos alimentos. Mas, sozinha, ela não resolve o problema. É importante ir além da correção médica e trabalhar com {{NOME}} para construir novos hábitos. Incluir a criança nesse processo, mesmo que aos poucos, é essencial para que ela se sinta segura e respeitada.",
expressaoFeedback: "neutro"
}
]
  },
  
// autista5
  {
situacao: "{{NOME}} começa a se morder com força, repetidamente. Você percebe que {{NOME}} está em crise ou se sentindo sobrecarregade. Esse comportamento pode machucar {{NOME}} ou gerar reações difíceis ao redor. Você precisa intervir.",
expressaoInicial: "raiva",
alternativas: [
{
texto: "Você segura com força os braços de {{NOME}} e diz: “Pare com isso agora!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Segurar à força e repreender pode até parar a ação por um momento, mas isso aumenta o medo e o estresse. Muitas vezes, a criança está se mordendo para tentar lidar com algo que está sentindo e não consegue expressar. Forçar o corpo dela assim ignora esse sofrimento. Em vez de ajudar, pode tornar tudo pior e mais doloroso — física e emocionalmente.",
expressaoFeedback: "birra"
},
{
texto: "Você se aproxima com calma e oferece algo seguro para {{NOME}} morder, como um mordedor.",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa é uma atitude acolhedora e segura. Em vez de tentar “parar” o comportamento à força, você oferece uma alternativa que pode ajudar {{NOME}} a se acalmar. Algumas crianças mordem como forma de aliviar o corpo ou as emoções — e dar uma opção segura mostra que você entende isso. Assim, você protege, respeita e ensina ao mesmo tempo.",
expressaoFeedback: "neutro"
},
{
texto: "Você finge que não está vendo. Acha que é só uma tentativa de chamar atenção, então ignora.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 0, autonomia: -1 },
feedback: "Ignorar esse comportamento pode ser perigoso. Quando uma criança se machuca, ela precisa de ajuda — mesmo que não peça com palavras. Às vezes, essa é a única forma que {{NOME}} tem de mostrar que algo está errado. Fingir que não vê passa a mensagem de que ela está sozinha no sofrimento, o que pode aumentar a dor e o medo.",
expressaoFeedback: "raiva"
},
{
texto: "Você grita para tentar parar o comportamento.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "O grito pode assustar e até interromper por um instante. Mas na maioria das vezes, ele piora a situação. Quando uma criança está em crise, ela precisa de segurança — não de mais barulho ou medo. Gritar reforça a ideia de que suas formas de sentir e agir são erradas, o que pode gerar mais sofrimento e afastamento.",
expressaoFeedback: "medo"
},
{
texto: "Você senta perto de {{NOME}}, oferece um abraço apertado e pede para parar.",
efeitos: { aprendizado: 0, vinculo: 1, estresse: 0, autonomia: 0 },
feedback: "Essa atitude pode ajudar — mas só se o contato for algo que {{NOME}} aceita. Algumas crianças se acalmam com um abraço; outras se sentem invadidas. O importante é saber como {{NOME}} gosta de ser acolhide. O abraço pode ser um gesto bonito, mas precisa vir com escuta e respeito, nunca como imposição.",
expressaoFeedback: "neutro"
}
]
  },
  
// autista6 
  {
situacao: "{{NOME}} está no parquinho. De repente, começa a gritar, se joga no chão e chora alto. Não parece haver um motivo claro para isso.",
expressaoInicial: "birra",
alternativas: [
{
texto: "Você ignora totalmente: “É só birra. {{NOME}} vai se acalmar sozinhe.”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: 0 },
feedback: "Ignorar pode parecer uma estratégia para que a criança “aprenda”, mas isso não funciona em todos os casos. Para muitas crianças neurodivergentes, esses momentos não são birras, mas crises reais de estresse. Deixar a criança sozinha nessas horas pode aumentar o sofrimento e enfraquecer a relação de confiança. Em vez de ajudar, isso passa a mensagem de que ela não pode contar com você.",
expressaoFeedback: "birra"
},
{
texto: "Você se abaixa, fala com calma: “Estou aqui. Vamos respirar juntos. O que está te incomodando?”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa atitude oferece apoio verdadeiro. Mesmo que {{NOME}} não consiga explicar o que sente, você está mostrando que está presente e disposto a ajudar. Isso ajuda a criança a se sentir segura e pode, com o tempo, ensinar outras formas de lidar com o que sente. Esse tipo de cuidado fortalece o vínculo e contribui para que a criança aprenda a se regular emocionalmente com apoio — e não sozinha.",
expressaoFeedback: "neutro"
},
{
texto: "Você dá uma bronca: “Para de gritar ou vamos embora!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 2, autonomia: -1 },
feedback: "Gritar ou ameaçar pode até fazer a criança parar no momento, mas por dentro ela pode estar assustada ou frustrada. Esse tipo de resposta ensina que expressar sentimentos é errado, o que pode levar a mais dificuldades no futuro. Em vez de ajudar a entender e lidar com as emoções, a bronca bloqueia a comunicação.",
expressaoFeedback: "birra"
},
{
texto: "Você tenta distrair: “Olha lá o cachorro!”",
efeitos: { aprendizado: 0, vinculo: 0, estresse: -1, autonomia: 0 },
feedback: "Tentar mudar o foco da criança pode funcionar por um instante. Mas, se a crise veio de algo mais profundo — como cansaço, fome ou sobrecarga sensorial — isso não resolve a raiz do problema. Essa abordagem não ensina a criança a lidar com o que sente, e pode dificultar o aprendizado emocional a longo prazo.",
expressaoFeedback: "neutro"
},
{
texto: "Você pega {{NOME}} e vai embora do parquinho sem explicar nada: “Já chega, vamos embora!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -2 },
feedback: "Sair do lugar sem diálogo pode fazer {{NOME}} se sentir ainda pior. A criança pode entender que está sendo punida, sem saber exatamente por quê. Além disso, ela perde a chance de aprender a lidar com situações difíceis com apoio. Esse tipo de resposta pode criar medo de lugares públicos ou da própria expressão emocional.",
expressaoFeedback: "birra"
}
]
  }
];

// Fases para perfil Neurotípico
const fasesNT = [
    // neurotípico1
  {
 situacao: "{{NOME}} começa a chorar e gritar no mercado porque quer um pacote de doces. Você conclui que é uma birra, e precisa decidir o que fazer.",
expressaoInicial: "birra",
alternativas: [
{
texto: "Você ignora a birra completamente e continua fazendo as compras.",
efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: 0 },
feedback: "Ignorar pode parecer uma forma de “ensinar” que birra não funciona, e de fato pode fazer o comportamento diminuir com o tempo. Mas muitas vezes, a birra vem de frustração ou cansaço. Quando você ignora por completo, pode perder a chance de acolher e ensinar formas melhores de lidar com o que sente. A criança não aprende só quando para de chorar — ela aprende com o que você faz com esse momento.",
expressaoFeedback: "neutro"
},
{
texto: "Você se agacha e diz com calma: “Eu sei que você está chateade, mas hoje não vamos comprar doces.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Aqui você mostra firmeza, mas sem perder o carinho. Mesmo dizendo “não”, você reconhece que {{NOME}} está frustrade — e isso ensina muito. Essa é uma forma de ajudar a criança a nomear o que sente e aprender a lidar com isso, sem precisar gritar. É uma atitude respeitosa, que fortalece o vínculo e ensina que limites e carinho podem andar juntos.",
expressaoFeedback: "neutro"
},
{
texto: "Você compra os doces para acabar logo com a birra.",
efeitos: { aprendizado: -1, vinculo: 0, estresse: -1, autonomia: -1 },
feedback: "Dar o doce para fazer {{NOME}} parar ensina que, se chorar o suficiente, vai conseguir o que quer. Isso pode funcionar no momento, mas aumenta a chance de novas birras no futuro. Além disso, a criança perde a chance de aprender que pode lidar com frustrações de outro jeito — e você perde a chance de mostrar que confia na capacidade dela.",
expressaoFeedback: "feliz"
},
{
texto: "Você ameaça: “Se não parar agora, vamos embora do mercado!”",
efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Ameaçar pode funcionar na hora, mas cria um ambiente de medo e tensão. Em vez de ajudar a criança a se acalmar, isso pode deixá-la ainda mais nervosa. Com o tempo, esse tipo de resposta enfraquece a relação de confiança. Educação feita com medo não ensina a lidar com emoções — só ensina a evitar punição.",
expressaoFeedback: "medo"
},
{
texto: "Você chama {{NOME}} para ver algo interessante em outro corredor e segue em frente.",
efeitos: { aprendizado: 0, vinculo: 1, estresse: -1, autonomia: 0 },
feedback: "Mudar o foco pode funcionar às vezes, principalmente com crianças pequenas. Mas se isso for feito sempre, a criança não aprende a entender o que sente nem a lidar com a frustração. Quando evitamos qualquer conflito, perdemos uma chance de ensinar algo importante: que está tudo bem sentir raiva ou tristeza, e que existe um jeito saudável de lidar com isso.",
expressaoFeedback: "feliz"
}
] 
  },
    // neurotípico2
  {
 situacao: "{{NOME}} bateu em um colega na escola. Ninguém viu um motivo claro para isso, e agora você precisa decidir como agir.",
expressaoInicial: "raiva",
alternativas: [
{
texto: "Você coloca {{NOME}} de castigo e diz que não poderá brincar com os amigos por uma semana.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Essa atitude usa a punição como forma de ensinar. Mas tirar a brincadeira por tanto tempo pode deixar a criança triste, frustrada e até com raiva. O castigo não ensina o que fazer no lugar da agressão, e ainda pode atrapalhar a convivência social — que é justamente o que ela precisa aprender a melhorar. O medo e a punição não ajudam a construir empatia.",
expressaoFeedback: "triste"
},
{
texto: "Você bate em {{NOME}} para que aprenda a não bater nos outros.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Responder à agressão com mais agressão nunca ensina de verdade. Mesmo que a criança pare de bater por medo, ela está aprendendo que violência é aceitável — o que pode causar ainda mais confusão e insegurança. Isso também enfraquece o vínculo com você e pode ter consequências sérias na forma como ela se relaciona no futuro.",
expressaoFeedback: "raiva"
},
{
texto: "Você chama {{NOME}} para conversar com calma, pergunta o que aconteceu e explica por que bater não é uma boa solução.",
efeitos: { aprendizado: 2, vinculo: 2, estresse: -2, autonomia: 2 },
feedback: "Essa é uma resposta que ensina de verdade. Ao conversar com {{NOME}}, você ajuda a entender o que causou a agressão e propõe jeitos melhores de lidar com a situação. Quando a criança se sente ouvida e orientada, ela tem mais chance de aprender a controlar os impulsos e resolver conflitos com mais respeito e inteligência emocional.",
expressaoFeedback: "feliz"
},
{
texto: "Você decide não fazer nada, porque “essas coisas acontecem”.",
efeitos: { aprendizado: -1, vinculo: 0, estresse: 0, autonomia: -1 },
feedback: "Ignorar o que aconteceu pode parecer “compreensivo”, mas não ajuda a criança a entender que bater machuca e não resolve problemas. Quando deixamos passar comportamentos assim, perdemos a chance de ensinar empatia, limites e responsabilidade. Crianças precisam de apoio para aprender a se relacionar com respeito.",
expressaoFeedback: "neutro"
},
{
texto: "Você diz com firmeza: “Bater não é uma maneira aceitável de resolver problemas. Da próxima vez, chame um adulto.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa resposta une clareza e respeito. Você mostra que não aceita o comportamento, mas também oferece uma alternativa concreta para a próxima vez. Quando falamos com firmeza e acolhimento, ajudamos a criança a entender que pode errar — mas também pode aprender. Isso fortalece a autonomia e o senso de responsabilidade.",
expressaoFeedback: "neutro"
}
] 
  },
    // neurotípico3
  {
 situacao: "{{NOME}} joga toda a ração do cachorro dentro da vasilha de água. Você precisa decidir como reagir a esse comportamento.",
expressaoInicial: "feliz",
alternativas: [
{
texto: "Você dá uma chinelada forte e grita: “Para com isso!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Bater e gritar pode assustar, mas não ensina. A criança pode até parar no momento, mas o que fica é o medo — não o aprendizado. Esse tipo de reação rompe o vínculo, não constrói consciência, e ainda ensina que, diante de um erro, a resposta certa é a violência. Com o tempo, isso pode aumentar a agressividade e diminuir a confiança da criança em você.",
expressaoFeedback: "triste"
},
{
texto: "Você fala com firmeza, mas com carinho: “A comida é do cachorro. Vamos deixar ele em paz?”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: 0, autonomia: 1 },
feedback: "Essa resposta estabelece um limite claro e respeitoso. Você orienta sem humilhar, e isso ajuda {{NOME}} a entender o que pode ou não fazer. Quando falamos com firmeza e afeto, ensinamos que é possível errar — e aprender com isso — sem precisar machucar ou ser machucado.",
expressaoFeedback: "feliz"
},
{
texto: "Você diz várias vezes: “Não mexe na comida do cachorro… Ele pode te morder…”",
efeitos: { aprendizado: 0, vinculo: 0, estresse: 1, autonomia: 0 },
feedback: "Ameaçar a criança com medo pode fazer com que ela pare por um tempo, mas não ajuda a entender o motivo. Ela aprende a obedecer por medo, não por consciência. Isso enfraquece a confiança e não ensina o que fazer de forma diferente na próxima vez. Educação pelo medo ensina apenas a evitar punições — não a construir respeito.",
expressaoFeedback: "medo"
},
{
texto: "Você finge que não viu, mesmo que {{NOME}} faça isso outras vezes. “Criança faz bagunça mesmo…”",
efeitos: { aprendizado: -1, vinculo: 0, estresse: 0, autonomia: -1 },
feedback: "Ignorar o que aconteceu pode parecer tolerante, mas também pode ser um tipo de abandono educativo. Quando nada é dito, a criança pode entender que está tudo bem fazer isso de novo. Crianças precisam de orientação e limites afetuosos para saber como agir com cuidado — especialmente com animais.",
expressaoFeedback: "feliz"
},
{
texto: "Você mostra a vasilha e diz: “Olha só… Quando a ração cai na água, o cachorro não consegue comer nem beber. Vamos arrumar isso juntes?”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa é uma resposta educativa e respeitosa. Você mostra o efeito da ação, envolve {{NOME}} na solução e ensina empatia — tudo ao mesmo tempo. Essa forma de ensinar ajuda a criança a se responsabilizar sem medo, e ainda fortalece o vínculo entre vocês. Ela aprende porque entendeu — não porque foi punida.",
expressaoFeedback: "feliz"
}
] 
  },
    // neurotípico4
  {
 situacao: "{{NOME}} termina de beber o leite e, tentando ajudar, leva o copo até a pia. No caminho, o copo escorrega da mão e o restinho do leite se espalha no chão.",
expressaoInicial: "medo",
alternativas: [
{
texto: "Você grita: “Olha o que você fez! Não faz nada direito!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Essa é uma reação de raiva, mas não ajuda {{NOME}} a entender o que aconteceu. A criança pode ficar com medo de tentar ajudar de novo. Mesmo sem querer, a bronca forte faz {{NOME}} pensar que errar é inaceitável — e que ajudar é perigoso. Isso enfraquece o vínculo e a vontade de colaborar no futuro.",
expressaoFeedback: "triste"
},
{
texto: "Você bate na mão da criança e diz: “Eu já disse pra não mexer nisso!”",
efeitos: { aprendizado: -2, vinculo: -1, estresse: 2, autonomia: -1 },
feedback: "Bater ensina que o erro merece dor — e não compreensão. {{NOME}} ainda está aprendendo a cuidar e a colaborar, e esse gesto pode provocar medo, insegurança e retraimento. Punições físicas não ensinam o que fazer, apenas deixam marcas emocionais que afastam a criança da confiança.",
expressaoFeedback: "medo"
},
{
texto: "Você diz com calma: “Derramou um pouquinho, né? Vamos limpar juntos — acidentes acontecem.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa resposta ensina empatia e responsabilidade. Ao acolher o acidente como parte do processo de aprender, você mostra a {{NOME}} que errar não é o fim do mundo. E ao limpar junto, ensina com o exemplo — sem punição, sem medo. Isso fortalece o vínculo e a autonomia de forma saudável.",
expressaoFeedback: "feliz"
},
{
texto: "Você não fala nada, limpa tudo sozinho e manda {{NOME}} sair da cozinha.",
efeitos: { aprendizado: 0, vinculo: 0, estresse: 0, autonomia: 0 },
feedback: "Aqui você evita conflito, mas também perde a chance de ensinar. {{NOME}} pode não entender o que aconteceu ou achar que não pode tentar de novo. O silêncio afasta e não ajuda a criança a lidar com o próprio erro — nem a aprender a consertar as coisas com apoio.",
expressaoFeedback: "neutro"
},
{
texto: "Você diz: “Eu sei que você queria ajudar. Quer me contar o que aconteceu?”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa resposta valida a intenção da criança e abre espaço para ela falar. Você mostra que está mais interessado no que {{NOME}} sentiu do que no leite deramado. Assim, fortalece a confiança, o desejo de colaborar e a consciência emocional — sem culpa ou medo.",
expressaoFeedback: "neutro"
}
] 
  },
    // neurotípico5
  {
 situacao: "Está na hora de dormir, mas {{NOME}} insiste que quer continuar brincando. Mesmo depois de você avisar algumas vezes, {{NOME}} diz que não está com sono e não quer ir para a cama.",
expressaoInicial: "feliz",
alternativas: [
{
texto: "Você ameaça: “Se não for dormir agora, amanhã não vai poder brincar com nada!”",
efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Ameaçar tirar algo que a criança gosta pode até funcionar no momento, mas ensina pelo medo. Em vez de entender a importância de descansar, {{NOME}} aprende que precisa obedecer para não perder algo. Isso pode gerar ansiedade, raiva ou resistência, e enfraquecer o vínculo entre vocês. Dormir não deve ser uma punição — deve ser cuidado.",
expressaoFeedback: "medo"
},
{
texto: "Você leva {{NOME}} à força para o quarto, apaga a luz e fecha a porta.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Forçar a criança a dormir sem diálogo pode causar insegurança e medo. Mesmo que pareça resolver a situação, isso não ajuda {{NOME}} a desenvolver autonomia sobre a própria rotina. Além disso, agir com imposição nesse momento vulnerável pode fragilizar o vínculo de confiança e afetar a forma como a criança lida com limites em outras áreas.",
expressaoFeedback: "raiva"
},
{
texto: "Você senta ao lado de {{NOME}}, pergunta como foi o dia e propõe começar uma rotina calma antes de dormir.",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa é uma forma respeitosa e eficiente de lidar com o momento. Você acolhe a energia que a criança ainda tem, oferece escuta e conduz de forma afetiva para a transição. Isso ajuda {{NOME}} a entender que dormir não é punição nem abandono, mas parte de cuidar de si. Essa atitude também modela autorregulação emocional e fortalece a confiança entre vocês.",
expressaoFeedback: "feliz"
},
{
texto: "Você ignora {{NOME}} e espera que durma por exaustão.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Ignorar pode parecer uma forma de não ceder, mas nesse caso deixa {{NOME}} sem orientação emocional. A criança pode entender que precisa enfrentar esse momento sozinha, o que aumenta o estresse e a sensação de abandono. Isso não ensina a lidar com os próprios limites — apenas que não vale a pena pedir ajuda.",
expressaoFeedback: "neutro"
},
{
texto: "Você diz com calma: “Agora é hora de dormir. Amanhã a gente brinca mais. Quer escolher um livro para lermos antes?”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa atitude combina firmeza com acolhimento. Você mantém o limite, mas oferece uma transição afetiva, dando uma escolha simples dentro da estrutura. Isso ajuda {{NOME}} a se sentir respeitade e envolvide, tornando o momento do sono mais previsível e seguro. É uma forma eficaz de estimular autonomia e reduzir conflitos sem recorrer à punição.",
expressaoFeedback: "feliz"
}
] 
  },
    // neurotípico6
  {
situacao: "{{NOME}} derrubou um copo de suco no sofá. Você encontra o copo caído e a mancha molhada, mas {{NOME}} diz ”não fui eu”.",
expressaoInicial: "medo",
alternativas: [
{
texto: "Você grita: “Eu sei que foi você! Se mentir de novo, vai ficar sem televisão por uma semana!”",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 1, autonomia: 1 },
feedback: "Gritar e ameaçar pode fazer {{NOME}} parar de mentir na hora, mas por medo — não porque entendeu o erro. Quando usamos esse tipo de bronca, a criança aprende que errar é perigoso e que é melhor esconder a verdade. Isso atrapalha a confiança entre vocês e faz com que ela tenha mais medo de contar o que sente ou faz.",
expressaoFeedback: "medo"
},
{
texto: "Você diz com firmeza: “Eu vi o copo aqui. Vamos limpar isso juntos, e depois conversamos.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa atitude mostra que você percebeu o erro, mas quer ajudar. Ao convidar {{NOME}} para arrumar junto, você ensina que é possível consertar as coisas sem gritar ou brigar. A criança aprende que pode assumir seus atos sem medo — e que você vai estar ao lado dela para resolver o que for preciso.",
expressaoFeedback: "neutro"
},
{
texto: "Você finge que acredita e não fala mais nada sobre o assunto.",
efeitos: { aprendizado: -1, vinculo: -1, estresse: 0, autonomia: -1 },
feedback: "Ignorar o que aconteceu pode evitar o conflito na hora, mas não ajuda {{NOME}} a aprender. Sem conversar ou mostrar o que houve de errado, a criança pode achar que mentir é uma boa forma de escapar de problemas — ou que ninguém se importa com o que ela faz. Isso enfraquece a relação de confiança.",
expressaoFeedback: "neutro"
},
{
texto: "Você diz: “Você está mentindo, isso é feio. Que vergonha!”",
efeitos: { aprendizado: 0, vinculo: -1, estresse: 1, autonomia: -1 },
feedback: "Falar que a criança deve sentir vergonha por mentir pode machucar mais do que ajudar. Isso pode deixá-la com medo de se abrir com você. Em vez de aprender a falar a verdade, {{NOME}} pode ficar com medo de errar e esconder ainda mais as coisas.",
expressaoFeedback: "triste"
},
{
texto: "Você diz com calma: “Às vezes a gente tem medo de contar a verdade. Mas se foi você, eu posso te ajudar a resolver.”",
efeitos: { aprendizado: 1, vinculo: 1, estresse: -1, autonomia: 1 },
feedback: "Essa resposta acolhe o que está por trás da mentira: o medo de levar bronca. Quando você mostra que está dispostx a ajudar, {{NOME}} se sente segure para contar a verdade. Assim, aprende que errar faz parte e que é possível consertar com apoio — sem precisar esconder o que sente ou faz.",
expressaoFeedback: "feliz"
}
]  
  }
];
