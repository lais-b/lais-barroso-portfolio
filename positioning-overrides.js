/* 2026-08-17 — Career positioning update
   Marketing & Innovation first; projects as a way of working, not the profession.
   This file is loaded before content.js and patches its global data synchronously
   so script.js renders the updated positioning on the first pass.
*/
(function () {
  "use strict";

  function patchContent(CONTENT) {
    if (!CONTENT || !CONTENT.pt || !CONTENT.en) return CONTENT;
    var pt = CONTENT.pt;
    var en = CONTENT.en;

    Object.assign(pt, {
      "doc.title": "Laís Barroso · Marketing, Estratégia Criativa & IA",
      "doc.description": "Portfólio de Laís Barroso: estratégia de marketing, posicionamento de marca, conteúdo, experiências digitais e criação com inteligência artificial.",
      "hero.headline": "Marketing, Estratégia Criativa & IA",
      "hero.tagline": "Conecto pesquisa, posicionamento e criação para desenvolver marcas, campanhas e experiências digitais.",
      "hero.stamp1": "marketing",
      "hero.stamp2": "creative",
      "hero.stamp3": "digital",
      "hero.stamp4": "AI",
      "stk.check1": "entender mercado e problema",
      "stk.check2": "definir direção e proposta",
      "stk.check3": "lançar, medir e aprender",
      "manifesto.lead": "Gosto de entender uma ideia, encontrar uma direção e construir algo que as pessoas possam ver, usar ou experimentar.",
      "manifesto.p1": "Minha trajetória passou por ciência, análise técnica, operações, dados, marketing e produtos digitais. Essa mistura me ensinou a entrar em problemas ainda pouco estruturados, pesquisar, conectar informações e conversar com áreas diferentes sem perder a visão do todo.",
      "manifesto.p2": "Hoje aplico essa experiência ao marketing e à criação: do posicionamento e da mensagem à construção de conteúdo, sites e experiências digitais. Uso IA para explorar caminhos, prototipar e executar, com atenção à coerência da marca e ao objetivo de cada entrega.",
      "manifesto.level": "Marketing · Estratégia Criativa · Conteúdo · Product Marketing · IA aplicada",
      "work.lead": "Projetos que conectam estratégia e criação: marcas, conteúdo, produtos digitais e aplicações de IA.",
      "path.betpass": "Operações, eventos, processos e automação",
      "path.coi": "Marketing, produto digital e inteligência de mercado",
      "path.personal": "IA, inovação e projetos autorais",
      "exp.coi.role": "Marketing & Growth · Produto Digital e Inteligência de Mercado",
      "how.1.title": "Investigar",
      "how.1.text": "Entendo mercado, público, problema e contexto antes de decidir o que fazer.",
      "how.2.title": "Definir",
      "how.2.text": "Transformo informação e referências em uma direção clara: oportunidade, posicionamento e prioridades.",
      "how.3.title": "Construir",
      "how.3.text": "Tiro a ideia do abstrato e ajudo a transformar em campanha, produto, jornada, experiência ou piloto.",
      "how.4.title": "Lançar & aprender",
      "how.4.text": "Acompanho resposta do mercado, resultados e feedback para ajustar a próxima versão.",
      "skills.p1.title": "Estratégia & Marketing",
      "skills.p2.title": "Criação & Experiência Digital",
      "skills.p3.title": "IA, Dados & Automação",
      "about.p1": "Minha trajetória não foi construída em linha reta, e isso virou uma vantagem: passei pela ciência, por contextos técnicos e regulados, por operações, marketing e produtos digitais. Hoje uso essa visão multidisciplinar para entender oportunidades, conectar áreas e ajudar novas iniciativas a sair do papel.",
      "about.p2": "Fora dos cargos, sou movida por curiosidade, viagens, idiomas, cultura, marcas, experiências e tecnologia — e pela vontade de transformar uma ideia ainda confusa em algo que as pessoas consigam entender, usar ou viver.",
      "footer.tag": "Marketing, Estratégia Criativa & IA"
    });

    Object.assign(en, {
      "doc.title": "Laís Barroso · Marketing, Creative Strategy & AI",
      "doc.description": "Laís Barroso's portfolio: marketing strategy, brand positioning, content, digital experiences and AI-assisted creative work.",
      "hero.headline": "Marketing, Creative Strategy & AI",
      "hero.tagline": "I connect research, positioning and creative work to develop brands, campaigns and digital experiences.",
      "hero.stamp1": "marketing",
      "hero.stamp2": "creative",
      "hero.stamp3": "digital",
      "hero.stamp4": "AI",
      "stk.check1": "understand market + problem",
      "stk.check2": "set direction + proposition",
      "stk.check3": "launch, measure, learn",
      "manifesto.lead": "I like understanding an idea, finding a direction and building something people can see, use or experience.",
      "manifesto.p1": "My path has moved through science, technical analysis, operations, data, marketing and digital products. That mix taught me how to enter loosely defined problems, research them, connect information and work across teams without losing sight of the whole.",
      "manifesto.p2": "Today I apply that experience to marketing and creative work: from positioning and messaging to content, websites and digital experiences. I use AI to explore directions, prototype and execute, keeping brand consistency and the purpose of each deliverable in focus.",
      "manifesto.level": "Marketing · Creative Strategy · Content · Product Marketing · Applied AI",
      "work.lead": "Projects connecting strategy and creative work: brands, content, digital products and AI applications.",
      "path.betpass": "Operations, events, process and automation",
      "path.coi": "Marketing, digital product and market intelligence",
      "path.personal": "AI, innovation and personal projects",
      "exp.coi.role": "Marketing & Growth · Digital Product & Market Intelligence",
      "how.1.title": "Investigate",
      "how.1.text": "I understand the market, audience, problem and context before deciding what to do.",
      "how.2.title": "Define",
      "how.2.text": "I turn research and references into a clear direction: opportunity, positioning and priorities.",
      "how.3.title": "Build",
      "how.3.text": "I turn the abstract idea into a campaign, product, journey, experience or pilot that can be executed.",
      "how.4.title": "Launch & learn",
      "how.4.text": "I follow market response, results and feedback, then use them to improve the next version.",
      "skills.p1.title": "Strategy & Marketing",
      "skills.p2.title": "Creative & Digital Experience",
      "skills.p3.title": "AI, Data & Automation",
      "about.p1": "My path was never linear, and that became useful: I moved through science, technical and regulated environments, operations, marketing and digital products. Today I use that multidisciplinary perspective to understand opportunities, connect teams and help new initiatives get off the ground.",
      "about.p2": "Outside job titles, I run on curiosity, travel, languages, culture, brands, experiences and technology — and on the urge to turn a messy idea into something people can understand, use or experience.",
      "footer.tag": "Marketing, Creative Strategy & AI"
    });
    return CONTENT;
  }

  function patchSkills(skills) {
    if (!Array.isArray(skills)) return skills;
    skills.length = 0;
    skills.push(
{
  "key": "p1",
  "pt": [
    "Posicionamento de marca",
    "Pesquisa de mercado",
    "Proposta de valor",
    "Jornada do cliente",
    "Product Marketing",
    "Planejamento de campanhas"
  ],
  "en": [
    "Brand positioning",
    "Market research",
    "Value proposition",
    "Customer journey",
    "Product Marketing",
    "Campaign planning"
  ]
},
{
  "key": "p2",
  "pt": [
    "Naming",
    "Copywriting",
    "Direção visual",
    "Criação de conteúdo",
    "Landing pages",
    "Prototipação digital"
  ],
  "en": [
    "Naming",
    "Copywriting",
    "Visual direction",
    "Content creation",
    "Landing pages",
    "Digital prototyping"
  ]
},
{
  "key": "p3",
  "pt": [
    "Criação com IA generativa",
    "Programação assistida por IA",
    "Agentes de IA",
    "Automação de fluxos",
    "Google Apps Script",
    "Análise de desempenho"
  ],
  "en": [
    "Generative AI for creative work",
    "AI-assisted coding",
    "AI agents",
    "Workflow automation",
    "Google Apps Script",
    "Performance analysis"
  ]
}
    );
    return skills;
  }

  function patchProjects(projects) {
    if (!Array.isArray(projects)) return projects;
    var byId = {};
    projects.forEach(function (p) { byId[p.id] = p; });

    function setCategory(id, pt, en) {
      if (!byId[id]) return;
      if (byId[id].pt) byId[id].pt.category = pt;
      if (byId[id].en) byId[id].en.category = en;
    }
    setCategory("coi-posicionamento", "Product Marketing · Posicionamento · Inteligência de mercado", "Product Marketing · Positioning · Market intelligence");
    setCategory("coi-mapa", "Lançamento de produto · Product Marketing", "Product launch · Product Marketing");
    setCategory("coi-conteudo", "Campanhas · Conteúdo · Aquisição", "Campaigns · Content · Acquisition");
    setCategory("coi-agentes", "IA aplicada ao Marketing · Inovação", "Applied AI for Marketing · Innovation");
    setCategory("betpass-operacoes", "Operações · Eventos · Transformação", "Operations · Events · Transformation");

    if (!byId["betpass-eventos"]) {
      var eventProject = {
        id: "betpass-eventos",
        year: "2025",
        size: "regular",
        image: "",
        gallery: [],
        tools: ["Planejamento", "Fornecedores", "Logística", "Execução em campo"],
        pt: {
          category: "Eventos · Experiências · Execução de Marketing",
          results: [],
          title: "Eventos, estandes e experiências na Betpass",
          challenge: "Transformar demandas de eventos e torneios em uma operação executável, coordenando prazos, fornecedores, logística, materiais e equipe em campo.",
          role: "Apoio ao planejamento e execução operacional de eventos, torneios e estandes, em interface com Marketing, fornecedores e equipe interna.",
          context: "Além da rotina financeira e operacional, participei da organização de eventos presenciais da Betpass. O trabalho exigia transformar uma ideia e um prazo fixo em uma sequência clara de decisões, fornecedores, materiais e execução no local.",
          process: ["Organização das demandas e prazos antes do evento", "Interface com fornecedores e acompanhamento de entregas", "Coordenação de logística, materiais e montagem de estandes", "Apoio à equipe durante a execução em campo", "Registro de aprendizados para melhorar a próxima operação"],
          deliverables: ["Planejamento operacional", "Coordenação de fornecedores", "Logística e materiais", "Montagem de estandes", "Apoio à execução presencial"],
          learnings: ["Em evento, execução e experiência estão totalmente conectadas", "Um prazo que não pode mudar obriga a priorizar rápido e resolver o que realmente importa"],
          note: "Case apresentado sem dados financeiros, nomes de parceiros ou informações confidenciais."
        },
        en: {
          category: "Events · Experiences · Marketing Execution",
          results: [],
          title: "Events, booths and experiences at Betpass",
          challenge: "Turn event and tournament demands into an executable operation, coordinating deadlines, suppliers, logistics, materials and the on-site team.",
          role: "Operational planning and execution support for events, tournaments and booths, working with Marketing, suppliers and internal teams.",
          context: "Alongside my financial and operational responsibilities, I supported Betpass's in-person events. The work meant turning an idea and a fixed deadline into a clear sequence of decisions, suppliers, materials and on-site execution.",
          process: ["Organized demands and deadlines before each event", "Worked with suppliers and tracked deliveries", "Coordinated logistics, materials and booth setup", "Supported the team during on-site execution", "Captured lessons to improve the next operation"],
          deliverables: ["Operational planning", "Supplier coordination", "Logistics and materials", "Booth setup", "On-site execution support"],
          learnings: ["In events, execution and experience are inseparable", "A deadline that cannot move forces fast prioritization around what actually matters"],
          note: "Presented without financial figures, partner names or confidential information."
        }
      };
      projects.push(eventProject);
      byId[eventProject.id] = eventProject;
      if (window.CONTENT_STATUS && CONTENT_STATUS.projects) CONTENT_STATUS.projects[eventProject.id] = { published: true };
    }

    var preferred = ["numa-conex", "coi-posicionamento", "coi-conteudo", "coi-agentes", "coi-mapa", "betpass-eventos", "automacoes", "portfolio", "betpass-operacoes", "ainda"];
    var reordered = [];
    preferred.forEach(function (id) { if (byId[id]) reordered.push(byId[id]); });
    projects.forEach(function (p) { if (reordered.indexOf(p) === -1) reordered.push(p); });
    projects.splice.apply(projects, [0, projects.length].concat(reordered));
    return projects;
  }

  function intercept(name, patcher) {
    var stored;
    Object.defineProperty(window, name, {
      configurable: true,
      enumerable: true,
      get: function () { return stored; },
      set: function (value) { stored = patcher(value); }
    });
  }

  intercept("CONTENT", patchContent);
  intercept("SKILL_PILLARS", patchSkills);
  intercept("PROJECTS", patchProjects);

  function patchMetadata() {
    var C = window.CONTENT;
    if (!C || !C.pt) return;
    var pt = C.pt;
    document.title = pt["doc.title"];
    var updates = [
      ['meta[name="description"]', pt["doc.description"]],
      ['meta[property="og:title"]', pt["doc.title"]],
      ['meta[property="og:description"]', pt["hero.tagline"]],
      ['meta[property="og:image:alt"]', pt["doc.title"]],
      ['meta[name="twitter:title"]', pt["doc.title"]],
      ['meta[name="twitter:description"]', pt["hero.tagline"]]
    ];
    updates.forEach(function (item) {
      var node = document.querySelector(item[0]);
      if (node) node.setAttribute("content", item[1]);
    });
  }
  document.addEventListener("DOMContentLoaded", patchMetadata);
})();
