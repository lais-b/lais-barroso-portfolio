/* ===================================================================
   content-status.js
   -------------------------------------------------------------------
   FONTE ÚNICA DA VERDADE sobre o que já está pronto para aparecer
   no site publicado.

   REGRA: campo vazio ("" ou false) = o componente correspondente
   NÃO é renderizado no site publicado. Nunca aparece "[ADICIONAR...]"
   ou "PREENCHER" para quem visita.

   Em ambiente local (localhost / 127.0.0.1 / abrir o arquivo direto),
   o site mostra marcações discretas do que está faltando, para você
   saber o que preencher. No ar, isso some automaticamente.
   =================================================================== */

var CONTENT_STATUS = {

  /* -----------------------------------------------------------------
     1. CONTATO
     Enquanto vazio, os botões de e-mail e LinkedIn não são exibidos.
     ----------------------------------------------------------------- */
  professionalEmail: "",          // ex.: "lais.barroso@exemplo.com"
  linkedin: "",                   // ex.: "https://www.linkedin.com/in/lais-barroso/"

  /* -----------------------------------------------------------------
     2. CURRÍCULOS
     Coloque os PDFs em assets/curriculos/ e mude para true.
     Nomes esperados:
       curriculo-lais-barroso-pt.pdf
       curriculo-lais-barroso-en.pdf
     ----------------------------------------------------------------- */
  resumes: {
    pt: false,
    en: false
  },

  /* -----------------------------------------------------------------
     3. DATAS PENDENTES
     A Pluris Mídia entra na linha do tempo sem período enquanto
     este campo estiver vazio (o cargo e a atuação aparecem normalmente).
     ----------------------------------------------------------------- */
  plurisPeriod: "",               // ex.: "2022 — 2023"

  /* -----------------------------------------------------------------
     4. MÉTRICAS VALIDADAS
     Só entram no site números que você confirmou. Cada item:
       { value: "38%", label: "menos tempo de fechamento mensal" }
     Lista vazia = o bloco de números nem aparece.
     NUNCA preencher com estimativa ou número aproximado.
     ----------------------------------------------------------------- */
  metrics: {
    betpass: [],
    coi: []
  },

  /* -----------------------------------------------------------------
     5. PROJETOS
     published: true  → aparece completo, com botão "Ver projeto"
     published: false → aparece como prévia com selo "Case em breve"
                        (sem botão, sem conteúdo pela metade)
     ----------------------------------------------------------------- */
  projects: {
    "coi-posicionamento":  { published: true  },
    "coi-mapa":            { published: true  },
    "coi-conteudo":        { published: true  },
    "betpass-operacoes":   { published: true  },
    "automacoes":          { published: true  },
    "roadmap-digital":     { published: false },
    "consultoria-ia":      { published: false },
    "portfolio":           { published: true  }
  },

  /* -----------------------------------------------------------------
     6. IMAGENS
     Não precisa mexer aqui. O site tenta carregar cada imagem de
     assets/imagens/ e, se o arquivo ainda não existir:
       - em ambiente local: mostra um bloco "Adicionar fotografia"
       - no site publicado: o espaço é removido, sem buraco no layout
     A lista de arquivos esperados está no README.
     ----------------------------------------------------------------- */
  imagesBasePath: "assets/imagens/"
};

if (typeof window !== "undefined") { window.CONTENT_STATUS = CONTENT_STATUS; }
