/* ===================================================================
   content-status.js
   -------------------------------------------------------------------
   FONTE ÚNICA DA VERDADE sobre o que já está pronto para aparecer
   no site publicado.
   =================================================================== */

var CONTENT_STATUS = {
  professionalEmail: "lacrubarroso@gmail.com",
  linkedin: "https://www.linkedin.com/in/lais-barroso-/",
  whatsapp: "5531982212385",

  resumes: {
    pt: true,
    en: true
  },

  plurisPeriod: "2023-2024",

  metrics: {
    betpass: [],
    coi: []
  },

  projects: {
    "coi-posicionamento":  { published: true,  link: "" },
    "coi-mapa":            { published: true,  link: "" },
    "ainda":               { published: true  },
    "coi-conteudo":        { published: true,  link: "" },
    "coi-agentes":         { published: true,  link: "" },
    "betpass-operacoes":   { published: true  },
    "automacoes":          { published: true  },
    "portfolio":           { published: true,  link: "https://github.com/lais-b/lais-barroso-portfolio" },
    "betpass-eventos":     { published: true }
  },

  imagesBasePath: "assets/imagens/"
};

if (typeof window !== "undefined") { window.CONTENT_STATUS = CONTENT_STATUS; }

/* Loaded before content.js/script.js so the career-positioning patch can
   intercept the content globals before the site is rendered. */
if (typeof document !== "undefined") {
  document.write('<script src="positioning-overrides.js?v=20260817"></script>');
  document.write('<script src="cv-links.js?v=20260817"></script>');
}
