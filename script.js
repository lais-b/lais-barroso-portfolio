/* ===================================================================
   Laís Barroso — site profissional
   JavaScript puro, sem bibliotecas.

   ÍNDICE
   01. LINKS E ARQUIVOS  ← edite aqui os links reais
   02. TRADUÇÕES PT / EN ← edite aqui todos os textos
   03. Motor de idioma
   04. Menu mobile
   05. Botões de currículo, e-mail e LinkedIn
   06. Navegação ativa e animações
   =================================================================== */

(function () {
  "use strict";

  /* =================================================================
     01. LINKS E ARQUIVOS
     -----------------------------------------------------------------
     Este é o único lugar que precisa ser editado para ativar os links.
     ================================================================= */
  var profileLinks = {
    // PREENCHER: adicionar link real do LinkedIn
    // Exemplo: "https://www.linkedin.com/in/lais-barroso/"
    linkedin: "PREENCHER_LINK_LINKEDIN",

    // PREENCHER: adicionar e-mail profissional
    // Exemplo: "lais.barroso@exemplo.com"
    email: "PREENCHER_EMAIL",

    // Caminhos dos currículos. Só passam a funcionar quando
    // `resumesAvailable` abaixo for alterado para true.
    resumePT: "assets/curriculos/curriculo-lais-barroso-pt.pdf",
    resumeEN: "assets/curriculos/curriculo-lais-barroso-en.pdf",

    // PREENCHER: mude para true DEPOIS de colocar os dois PDFs
    // dentro da pasta assets/curriculos/ com exatamente esses nomes.
    resumesAvailable: false
  };

  /* Valores que ainda são apenas marcadores de posição */
  var PLACEHOLDERS = ["PREENCHER_LINK_LINKEDIN", "PREENCHER_EMAIL", ""];

  function isPending(value) {
    return !value || PLACEHOLDERS.indexOf(value) !== -1;
  }


  /* =================================================================
     02. TRADUÇÕES PT / EN
     -----------------------------------------------------------------
     Cada chave corresponde a um atributo data-i18n no index.html.
     Para mudar um texto, altere aqui — nas DUAS línguas.
     ================================================================= */
  var translations = {

    /* ---------------------------- PORTUGUÊS ---------------------- */
    pt: {
      /* Metadados da página */
      "doc.title": "Laís Barroso — Marketing Operations, Growth & Business Operations",
      "doc.description": "Laís Barroso — profissional de Marketing Operations, Growth e Business Operations em Belo Horizonte. Conecta estratégia e execução com processos, dados, automação e inteligência artificial.",

      /* Acessibilidade */
      "a11y.skip": "Pular para o conteúdo principal",
      "a11y.brand": "Laís Barroso — início",
      "a11y.nav": "Navegação principal",
      "a11y.langGroup": "Selecionar idioma",
      "a11y.menuOpen": "Abrir menu de navegação",
      "a11y.menuClose": "Fechar menu de navegação",
      "a11y.availability": "Disponibilidade",
      "a11y.summary": "Resumo profissional",
      "a11y.tools": "Ferramentas utilizadas",

      /* Navegação */
      "nav.about": "Sobre",
      "nav.focus": "Atuação",
      "nav.experience": "Experiência",
      "nav.cases": "Cases",
      "nav.projects": "Projetos",
      "nav.skills": "Competências",
      "nav.education": "Formação",
      "nav.contact": "Contato",

      /* Hero */
      "hero.eyebrow": "Belo Horizonte · Brasil · Disponível para trabalho remoto",
      "hero.headline": "Marketing Operations, Growth & Business Operations",
      "hero.lead": "Profissional multidisciplinar com experiência em operações, marketing, processos, dados e automação. Atua conectando estratégia e execução para transformar projetos e demandas complexas em operações mais organizadas, mensuráveis e eficientes.",

      /* Botões */
      "btn.viewCases": "Ver cases",
      "btn.getInTouch": "Entrar em contato",
      "btn.resumePT": "Baixar currículo (PT)",
      "btn.resumeEN": "Baixar currículo (EN)",
      "btn.linkedin": "LinkedIn",
      "btn.openLinkedin": "Abrir LinkedIn",
      "btn.sendEmail": "Enviar e-mail",

      /* Avisos */
      "notice.resume": "O currículo em PDF ainda será adicionado a este site. Enquanto isso, entre em contato por e-mail ou LinkedIn.",
      "notice.linkedin": "O link do LinkedIn ainda será adicionado a este site.",
      "notice.email": "O e-mail de contato ainda será adicionado a este site.",

      /* Disponibilidade */
      "avail.remoteBR": "Remoto no Brasil",
      "avail.remoteIntl": "Remoto para empresas internacionais",
      "avail.hybridBH": "Híbrido em Belo Horizonte",
      "avail.hybridRJ": "Híbrido no Rio de Janeiro",

      /* Sobre */
      "about.title": "Sobre",
      "about.opening": "Estratégia só vale quando alguém consegue executar. É nesse ponto que eu trabalho.",
      "about.p1": "Minha trajetória começou em uma formação técnica e analítica, na Farmácia, e se desenvolveu na interseção entre operações e marketing. Hoje atuo no ponto em que estratégia vira rotina executável: desenho processos, organizo informação, construo indicadores e automatizo o que não precisa de esforço humano repetido.",
      "about.p2": "Trabalho bem em contextos com muitas frentes abertas e pouca estrutura pronta. Gosto de entrar em uma operação confusa, entender o fluxo real, documentar, priorizar e devolver algo mais simples, mensurável e replicável — sem depender de mim para continuar funcionando.",
      "about.p3": "Uso inteligência artificial como ferramenta de trabalho diária, não como discurso: para acelerar análise, padronizar entregas, gerar documentação e construir automações que sustentam a operação.",
      "about.factLevelLabel": "Nível de interesse",
      "about.factLevelValue": "Trainee, Analista Júnior e Analista Pleno",
      "about.factBaseLabel": "Base",
      "about.factBaseValue": "Belo Horizonte, Minas Gerais, Brasil",
      "about.factModelLabel": "Modelo de trabalho",
      "about.factModelValue": "Remoto (Brasil e internacional) e híbrido em Belo Horizonte ou Rio de Janeiro",
      "about.factLangLabel": "Idiomas",
      "about.factLangValue": "Português, inglês, espanhol e francês",

      /* Áreas de atuação */
      "focus.title": "Áreas de atuação",
      "focus.lead": "Funções em que minha combinação de marketing, operações, dados e automação gera valor direto.",
      "focus.1.title": "Marketing Operations",
      "focus.1.text": "Estruturar a máquina por trás do marketing: processos, rituais, ferramentas, rastreio de desempenho e padronização de entregas.",
      "focus.2.title": "Growth Marketing",
      "focus.2.text": "Aquisição, campanhas, testes e leitura de funil — do primeiro contato até a conversão, com acompanhamento de desempenho.",
      "focus.3.title": "CRM e Lifecycle",
      "focus.3.text": "Organização da base, jornadas de relacionamento, segmentações e comunicação certa no momento certo do ciclo do cliente.",
      "focus.4.title": "Business Operations",
      "focus.4.text": "Rotinas administrativas, financeiras e operacionais organizadas, documentadas e apoiadas por indicadores confiáveis.",
      "focus.5.title": "Gestão de Projetos",
      "focus.5.text": "Escopo, prazos, responsáveis e acompanhamento — com interface entre áreas e comunicação clara com lideranças.",
      "focus.6.title": "Inteligência de Mercado",
      "focus.6.text": "Leitura de dados de mercado e de concorrência transformada em material útil para decisão comercial e de comunicação.",
      "focus.7.title": "Parcerias e Afiliados",
      "focus.7.text": "Estruturação e acompanhamento de parcerias: regras claras, materiais de apoio e mensuração de resultado.",
      "focus.8.title": "Customer Experience",
      "focus.8.text": "Mapeamento da jornada, redução de atrito e padronização do atendimento em cada ponto de contato.",
      "focus.9.title": "Operações Comerciais",
      "focus.9.text": "Apoio ao time comercial: organização de pipeline, materiais de venda, relatórios e rotina de acompanhamento.",

      /* Experiência */
      "exp.title": "Experiência",
      "exp.betpass.role": "Operações Administrativas e Financeiras",
      "exp.betpass.period": "[ADICIONAR PERÍODO]",
      "exp.betpass.summary": "Atuação nas rotinas que sustentam a operação da empresa, com foco em organização financeira, padronização de processos e informação confiável para decisão.",
      "exp.betpass.b1": "Gestão de rotinas administrativas, financeiras e operacionais",
      "exp.betpass.b2": "Contas a pagar e a receber",
      "exp.betpass.b3": "Conciliações e organização de informações financeiras",
      "exp.betpass.b4": "Elaboração e acompanhamento de indicadores",
      "exp.betpass.b5": "Criação e documentação de processos e procedimentos",
      "exp.betpass.b6": "Construção de relatórios gerenciais",
      "exp.betpass.b7": "Automação de tarefas e fluxos",
      "exp.betpass.b8": "Interface entre diferentes áreas e lideranças",
      "exp.betpass.b9": "Apoio à tomada de decisão",
      "exp.betpass.metric": "[ADICIONAR MÉTRICA REAL: redução de tempo, volume processado ou melhoria operacional]",

      "exp.coi.role": "Growth & Marketing Lead — Projeto paralelo",
      "exp.coi.company": "Clube de Oportunidades Imobiliárias",
      "exp.coi.period": "[ADICIONAR PERÍODO]",
      "exp.coi.about": "O COI é uma empresa de inteligência imobiliária que utiliza dados de mercado, informações de transações, análise de imóveis e inteligência artificial para ajudar compradores a identificarem melhores oportunidades.",
      "exp.coi.b1": "Posicionamento de marca e comunicação",
      "exp.coi.b2": "Planejamento de conteúdo",
      "exp.coi.b3": "Campanhas e tráfego pago",
      "exp.coi.b4": "Acompanhamento de aquisição e desempenho",
      "exp.coi.b5": "Estruturação da apresentação dos produtos",
      "exp.coi.b6": "Criação de jornadas e materiais comerciais",
      "exp.coi.b7": "Inteligência de mercado aplicada ao conteúdo",
      "exp.coi.b8": "Automação e utilização de inteligência artificial",
      "exp.coi.b9": "Participação no desenvolvimento e lançamento de produtos digitais",
      "exp.coi.metric": "[ADICIONAR MÉTRICA REAL: volume de leads, alcance, custo por lead ou resultado de campanha]",

      /* Cases */
      "cases.title": "Cases",
      "cases.lead": "Três frentes de trabalho descritas por estrutura: contexto, problema, atuação e o que ficou. Os campos entre colchetes serão preenchidos com informações e números reais.",
      "cases.label.context": "Contexto",
      "cases.label.problem": "Problema",
      "cases.label.role": "Minha atuação",
      "cases.label.tools": "Ferramentas utilizadas",
      "cases.label.results": "Resultados ou aprendizados",
      "cases.label.strategy": "Estratégia",
      "cases.label.previous": "Processo anterior",
      "cases.label.solution": "Solução desenvolvida",
      "cases.label.impact": "Impacto ou aprendizado",

      "cases.1.tag": "Operações",
      "cases.1.title": "Estruturação operacional",
      "cases.1.context": "Rotinas administrativas e financeiras executadas sem padrão documentado, dependendo de memória individual e de conferências manuais recorrentes.",
      "cases.1.contextPh": "[DESCREVER PROCESSO ORIGINAL]",
      "cases.1.problem": "Sem processo escrito e sem indicadores, cada demanda era tratada como exceção — o que dificultava previsibilidade, delegação e acompanhamento.",
      "cases.1.problemPh": "[ADICIONAR PRINCIPAL DESAFIO]",
      "cases.1.role": "Mapeei o fluxo real de ponta a ponta, escrevi os procedimentos, defini responsáveis e pontos de controle e criei uma rotina de acompanhamento por indicadores.",
      "cases.1.toolsPh": "[ADICIONAR FERRAMENTAS UTILIZADAS]",
      "cases.1.resultPh": "[ADICIONAR RESULTADO OU APRENDIZADO REAL]",
      "cases.1.metricPh": "[ADICIONAR MÉTRICA VALIDADA]",

      "cases.2.tag": "Growth",
      "cases.2.title": "Posicionamento e crescimento do COI",
      "cases.2.context": "Um produto de inteligência imobiliária precisando comunicar valor para um público que ainda não busca esse tipo de solução pelo nome.",
      "cases.2.contextPh": "[ADICIONAR SITUAÇÃO INICIAL: ponto de partida, canais existentes e base de audiência]",
      "cases.2.problem": "Sem um posicionamento claro, a comunicação competia por atenção no mesmo campo de qualquer anúncio de imóvel, em vez de ocupar o território de análise e decisão.",
      "cases.2.objectivePh": "[ADICIONAR OBJETIVO DEFINIDO PARA O PERÍODO]",
      "cases.2.role": "Conduzi o posicionamento, o planejamento de conteúdo, as campanhas de aquisição e a estruturação da apresentação dos produtos, acompanhando desempenho e ajustando a rota.",
      "cases.2.strategyPh": "[ADICIONAR ESTRATÉGIA DE POSICIONAMENTO]",
      "cases.2.channelsPh": "[ADICIONAR CANAIS UTILIZADOS]",
      "cases.2.productsPh": "[ADICIONAR PRODUTOS TRABALHADOS]",
      "cases.2.resultPh": "[ADICIONAR RESULTADOS REAIS]",
      "cases.2.learningPh": "[ADICIONAR APRENDIZADOS]",

      "cases.3.tag": "Automação",
      "cases.3.title": "Automações e inteligência artificial",
      "cases.3.context": "Tarefas recorrentes de organização de dados, conferência e produção de relatórios consumindo tempo que deveria ir para análise e decisão.",
      "cases.3.previousPh": "[ADICIONAR PROCESSO MANUAL ANTERIOR]",
      "cases.3.problemPh": "[ADICIONAR PROBLEMA IDENTIFICADO]",
      "cases.3.solution": "Padronizei as entradas, automatizei as etapas repetitivas e passei a usar inteligência artificial para acelerar leitura, organização e redação dos materiais recorrentes.",
      "cases.3.solutionPh": "[ADICIONAR SOLUÇÃO CRIADA]",
      "cases.3.toolsPh": "[ADICIONAR FERRAMENTAS UTILIZADAS]",
      "cases.3.timePh": "[ADICIONAR TEMPO ECONOMIZADO]",
      "cases.3.impactPh": "[ADICIONAR IMPACTO OPERACIONAL]",
      "cases.3.learningPh": "[ADICIONAR APRENDIZADOS]",

      /* Projetos pessoais */
      "projects.title": "Projetos",
      "projects.lead": "Iniciativas próprias, construídas fora de qualquer demanda de trabalho — normalmente para resolver um problema real de organização, comunicação ou automação.",

      "projects.1.title": "Este site",
      "projects.1.status": "No ar",
      "projects.1.desc": "Perfil profissional bilíngue construído do zero, sem editor visual e sem framework: estrutura, conteúdo, versão em inglês, acessibilidade e publicação. Serve como exemplo prático de como uso inteligência artificial para executar algo fora da minha formação original.",

      "projects.2.title": "Produtos digitais do COI",
      "projects.2.status": "Projeto paralelo",
      "projects.2.desc": "Participação no desenvolvimento e no lançamento dos produtos digitais do COI — da definição de como o produto se apresenta até os materiais que sustentam a jornada comercial.",
      "projects.2.ph": "[ADICIONAR: qual produto, seu papel e o que foi entregue]",
      "projects.2.stackPh": "[ADICIONAR FERRAMENTAS]",

      "projects.3.title": "Automações de rotina",
      "projects.3.status": "Contínuo",
      "projects.3.desc": "Pequenas automações criadas para eliminar trabalho manual repetitivo em planilhas, relatórios e conferências — cada uma nasceu de uma tarefa que eu estava cansada de refazer.",
      "projects.3.ph": "[ADICIONAR: qual rotina foi automatizada e o que mudou depois]",
      "projects.3.stackPh": "[ADICIONAR OUTRAS]",

      /* Competências */
      "skills.title": "Competências",
      "skills.lead": "Agrupadas por área de aplicação, sem escalas ou notas de proficiência.",
      "skills.g1.title": "Marketing e Growth",
      "skills.g1.i1": "Planejamento de campanhas",
      "skills.g1.i2": "Conteúdo e posicionamento",
      "skills.g1.i3": "Tráfego pago",
      "skills.g1.i4": "Aquisição",
      "skills.g1.i5": "Jornada do cliente",
      "skills.g1.i6": "Análise de funil",
      "skills.g1.i7": "Estratégia digital",
      "skills.g2.title": "Operações e Projetos",
      "skills.g2.i1": "Gestão de processos",
      "skills.g2.i2": "Documentação",
      "skills.g2.i3": "Gestão de projetos",
      "skills.g2.i4": "Organização de fluxos",
      "skills.g2.i5": "Interface entre áreas",
      "skills.g2.i6": "Planejamento e execução",
      "skills.g3.title": "Dados e Inteligência",
      "skills.g3.i1": "Indicadores",
      "skills.g3.i2": "Relatórios",
      "skills.g3.i3": "Análise de desempenho",
      "skills.g3.i4": "Google Sheets",
      "skills.g3.i5": "Dashboards",
      "skills.g3.i6": "Inteligência de mercado",
      "skills.g4.title": "Automação e Tecnologia",
      "skills.g4.i1": "Inteligência artificial",
      "skills.g4.i2": "Claude Code",
      "skills.g4.i3": "ChatGPT",
      "skills.g4.i4": "Google Apps Script",
      "skills.g4.i5": "Automação de tarefas",
      "skills.g4.i6": "Criação de fluxos operacionais",

      /* Formação e idiomas */
      "edu.title": "Formação e idiomas",
      "edu.academicTitle": "Formação acadêmica",
      "edu.1.degree": "Pós-graduação em Administração",
      "edu.1.school": "Fundação Getulio Vargas — FGV",
      "edu.1.period": "[ADICIONAR PERÍODO]",
      "edu.2.degree": "Graduação em Farmácia",
      "edu.2.school": "Universidade Federal de Minas Gerais — UFMG",
      "edu.2.period": "[ADICIONAR PERÍODO]",
      "edu.langTitle": "Idiomas",
      "edu.lang1.name": "Português",
      "edu.lang1.level": "Nativo",
      "edu.lang2.name": "Inglês",
      "edu.lang2.level": "Avançado",
      "edu.lang3.name": "Espanhol",
      "edu.lang3.level": "Avançado",
      "edu.lang4.name": "Francês",
      "edu.lang4.level": "Avançado",

      /* Objetivo */
      "goal.title": "Objetivo profissional",
      "goal.lead": "Busco uma posição de trainee, analista júnior ou analista pleno em times que tratam marketing e operações como um sistema — e não como tarefas soltas.",
      "goal.p1": "Meu interesse está em funções que exigem transitar entre estratégia e execução: entender o objetivo de negócio, desenhar o processo, acompanhar os números e automatizar o que trava a operação.",
      "goal.p2": "Estou disponível para trabalho remoto no Brasil, remoto para empresas internacionais e híbrido em Belo Horizonte ou no Rio de Janeiro.",

      /* Contato */
      "contact.title": "Contato",
      "contact.lead": "Aberta a conversas sobre vagas, projetos e processos seletivos. O caminho mais rápido é o e-mail.",
      "contact.locationLabel": "Localização",
      "contact.locationValue": "Belo Horizonte, Minas Gerais, Brasil",
      "contact.availLabel": "Disponibilidade",
      "contact.availValue": "Remoto (Brasil e internacional) · Híbrido em Belo Horizonte e Rio de Janeiro",
      "contact.emailLabel": "E-mail",
      "contact.emailPh": "[ADICIONAR E-MAIL PROFISSIONAL]",

      /* Rodapé */
      "footer.tag": "Marketing Operations, Growth & Business Operations",
      "footer.note": "Belo Horizonte, Brasil · Disponível para trabalho remoto e híbrido",
      "footer.built": "Site pessoal desenvolvido em HTML, CSS e JavaScript.",
      "footer.backToTop": "Voltar ao topo"
    },

    /* ------------------------------ INGLÊS ----------------------- */
    en: {
      /* Page metadata */
      "doc.title": "Laís Barroso — Marketing Operations, Growth & Business Operations",
      "doc.description": "Laís Barroso — Marketing Operations, Growth and Business Operations professional based in Belo Horizonte, Brazil. Connects strategy and execution through process, data, automation and AI.",

      /* Accessibility */
      "a11y.skip": "Skip to main content",
      "a11y.brand": "Laís Barroso — home",
      "a11y.nav": "Main navigation",
      "a11y.langGroup": "Select language",
      "a11y.menuOpen": "Open navigation menu",
      "a11y.menuClose": "Close navigation menu",
      "a11y.availability": "Availability",
      "a11y.summary": "Professional summary",
      "a11y.tools": "Tools used",

      /* Navigation */
      "nav.about": "About",
      "nav.focus": "Focus",
      "nav.experience": "Experience",
      "nav.cases": "Cases",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.contact": "Contact",

      /* Hero */
      "hero.eyebrow": "Belo Horizonte · Brazil · Available for remote work",
      "hero.headline": "Marketing Operations, Growth & Business Operations",
      "hero.lead": "A multidisciplinary professional working across operations, marketing, process, data and automation. I bridge strategy and execution, turning complex projects and scattered demands into operations that are organised, measurable and efficient.",

      /* Buttons */
      "btn.viewCases": "View case studies",
      "btn.getInTouch": "Get in touch",
      "btn.resumePT": "Download CV (PT)",
      "btn.resumeEN": "Download CV (EN)",
      "btn.linkedin": "LinkedIn",
      "btn.openLinkedin": "Open LinkedIn",
      "btn.sendEmail": "Send an email",

      /* Notices */
      "notice.resume": "The PDF CV has not been uploaded to this site yet. In the meantime, please reach out by email or LinkedIn.",
      "notice.linkedin": "The LinkedIn link has not been added to this site yet.",
      "notice.email": "The contact email has not been added to this site yet.",

      /* Availability */
      "avail.remoteBR": "Remote within Brazil",
      "avail.remoteIntl": "Remote for international companies",
      "avail.hybridBH": "Hybrid in Belo Horizonte",
      "avail.hybridRJ": "Hybrid in Rio de Janeiro",

      /* About */
      "about.title": "About",
      "about.opening": "A strategy is only worth something once someone can actually run it. That is where I work.",
      "about.p1": "My background started in a technical, analytical field — Pharmacy — and grew into the space where operations and marketing meet. Today I work at the point where strategy becomes a routine someone can actually run: I design processes, organise information, build metrics and automate whatever does not need to be done by hand twice.",
      "about.p2": "I work well where there are many moving parts and little structure in place. I like walking into a messy operation, mapping how it really works, documenting it, setting priorities and handing back something simpler, measurable and repeatable — something that keeps running without me.",
      "about.p3": "I use AI as a daily working tool rather than a talking point: to speed up analysis, standardise deliverables, produce documentation and build the automations that keep an operation moving.",
      "about.factLevelLabel": "Target level",
      "about.factLevelValue": "Trainee, Junior Analyst and Mid-level Analyst",
      "about.factBaseLabel": "Based in",
      "about.factBaseValue": "Belo Horizonte, Minas Gerais, Brazil",
      "about.factModelLabel": "Ways of working",
      "about.factModelValue": "Remote (Brazil and international) and hybrid in Belo Horizonte or Rio de Janeiro",
      "about.factLangLabel": "Languages",
      "about.factLangValue": "Portuguese, English, Spanish and French",

      /* Focus areas */
      "focus.title": "Focus areas",
      "focus.lead": "Roles where my mix of marketing, operations, data and automation makes an immediate difference.",
      "focus.1.title": "Marketing Operations",
      "focus.1.text": "Building the engine behind marketing: processes, rituals, tooling, performance tracking and consistent delivery standards.",
      "focus.2.title": "Growth Marketing",
      "focus.2.text": "Acquisition, campaigns, testing and funnel analysis — from first touch to conversion, with performance tracked throughout.",
      "focus.3.title": "CRM & Lifecycle",
      "focus.3.text": "Database hygiene, segmentation and relationship journeys, so the right message lands at the right point of the customer lifecycle.",
      "focus.4.title": "Business Operations",
      "focus.4.text": "Administrative, financial and operational routines that are organised, documented and backed by metrics people can trust.",
      "focus.5.title": "Project Management",
      "focus.5.text": "Scope, deadlines, ownership and follow-through — coordinating across teams and reporting clearly to leadership.",
      "focus.6.title": "Market Intelligence",
      "focus.6.text": "Turning market and competitor data into material that supports commercial and communication decisions.",
      "focus.7.title": "Partnerships & Affiliates",
      "focus.7.text": "Setting up and managing partnerships: clear rules, supporting materials and measurable outcomes.",
      "focus.8.title": "Customer Experience",
      "focus.8.text": "Mapping the journey, removing friction and standardising service quality at every touchpoint.",
      "focus.9.title": "Sales Operations",
      "focus.9.text": "Supporting the commercial team: pipeline hygiene, sales materials, reporting and a steady follow-up routine.",

      /* Experience */
      "exp.title": "Experience",
      "exp.betpass.role": "Administrative & Financial Operations",
      "exp.betpass.period": "[ADD DATES]",
      "exp.betpass.summary": "Responsible for the routines that keep the company running, with a focus on financial organisation, standardised processes and reliable information for decision-making.",
      "exp.betpass.b1": "Managing administrative, financial and operational routines",
      "exp.betpass.b2": "Accounts payable and receivable",
      "exp.betpass.b3": "Reconciliation and organisation of financial information",
      "exp.betpass.b4": "Defining and tracking performance indicators",
      "exp.betpass.b5": "Creating and documenting processes and procedures",
      "exp.betpass.b6": "Building management reports",
      "exp.betpass.b7": "Automating tasks and workflows",
      "exp.betpass.b8": "Acting as the link between teams and leadership",
      "exp.betpass.b9": "Supporting decision-making",
      "exp.betpass.metric": "[ADD REAL METRIC: time saved, volume processed or operational improvement]",

      "exp.coi.role": "Growth & Marketing Lead — Side project",
      "exp.coi.company": "Clube de Oportunidades Imobiliárias",
      "exp.coi.period": "[ADD DATES]",
      "exp.coi.about": "COI is a real estate intelligence company that combines market data, transaction records, property analysis and artificial intelligence to help buyers identify better opportunities.",
      "exp.coi.b1": "Brand positioning and communication",
      "exp.coi.b2": "Content planning",
      "exp.coi.b3": "Campaigns and paid media",
      "exp.coi.b4": "Acquisition and performance tracking",
      "exp.coi.b5": "Structuring how the products are presented",
      "exp.coi.b6": "Building customer journeys and sales materials",
      "exp.coi.b7": "Market intelligence applied to content",
      "exp.coi.b8": "Automation and applied artificial intelligence",
      "exp.coi.b9": "Contributing to the development and launch of digital products",
      "exp.coi.metric": "[ADD REAL METRIC: lead volume, reach, cost per lead or campaign result]",

      /* Case studies */
      "cases.title": "Case studies",
      "cases.lead": "Three areas of work, each described the same way: context, problem, what I did and what came out of it. Bracketed fields will be filled in with real information and numbers.",
      "cases.label.context": "Context",
      "cases.label.problem": "Problem",
      "cases.label.role": "What I did",
      "cases.label.tools": "Tools used",
      "cases.label.results": "Results or takeaways",
      "cases.label.strategy": "Strategy",
      "cases.label.previous": "Previous process",
      "cases.label.solution": "Solution built",
      "cases.label.impact": "Impact or takeaways",

      "cases.1.tag": "Operations",
      "cases.1.title": "Operational restructuring",
      "cases.1.context": "Administrative and financial routines were being run without a documented standard, relying on individual memory and repeated manual checks.",
      "cases.1.contextPh": "[DESCRIBE THE ORIGINAL PROCESS]",
      "cases.1.problem": "With no written process and no indicators, every request was handled as an exception — which made the work hard to predict, delegate or track.",
      "cases.1.problemPh": "[ADD THE MAIN CHALLENGE]",
      "cases.1.role": "I mapped the real end-to-end flow, wrote the procedures, defined owners and control points, and set up a routine for tracking performance indicators.",
      "cases.1.toolsPh": "[ADD TOOLS USED]",
      "cases.1.resultPh": "[ADD A REAL RESULT OR TAKEAWAY]",
      "cases.1.metricPh": "[ADD A VALIDATED METRIC]",

      "cases.2.tag": "Growth",
      "cases.2.title": "Positioning and growth at COI",
      "cases.2.context": "A real estate intelligence product that needed to communicate its value to an audience not yet searching for that kind of solution by name.",
      "cases.2.contextPh": "[ADD THE STARTING POINT: existing channels and audience base]",
      "cases.2.problem": "Without clear positioning, the brand was competing for attention on the same ground as any property listing, instead of owning the territory of analysis and decision support.",
      "cases.2.objectivePh": "[ADD THE OBJECTIVE SET FOR THE PERIOD]",
      "cases.2.role": "I led positioning, content planning, acquisition campaigns and how the products were presented, tracking performance and adjusting course along the way.",
      "cases.2.strategyPh": "[ADD THE POSITIONING STRATEGY]",
      "cases.2.channelsPh": "[ADD THE CHANNELS USED]",
      "cases.2.productsPh": "[ADD THE PRODUCTS WORKED ON]",
      "cases.2.resultPh": "[ADD REAL RESULTS]",
      "cases.2.learningPh": "[ADD TAKEAWAYS]",

      "cases.3.tag": "Automation",
      "cases.3.title": "Automation and artificial intelligence",
      "cases.3.context": "Recurring work — organising data, cross-checking figures and producing reports — was taking up time that belonged to analysis and decision-making.",
      "cases.3.previousPh": "[ADD THE PREVIOUS MANUAL PROCESS]",
      "cases.3.problemPh": "[ADD THE PROBLEM IDENTIFIED]",
      "cases.3.solution": "I standardised the inputs, automated the repetitive steps and began using AI to speed up reading, organising and drafting the recurring materials.",
      "cases.3.solutionPh": "[ADD THE SOLUTION BUILT]",
      "cases.3.toolsPh": "[ADD TOOLS USED]",
      "cases.3.timePh": "[ADD TIME SAVED]",
      "cases.3.impactPh": "[ADD OPERATIONAL IMPACT]",
      "cases.3.learningPh": "[ADD TAKEAWAYS]",

      /* Personal projects */
      "projects.title": "Projects",
      "projects.lead": "Things I built on my own initiative, outside of any assignment — usually to solve a real problem in how work was organised, communicated or repeated.",

      "projects.1.title": "This website",
      "projects.1.status": "Live",
      "projects.1.desc": "A bilingual professional profile built from scratch — no page builder, no framework: structure, content, English version, accessibility and deployment. It doubles as a working example of how I use AI to deliver something outside my original training.",

      "projects.2.title": "COI digital products",
      "projects.2.status": "Side project",
      "projects.2.desc": "Contributed to building and launching COI's digital products — from deciding how the product presents itself to the materials that carry the commercial journey.",
      "projects.2.ph": "[ADD: which product, your role and what shipped]",
      "projects.2.stackPh": "[ADD TOOLS]",

      "projects.3.title": "Everyday automations",
      "projects.3.status": "Ongoing",
      "projects.3.desc": "Small automations built to remove repetitive manual work from spreadsheets, reports and reconciliations — each one started as a task I was tired of redoing.",
      "projects.3.ph": "[ADD: which routine was automated and what changed afterwards]",
      "projects.3.stackPh": "[ADD OTHERS]",

      /* Skills */
      "skills.title": "Skills",
      "skills.lead": "Grouped by where they apply — no rating scales or proficiency scores.",
      "skills.g1.title": "Marketing & Growth",
      "skills.g1.i1": "Campaign planning",
      "skills.g1.i2": "Content and positioning",
      "skills.g1.i3": "Paid media",
      "skills.g1.i4": "Acquisition",
      "skills.g1.i5": "Customer journey",
      "skills.g1.i6": "Funnel analysis",
      "skills.g1.i7": "Digital strategy",
      "skills.g2.title": "Operations & Projects",
      "skills.g2.i1": "Process management",
      "skills.g2.i2": "Documentation",
      "skills.g2.i3": "Project management",
      "skills.g2.i4": "Workflow design",
      "skills.g2.i5": "Cross-team coordination",
      "skills.g2.i6": "Planning and execution",
      "skills.g3.title": "Data & Intelligence",
      "skills.g3.i1": "KPIs and indicators",
      "skills.g3.i2": "Reporting",
      "skills.g3.i3": "Performance analysis",
      "skills.g3.i4": "Google Sheets",
      "skills.g3.i5": "Dashboards",
      "skills.g3.i6": "Market intelligence",
      "skills.g4.title": "Automation & Technology",
      "skills.g4.i1": "Artificial intelligence",
      "skills.g4.i2": "Claude Code",
      "skills.g4.i3": "ChatGPT",
      "skills.g4.i4": "Google Apps Script",
      "skills.g4.i5": "Task automation",
      "skills.g4.i6": "Building operational workflows",

      /* Education & languages */
      "edu.title": "Education and languages",
      "edu.academicTitle": "Education",
      "edu.1.degree": "Postgraduate degree in Business Administration",
      "edu.1.school": "Fundação Getulio Vargas — FGV",
      "edu.1.period": "[ADD DATES]",
      "edu.2.degree": "Bachelor's degree in Pharmacy",
      "edu.2.school": "Federal University of Minas Gerais — UFMG",
      "edu.2.period": "[ADD DATES]",
      "edu.langTitle": "Languages",
      "edu.lang1.name": "Portuguese",
      "edu.lang1.level": "Native",
      "edu.lang2.name": "English",
      "edu.lang2.level": "Advanced",
      "edu.lang3.name": "Spanish",
      "edu.lang3.level": "Advanced",
      "edu.lang4.name": "French",
      "edu.lang4.level": "Advanced",

      /* Career goal */
      "goal.title": "What I'm looking for",
      "goal.lead": "I'm looking for a trainee, junior or mid-level analyst role on a team that treats marketing and operations as one system rather than a list of separate tasks.",
      "goal.p1": "I'm drawn to roles that require moving between strategy and execution: understanding the business goal, designing the process, tracking the numbers and automating whatever slows the operation down.",
      "goal.p2": "I'm available for remote work within Brazil, remote work for international companies, and hybrid roles in Belo Horizonte or Rio de Janeiro.",

      /* Contact */
      "contact.title": "Contact",
      "contact.lead": "Open to conversations about roles, projects and hiring processes. Email is the fastest way to reach me.",
      "contact.locationLabel": "Location",
      "contact.locationValue": "Belo Horizonte, Minas Gerais, Brazil",
      "contact.availLabel": "Availability",
      "contact.availValue": "Remote (Brazil and international) · Hybrid in Belo Horizonte and Rio de Janeiro",
      "contact.emailLabel": "Email",
      "contact.emailPh": "[ADD PROFESSIONAL EMAIL]",

      /* Footer */
      "footer.tag": "Marketing Operations, Growth & Business Operations",
      "footer.note": "Belo Horizonte, Brazil · Available for remote and hybrid roles",
      "footer.built": "Personal site built with HTML, CSS and JavaScript.",
      "footer.backToTop": "Back to top"
    }
  };


  /* =================================================================
     03. MOTOR DE IDIOMA
     ================================================================= */
  var STORAGE_KEY = "lb-lang";
  var DEFAULT_LANG = "pt";              // idioma inicial do site
  var currentLang = DEFAULT_LANG;

  function safeGetStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;                       // localStorage bloqueado (modo privado)
    }
  }

  function safeStoreLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* silencioso de propósito */ }
  }

  function t(key) {
    var dict = translations[currentLang] || translations[DEFAULT_LANG];
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    var fallback = translations[DEFAULT_LANG];
    return Object.prototype.hasOwnProperty.call(fallback, key) ? fallback[key] : key;
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    currentLang = lang;

    /* Texto dos elementos */
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute("data-i18n"));
    }

    /* Atributos aria-label traduzidos */
    var labelled = document.querySelectorAll("[data-i18n-aria-label]");
    for (var j = 0; j < labelled.length; j++) {
      labelled[j].setAttribute("aria-label", t(labelled[j].getAttribute("data-i18n-aria-label")));
    }

    /* Idioma do documento e metadados */
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    document.title = t("doc.title");

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("doc.description"));

    /* Estado dos botões de idioma */
    var buttons = document.querySelectorAll(".lang-btn");
    for (var k = 0; k < buttons.length; k++) {
      var active = buttons[k].getAttribute("data-lang") === lang;
      buttons[k].classList.toggle("is-active", active);
      buttons[k].setAttribute("aria-pressed", active ? "true" : "false");
    }

    /* Rótulo acessível do botão de menu, conforme o estado atual */
    if (menuToggle) {
      var open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-label", t(open ? "a11y.menuClose" : "a11y.menuOpen"));
    }

    /* Elementos que dependem dos links reais */
    applyProfileLinks();

    /* Um aviso visível é reescrito no novo idioma */
    if (notice && !notice.hidden && notice.dataset.noticeKey) {
      notice.textContent = t(notice.dataset.noticeKey);
    }

    safeStoreLang(lang);
  }


  /* =================================================================
     04. MENU MOBILE
     ================================================================= */
  var menuToggle = document.getElementById("menu-toggle");
  var siteNav = document.getElementById("nav-principal");
  var notice = document.getElementById("notice");

  function setMenu(open) {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", t(open ? "a11y.menuClose" : "a11y.menuOpen"));
    siteNav.classList.toggle("is-open", open);
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    /* Fecha ao escolher um item */
    siteNav.addEventListener("click", function (event) {
      var target = event.target;
      if (target && typeof target.closest === "function" && target.closest("a")) setMenu(false);
    });

    /* Fecha com Esc e devolve o foco ao botão */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuToggle.focus();
      }
    });

    /* Ao voltar para o desktop, o menu não pode ficar preso aberto */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }


  /* =================================================================
     05. BOTÕES DE CURRÍCULO, E-MAIL E LINKEDIN
     ================================================================= */
  function showNotice(key) {
    if (!notice) return;
    notice.dataset.noticeKey = key;
    notice.textContent = t(key);
    notice.hidden = false;
  }

  function applyProfileLinks() {
    var emailReady = !isPending(profileLinks.email);
    var linkedinReady = !isPending(profileLinks.linkedin);

    /* E-mail exibido na seção de contato */
    var emailDisplay = document.getElementById("email-display");
    if (emailDisplay) {
      if (emailReady) {
        emailDisplay.textContent = profileLinks.email;
        emailDisplay.removeAttribute("data-i18n");
      } else {
        emailDisplay.textContent = t("contact.emailPh");
      }
    }

    /* Links de e-mail */
    var emailLinks = document.querySelectorAll('[data-action="email"]');
    for (var i = 0; i < emailLinks.length; i++) {
      if (emailReady) {
        emailLinks[i].setAttribute("href", "mailto:" + profileLinks.email);
        emailLinks[i].removeAttribute("target");
      } else {
        emailLinks[i].setAttribute("href", "#contato");
      }
    }

    /* Links do LinkedIn */
    var linkedinLinks = document.querySelectorAll('[data-action="linkedin"]');
    for (var j = 0; j < linkedinLinks.length; j++) {
      if (linkedinReady) {
        linkedinLinks[j].setAttribute("href", profileLinks.linkedin);
        linkedinLinks[j].setAttribute("target", "_blank");
        linkedinLinks[j].setAttribute("rel", "noopener noreferrer");
      } else {
        linkedinLinks[j].setAttribute("href", "#contato");
        linkedinLinks[j].removeAttribute("target");
        linkedinLinks[j].removeAttribute("rel");
      }
    }
  }

  /* Um único ouvinte para todos os botões de ação */
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || typeof target.closest !== "function") return;

    var trigger = target.closest("[data-action]");
    if (!trigger) return;

    var action = trigger.getAttribute("data-action");

    if (action === "resume") {
      event.preventDefault();
      if (!profileLinks.resumesAvailable) {
        showNotice("notice.resume");
        return;
      }
      var which = trigger.getAttribute("data-resume") === "en" ? "resumeEN" : "resumePT";
      var link = document.createElement("a");
      link.href = profileLinks[which];
      link.setAttribute("download", "");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    if (action === "linkedin" && isPending(profileLinks.linkedin)) {
      event.preventDefault();
      showNotice("notice.linkedin");
      return;
    }

    if (action === "email" && isPending(profileLinks.email)) {
      event.preventDefault();
      showNotice("notice.email");
    }
  });


  /* =================================================================
     06. NAVEGAÇÃO ATIVA E ANIMAÇÕES
     ================================================================= */
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Aparecimento suave das seções */
  var revealables = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    for (var r = 0; r < revealables.length; r++) revealables[r].classList.add("is-visible");
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    /* Margem em pixels (e não em %): uma janela muito alta não pode
       deixar o conteúdo do rodapé preso invisível. */
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0 });

    for (var s = 0; s < revealables.length; s++) revealObserver.observe(revealables[s]);
  }

  /* Destaque do item de menu da seção visível */
  var navLinks = document.querySelectorAll(".nav-list a");
  var sections = [];
  for (var n = 0; n < navLinks.length; n++) {
    var id = navLinks[n].getAttribute("href");
    if (id && id.charAt(0) === "#") {
      var el = document.querySelector(id);
      if (el) sections.push({ el: el, link: navLinks[n] });
    }
  }

  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        for (var i = 0; i < sections.length; i++) {
          sections[i].link.classList.toggle("is-current", sections[i].el === entry.target);
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    for (var q = 0; q < sections.length; q++) spy.observe(sections[q].el);
  }


  /* =================================================================
     INICIALIZAÇÃO
     ================================================================= */
  document.documentElement.classList.remove("no-js");

  var langButtons = document.querySelectorAll(".lang-btn");
  for (var b = 0; b < langButtons.length; b++) {
    (function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    })(langButtons[b]);
  }

  /* O idioma salvo é aplicado antes da primeira pintura. As transições
     ficam desligadas nesse instante para o seletor PT/EN não aparecer
     "trocando sozinho" ao abrir a página. */
  var root = document.documentElement;
  root.classList.add("no-transition");

  var stored = safeGetStoredLang();
  applyLanguage(translations[stored] ? stored : DEFAULT_LANG);

  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.remove("no-transition");
      });
    });
  } else {
    window.setTimeout(function () { root.classList.remove("no-transition"); }, 60);
  }
})();
