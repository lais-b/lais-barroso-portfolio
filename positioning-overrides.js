/* 2026-08-17 — Career positioning update
   Marketing & Innovation first; projects as a way of working, not the profession.
*/
(function () {
  function patchData() {
    if (!window.CONTENT || !window.PROJECTS || !window.SKILL_PILLARS) return false;

    var pt = CONTENT.pt;
    var en = CONTENT.en;

    Object.assign(pt, {
      "doc.title": "Laís Barroso · Marketing & Inovação | Produto, Lançamentos & Novas Iniciativas",
      "doc.description": "Portfólio de Laís Barroso com cases em marketing, inovação, produto digital, posicionamento, lançamentos, inteligência de mercado e IA aplicada.",
      "hero.headline": "Marketing & Inovação · Produto · Lançamentos · Novas Iniciativas",
      "hero.tagline": "Conecto mercado, posicionamento e execução para transformar ideias em iniciativas que saem do papel.",
      "hero.stamp1": "marketing",
      "hero.stamp2": "innovation",
      "hero.stamp3": "product",
      "hero.stamp4": "AI",
      "stk.check1": "entender mercado e problema",
      "stk.check2": "definir direção e proposta",
      "stk.check3": "lançar, medir e aprender",
      "manifesto.lead": "Gosto do espaço entre entender uma oportunidade e colocar alguma coisa nova no mundo.",
      "manifesto.p1": "Minha trajetória passou por ciência, análise técnica, operações, dados, marketing e produtos digitais. Essa mistura me ensinou a entrar em problemas ainda pouco estruturados, pesquisar, conectar informações e conversar com áreas diferentes sem perder a visão do todo.",
      "manifesto.p2": "Hoje direciono essa capacidade para Marketing e Inovação: novos produtos, lançamentos, experiências e iniciativas em que estratégia e execução caminham juntas. Projetos são a forma de fazer isso acontecer — não o fim em si.",
      "manifesto.level": "Marketing & Inovação · Product Marketing · Novos Produtos · Lançamentos · Projetos de Marketing",
      "work.lead": "Cases em posicionamento, produto digital, lançamentos, campanhas, experiências e IA aplicada ao negócio.",
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
      "skills.p1.title": "Marketing, Produto & Inovação",
      "skills.p2.title": "Iniciativas & Execução",
      "skills.p3.title": "Dados, IA & Automação",
      "about.p1": "Minha trajetória não foi construída em linha reta, e isso virou uma vantagem: passei pela ciência, por contextos técnicos e regulados, por operações, marketing e produtos digitais. Hoje uso essa visão multidisciplinar para entender oportunidades, conectar áreas e ajudar novas iniciativas a sair do papel.",
      "about.p2": "Fora dos cargos, sou movida por curiosidade, viagens, idiomas, cultura, marcas, experiências e tecnologia — e pela vontade de transformar uma ideia ainda confusa em algo que as pessoas consigam entender, usar ou viver.",
      "footer.tag": "Marketing & Inovação · Produto · Lançamentos · Novas Iniciativas"
    });

    Object.assign(en, {
      "doc.title": "Laís Barroso · Marketing & Innovation | Product, Launches & New Initiatives",
      "doc.description": "Laís Barroso's portfolio: marketing, innovation, digital product, positioning, launches, market intelligence and applied AI.",
      "hero.headline": "Marketing & Innovation · Product · Launches · New Initiatives",
      "hero.tagline": "I connect market insight, positioning and execution to turn ideas into initiatives that actually launch.",
      "hero.stamp1": "marketing",
      "hero.stamp2": "innovation",
      "hero.stamp3": "product",
      "hero.stamp4": "AI",
      "stk.check1": "understand market + problem",
      "stk.check2": "set direction + proposition",
      "stk.check3": "launch, measure, learn",
      "manifesto.lead": "I like the space between understanding an opportunity and putting something new into the world.",
      "manifesto.p1": "My path has moved through science, technical analysis, operations, data, marketing and digital products. That mix taught me how to enter loosely defined problems, research them, connect information and work across teams without losing sight of the whole.",
      "manifesto.p2": "I am now directing that ability toward Marketing and Innovation: new products, launches, experiences and initiatives where strategy and execution move together. Projects are how the work gets done — not the job itself.",
      "manifesto.level": "Marketing & Innovation · Product Marketing · New Products · Launches · Marketing Projects",
      "work.lead": "Selected work across positioning, digital products, launches, campaigns, experiences and applied AI.",
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
      "skills.p1.title": "Marketing, Product & Innovation",
      "skills.p2.title": "Initiatives & Execution",
      "skills.p3.title": "Data, AI & Automation",
      "about.p1": "My path was never linear, and that became useful: I moved through science, technical and regulated environments, operations, marketing and digital products. Today I use that multidisciplinary perspective to understand opportunities, connect teams and help new initiatives get off the ground.",
      "about.p2": "Outside job titles, I run on curiosity, travel, languages, culture, brands, experiences and technology — and on the urge to turn a messy idea into something people can understand, use or experience.",
      "footer.tag": "Marketing & Innovation · Product · Launches · New Initiatives"
    });

    SKILL_PILLARS.length = 0;
    SKILL_PILLARS.push(
      {
        key: "p1",
        pt: ["Marketing Estratégico", "Marketing de Inovação", "Product Marketing", "Posicionamento", "Pesquisa de mercado", "Inteligência de mercado", "Jornada do cliente", "Go-to-Market", "Lançamentos"],
        en: ["Marketing Strategy", "Innovation Marketing", "Product Marketing", "Positioning", "Market research", "Market intelligence", "Customer journey", "Go-to-Market", "Launches"]
      },
      {
        key: "p2",
        pt: ["Projetos de Marketing", "Estruturação de iniciativas", "Priorização", "Interface entre áreas", "Validação de hipóteses", "Campanhas", "Eventos & experiências", "Implementação", "Melhoria contínua"],
        en: ["Marketing projects", "Initiative structuring", "Prioritization", "Cross-functional work", "Hypothesis validation", "Campaigns", "Events & experiences", "Implementation", "Continuous improvement"]
      },
      {
        key: "p3",
        pt: ["KPIs", "Dashboards", "Análise de desempenho", "Google Sheets", "Google Apps Script", "Inteligência artificial", "Agentes de IA", "Automação de fluxos", "Claude e ChatGPT"],
        en: ["KPIs", "Dashboards", "Performance analysis", "Google Sheets", "Google Apps Script", "Artificial intelligence", "AI agents", "Workflow automation", "Claude and ChatGPT"]
      }
    );

    var byId = {};
    PROJECTS.forEach(function (p) { byId[p.id] = p; });

    if (byId["coi-posicionamento"]) {
      byId["coi-posicionamento"].pt.category = "Product Marketing · Posicionamento · Inteligência de mercado";
      byId["coi-posicionamento"].en.category = "Product Marketing · Positioning · Market intelligence";
    }
    if (byId["coi-mapa"]) {
      byId["coi-mapa"].pt.category = "Lançamento de produto · Product Marketing";
      byId["coi-mapa"].en.category = "Product launch · Product Marketing";
    }
    if (byId["coi-conteudo"]) {
      byId["coi-conteudo"].pt.category = "Campanhas · Conteúdo · Aquisição";
      byId["coi-conteudo"].en.category = "Campaigns · Content · Acquisition";
    }
    if (byId["coi-agentes"]) {
      byId["coi-agentes"].pt.category = "IA aplicada ao Marketing · Inovação";
      byId["coi-agentes"].en.category = "Applied AI for Marketing · Innovation";
    }
    if (byId["betpass-operacoes"]) {
      byId["betpass-operacoes"].pt.category = "Operações · Eventos · Transformação";
      byId["betpass-operacoes"].en.category = "Operations · Events · Transformation";
    }

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

    if (!byId[eventProject.id]) {
      PROJECTS.push(eventProject);
      if (window.CONTENT_STATUS && CONTENT_STATUS.projects) CONTENT_STATUS.projects[eventProject.id] = { published: true };
      byId[eventProject.id] = eventProject;
    }

    var preferred = ["coi-posicionamento", "coi-mapa", "coi-agentes", "coi-conteudo", "betpass-eventos", "automacoes", "portfolio", "betpass-operacoes", "ainda"];
    var reordered = [];
    preferred.forEach(function (id) { if (byId[id]) reordered.push(byId[id]); });
    PROJECTS.forEach(function (p) { if (reordered.indexOf(p) === -1) reordered.push(p); });
    PROJECTS.splice.apply(PROJECTS, [0, PROJECTS.length].concat(reordered));

    document.title = pt["doc.title"];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", pt["doc.description"]);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pt["doc.title"]);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pt["hero.tagline"]);
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", pt["doc.title"]);
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", pt["hero.tagline"]);

    return true;
  }

  function refreshVisibleCopy() {
    if (!window.CONTENT) return;
    var lang = document.documentElement.lang && document.documentElement.lang.toLowerCase().indexOf("en") === 0 ? "en" : "pt";
    var dict = CONTENT[lang] || CONTENT.pt;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.title = dict["doc.title"] || document.title;
  }

  window.addEventListener("DOMContentLoaded", function () {
    patchData();
  });

  window.addEventListener("load", function () {
    patchData();
    refreshVisibleCopy();
    document.querySelectorAll(".lang-b").forEach(function (button) {
      button.addEventListener("click", function () { setTimeout(refreshVisibleCopy, 0); });
    });
  });
})();
