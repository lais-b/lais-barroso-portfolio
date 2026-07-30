/* ===================================================================
   script.js — motor do site
   -------------------------------------------------------------------
   Não há texto neste arquivo: tudo vem de content.js e content-status.js.
   Aqui ficam só os comportamentos.
   =================================================================== */
(function () {
  "use strict";

  var ST = window.CONTENT_STATUS || {};
  var C  = window.CONTENT || {};
  var LANGS = { pt: 1, en: 1 };
  var DEFAULT = "pt";
  var KEY = "lb-lang";
  var lang = DEFAULT;

  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Ambiente local x site publicado.
     Só no local aparecem as marcações do que ainda falta preencher. */
  var isDev = (function () {
    var h = location.hostname;
    return h === "localhost" || h === "127.0.0.1" || h === "" || location.protocol === "file:";
  })();

  function t(key) {
    var d = C[lang] || C[DEFAULT] || {};
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    var f = C[DEFAULT] || {};
    return Object.prototype.hasOwnProperty.call(f, key) ? f[key] : "";
  }
  function has(v) { return typeof v === "string" && v.trim() !== ""; }
  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  /* =================================================================
     ESPAÇOS DE IMAGEM
     Tenta carregar o arquivo. Se não existir:
       local     → bloco "Adicionar fotografia"
       publicado → o espaço some, sem buraco no layout
     ================================================================= */
  function fillPhoto(node) {
    var name = node.getAttribute("data-img");
    if (!has(name)) { markMissing(node, ""); return; }
    var src = (ST.imagesBasePath || "assets/imagens/") + name;
    var probe = new Image();
    probe.onload = function () {
      node.classList.remove("is-empty", "is-gone");
      node.textContent = "";
      var img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      img.decoding = "async";
      node.appendChild(img);
    };
    probe.onerror = function () { markMissing(node, name); };
    probe.src = src;
  }

  function markMissing(node, name) {
    if (isDev) {
      node.classList.add("is-empty");
      node.setAttribute("data-hint", name ? "Adicionar " + name : "Adicionar fotografia");
      node.setAttribute("aria-label", t("a11y.photoSlot"));
    } else {
      node.classList.add("is-gone");
    }
  }

  function scanPhotos(scope) {
    var list = (scope || document).querySelectorAll(".ph[data-img]");
    for (var i = 0; i < list.length; i++) fillPhoto(list[i]);
  }

  /* =================================================================
     MOCKUPS ILUSTRATIVOS
     Usados quando o projeto ainda não tem imagem real.
     Sempre marcados como demonstrativos.
     ================================================================= */
  function mockup(kind) {
    var box = el("div", "mock");
    var rows = kind === "flow" ? ["w1 accent", "w2", "w3", "w2 accent"]
             : kind === "browser" ? ["w2 accent", "w1", "w3"]
             : ["w2", "w1 accent", "w3", "w2", "w1"];
    for (var i = 0; i < rows.length; i++) box.appendChild(el("span", "mock-bar " + rows[i]));
    var row = el("div", "mock-row");
    for (var j = 0; j < 3; j++) {
      var c = el("div", "mock-col");
      c.style.height = (26 + j * 14) + "px";
      row.appendChild(c);
    }
    box.appendChild(row);
    box.appendChild(el("span", "mock-note", t("work.demoData")));
    return box;
  }

  /* =================================================================
     PROJETOS
     ================================================================= */
  var grid = document.getElementById("work-grid");

  function projStatus(id) {
    var s = (ST.projects || {})[id];
    return s && s.published === true;
  }

  function renderWork() {
    if (!grid) return;
    grid.textContent = "";

    (window.PROJECTS || []).forEach(function (p) {
      var d = p[lang] || p[DEFAULT] || {};
      var live = projStatus(p.id);

      var card = el("article", "wk-card rv");
      card.setAttribute("data-size", p.size || "regular");

      var inner = live ? el("button", "wk-open") : el("div", "wk-open");
      if (live) {
        inner.type = "button";
        inner.setAttribute("aria-label", d.title);
        inner.addEventListener("click", function () { openProject(p.id); });
      }

      var ph = el("div", "ph wk-ph");
      if (has(p.image)) ph.setAttribute("data-img", p.image);
      else if (p.mockup) ph.appendChild(mockup(p.mockup));
      else ph.appendChild(mockup("spreadsheet"));
      inner.appendChild(ph);

      var meta = el("div", "wk-meta");
      meta.appendChild(el("span", "wk-cat", d.category || ""));
      if (has(p.year)) meta.appendChild(el("span", "wk-year", p.year));
      inner.appendChild(meta);

      inner.appendChild(el("h3", "wk-title", d.title || ""));
      if (has(d.challenge)) inner.appendChild(el("p", "wk-desc", d.challenge));

      if (p.tools && p.tools.length) {
        var ul = el("ul", "wk-tools");
        p.tools.slice(0, 4).forEach(function (x) { ul.appendChild(el("li", null, x)); });
        inner.appendChild(ul);
      }

      if (live) {
        var go = el("span", "wk-go");
        go.appendChild(el("span", null, t("btn.viewProject")));
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 20 12"); svg.setAttribute("fill", "none"); svg.setAttribute("aria-hidden", "true");
        var pth = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pth.setAttribute("d", "M0 6h18M13 1l5 5-5 5");
        pth.setAttribute("stroke", "currentColor"); pth.setAttribute("stroke-width", "1.5");
        pth.setAttribute("stroke-linecap", "round"); pth.setAttribute("stroke-linejoin", "round");
        svg.appendChild(pth); go.appendChild(svg);
        inner.appendChild(go);
      } else {
        inner.appendChild(el("span", "wk-soon", t("work.soon")));
      }

      card.appendChild(inner);
      grid.appendChild(card);
    });

    scanPhotos(grid);
    observe(grid.querySelectorAll(".rv"));
  }

  /* --- painel de detalhe --- */
  var pv = document.getElementById("pv");
  var pvBody = document.getElementById("pv-body");
  var pvPanel = pv ? pv.querySelector(".pv-panel") : null;
  var lastFocus = null;
  var openId = null;

  function block(labelKey, items, ordered) {
    if (!items || !items.length) return null;
    var b = el("div", "pv-block");
    b.appendChild(el("h3", null, t(labelKey)));
    var list = el(ordered ? "ol" : "ul");
    items.forEach(function (x) { list.appendChild(el("li", null, x)); });
    b.appendChild(list);
    return b;
  }
  function textBlock(labelKey, text) {
    if (!has(text)) return null;
    var b = el("div", "pv-block");
    b.appendChild(el("h3", null, t(labelKey)));
    b.appendChild(el("p", null, text));
    return b;
  }

  function buildProject(p) {
    var d = p[lang] || p[DEFAULT] || {};
    pvBody.textContent = "";

    pvBody.appendChild(el("p", "pv-cat", d.category || ""));
    var h = el("h2", "pv-title", d.title || "");
    h.id = "pv-title";
    pvBody.appendChild(h);
    if (has(p.year)) pvBody.appendChild(el("p", "pv-year", t("work.labelYear") + " · " + p.year));

    if (has(d.challenge)) pvBody.appendChild(el("p", "pv-lead", d.challenge));

    if (p.gallery && p.gallery.length) {
      var gal = el("div", "pv-gal");
      p.gallery.forEach(function (g) {
        var ph = el("div", "ph");
        ph.setAttribute("data-img", g);
        gal.appendChild(ph);
      });
      pvBody.appendChild(gal);
    }

    [ textBlock("work.labelContext", d.context),
      textBlock("work.labelRole", d.role),
      block("work.labelProcess", d.process, true),
      block("work.labelDeliverables", d.deliverables, false),
      block("work.labelLearnings", d.learnings, false)
    ].forEach(function (b) { if (b) pvBody.appendChild(b); });

    if (p.tools && p.tools.length) {
      var tb = el("div", "pv-block");
      tb.appendChild(el("h3", null, t("work.labelTools")));
      var tl = el("ul", "pv-tools");
      p.tools.forEach(function (x) { tl.appendChild(el("li", null, x)); });
      tb.appendChild(tl);
      pvBody.appendChild(tb);
    }

    var rb = el("div", "pv-block");
    rb.appendChild(el("h3", null, t("work.labelResults")));
    rb.appendChild(el("p", null, t("work.noResults")));
    pvBody.appendChild(rb);

    if (has(d.note)) pvBody.appendChild(el("p", "pv-note", d.note));

    scanPhotos(pvBody);
  }

  function openProject(id) {
    var p = (window.PROJECTS || []).filter(function (x) { return x.id === id; })[0];
    if (!p || !projStatus(id) || !pv) return;
    lastFocus = document.activeElement;
    openId = id;
    buildProject(p);
    pv.hidden = false;
    document.body.style.overflow = "hidden";
    if (pvPanel) pvPanel.focus();
    if (location.hash !== "#p/" + id) history.pushState(null, "", "#p/" + id);
  }

  function closeProject(fromPop) {
    if (!pv || pv.hidden) return;
    pv.hidden = true;
    openId = null;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    if (!fromPop && location.hash.indexOf("#p/") === 0) history.pushState(null, "", location.pathname + location.search);
  }

  if (pv) {
    pv.addEventListener("click", function (e) {
      var tgt = e.target;
      if (tgt && tgt.closest && tgt.closest("[data-pv-close]")) closeProject();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !pv.hidden) closeProject();
      /* prende o foco dentro do painel */
      if (e.key === "Tab" && !pv.hidden && pvPanel) {
        var f = pvPanel.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    window.addEventListener("popstate", function () {
      if (location.hash.indexOf("#p/") === 0) openProject(location.hash.slice(3));
      else closeProject(true);
    });
  }

  /* =================================================================
     LINHA DO TEMPO / EXPERIÊNCIAS / SKILLS / FERRAMENTAS
     ================================================================= */
  function renderTimeline() {
    var tl = document.getElementById("timeline");
    if (!tl) return;
    tl.textContent = "";
    (window.TIMELINE || []).forEach(function (item) {
      var li = el("li");
      var date = item.date;
      if (item.dateKey) date = has(ST[item.dateKey]) ? ST[item.dateKey] : "";
      if (item.nowKey) { date = t("path.now"); li.className = "is-now"; }
      /* a data entra sempre, ainda que vazia: mantém as colunas alinhadas
         mesmo quando um período ainda não foi preenchido */
      li.appendChild(el("span", "tl-date", has(date) ? date : ""));
      li.appendChild(el("span", "tl-place", item.label));
      li.appendChild(el("span", "tl-what", t("path." + item.key)));
      tl.appendChild(li);
    });
  }

  var XP = [
    { key: "betpass", bullets: 9, period: true },
    { key: "coi",     bullets: 9, period: true, note: true },
    { key: "pluris",  bullets: 4, period: false }
  ];

  function renderXP() {
    var wrap = document.getElementById("xp-list");
    if (!wrap) return;
    wrap.textContent = "";

    XP.forEach(function (x) {
      var item = el("li", "xp-item rv");
      item.setAttribute("role", "listitem");

      var side = el("div", "xp-side");
      side.appendChild(el("p", "xp-co", t("exp." + x.key + ".company")));
      var when = x.period ? t("exp." + x.key + ".period")
                          : (has(ST.plurisPeriod) ? ST.plurisPeriod : "");
      if (has(when)) side.appendChild(el("p", "xp-when", when));
      item.appendChild(side);

      var main = el("div", "xp-main");
      main.appendChild(el("h3", "xp-role", t("exp." + x.key + ".role")));
      if (x.note && has(t("exp." + x.key + ".roleNote"))) {
        main.appendChild(el("span", "xp-note", t("exp." + x.key + ".roleNote")));
      }
      main.appendChild(el("p", "xp-ctx", t("exp." + x.key + ".context")));

      var ul = el("ul", "xp-list");
      for (var i = 1; i <= x.bullets; i++) {
        var v = t("exp." + x.key + ".b" + i);
        if (has(v)) ul.appendChild(el("li", null, v));
      }
      main.appendChild(ul);

      /* números só entram se estiverem validados em content-status.js */
      var ms = (ST.metrics || {})[x.key] || [];
      if (ms.length) {
        var mw = el("div", "xp-metrics");
        ms.forEach(function (m) {
          var b = el("div", "xp-metric");
          b.appendChild(el("strong", null, m.value));
          b.appendChild(el("span", null, m.label));
          mw.appendChild(b);
        });
        main.appendChild(mw);
      }

      item.appendChild(main);
      wrap.appendChild(item);
    });
    wrap.setAttribute("role", "list");
    observe(wrap.querySelectorAll(".rv"));
  }

  function renderPillars() {
    var wrap = document.getElementById("pillars");
    if (!wrap) return;
    wrap.textContent = "";
    (window.SKILL_PILLARS || []).forEach(function (p) {
      var s = el("div", "pillar rv");
      s.appendChild(el("h3", null, t("skills." + p.key + ".title")));
      var ul = el("ul");
      (p[lang] || p[DEFAULT] || []).forEach(function (x) { ul.appendChild(el("li", null, x)); });
      s.appendChild(ul);
      wrap.appendChild(s);
    });
    observe(wrap.querySelectorAll(".rv"));
  }

  function renderTools() {
    var ul = document.getElementById("tools-list");
    if (!ul) return;
    ul.textContent = "";
    (window.TOOLS || []).forEach(function (x) { ul.appendChild(el("li", null, x)); });
  }

  /* =================================================================
     LETRAS RECORTADAS ("ransom")
     ================================================================= */
  function renderRansom() {
    var h = document.querySelector("[data-ransom]");
    if (!h) return;
    var text = t(h.getAttribute("data-ransom"));
    var sr = h.querySelector(".sr-only");
    if (sr) sr.textContent = text;
    var wrap = h.querySelector(".ransom-wrap");
    if (!wrap) return;
    wrap.textContent = "";

    var variants = ["", "v1", "v2", "v3", "v4", "v5"];
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch === " ") { wrap.appendChild(el("span", "rl sp")); continue; }
      var s = el("span", "rl " + variants[(i * 3 + 1) % variants.length], ch);
      /* rotação e ritmo determinísticos: mesma composição em toda visita */
      var rot = (((i * 37) % 9) - 4) * 0.9;
      s.style.setProperty("--r", rot.toFixed(2) + "deg");
      s.style.setProperty("--d", ((i * 0.17) % 2.2).toFixed(2) + "s");
      wrap.appendChild(s);
    }
  }

  /* =================================================================
     CONTATO E ARQUIVOS
     Nada é renderizado com valor vazio: sem link quebrado, sem
     "[ADICIONAR]" visível.
     ================================================================= */
  function fileLinks(container, opts) {
    container.textContent = "";
    var parts = [];

    if (ST.resumes && ST.resumes.pt) {
      parts.push(link(t("btn.resumePT"), "assets/curriculos/curriculo-lais-barroso-pt.pdf", true));
    }
    if (ST.resumes && ST.resumes.en) {
      parts.push(link(t("btn.resumeEN"), "assets/curriculos/curriculo-lais-barroso-en.pdf", true));
    }
    if (has(ST.linkedin)) parts.push(link(t("btn.linkedin"), ST.linkedin, false, true));
    if (has(ST.professionalEmail) && opts && opts.email) {
      parts.push(link(t("btn.email"), "mailto:" + ST.professionalEmail, false));
    }

    if (!parts.length) {
      if (opts && opts.soon) container.appendChild(el("p", "contact-soon", t("contact.soon")));
      return;
    }
    parts.forEach(function (a, i) {
      if (i && !(opts && opts.buttons)) container.appendChild(el("span", "file-sep", "/"));
      container.appendChild(a);
    });

    function link(label, href, dl, ext) {
      var a = el("a", (opts && opts.buttons) ? "btn btn-line" : "file-link", label);
      a.href = href;
      if (dl) a.setAttribute("download", "");
      if (ext) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      return a;
    }
  }

  function renderContact() {
    var hero = document.getElementById("hero-files");
    if (hero) fileLinks(hero, { email: false });
    var box = document.getElementById("contact-actions");
    if (box) {
      fileLinks(box, { email: true, buttons: true, soon: true });
      var first = box.querySelector(".btn");
      if (first) { first.classList.remove("btn-line"); first.classList.add("btn-fill"); }
    }
  }

  /* =================================================================
     IDIOMA
     ================================================================= */
  function applyLang(next) {
    lang = LANGS[next] ? next : DEFAULT;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var v = t(nodes[i].getAttribute("data-i18n"));
      if (v !== "") nodes[i].textContent = v;
    }
    var al = document.querySelectorAll("[data-i18n-aria-label]");
    for (var j = 0; j < al.length; j++) {
      al[j].setAttribute("aria-label", t(al[j].getAttribute("data-i18n-aria-label")));
    }

    root.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    document.title = t("doc.title");
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", t("doc.description"));

    var lb = document.querySelectorAll(".lang-b");
    for (var k = 0; k < lb.length; k++) {
      var on = lb[k].getAttribute("data-lang") === lang;
      lb[k].classList.toggle("is-on", on);
      lb[k].setAttribute("aria-pressed", on ? "true" : "false");
    }
    if (burger) burger.setAttribute("aria-label", t(nav && nav.classList.contains("is-open") ? "a11y.menuClose" : "a11y.menuOpen"));

    renderWork();
    renderTimeline();
    renderXP();
    renderPillars();
    renderTools();
    renderRansom();
    renderContact();
    if (openId) { var p = (window.PROJECTS||[]).filter(function(x){return x.id===openId;})[0]; if (p) buildProject(p); }

    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  /* =================================================================
     MENU
     ================================================================= */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");

  function setMenu(open) {
    if (!burger || !nav) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", t(open ? "a11y.menuClose" : "a11y.menuOpen"));
    nav.classList.toggle("is-open", open);
  }
  if (burger && nav) {
    burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) {
      if (e.target && e.target.closest && e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") { setMenu(false); burger.focus(); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 900) setMenu(false); });
  }

  /* =================================================================
     ENTRADA E DESTAQUE DE SEÇÃO
     ================================================================= */
  var io = null;
  function observe(nodes) {
    if (!nodes || !nodes.length) return;
    if (reduced || !("IntersectionObserver" in window)) {
      for (var i = 0; i < nodes.length; i++) nodes[i].classList.add("on");
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("on"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -50px 0px", threshold: 0 });
    }
    for (var j = 0; j < nodes.length; j++) io.observe(nodes[j]);
  }

  function heroIn() {
    var items = document.querySelectorAll(".hero .an");
    for (var i = 0; i < items.length; i++) {
      items[i].style.setProperty("--an", items[i].getAttribute("data-an") || 0);
    }
    if (reduced) { for (var k = 0; k < items.length; k++) items[k].classList.add("on"); return; }
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        for (var j = 0; j < items.length; j++) items[j].classList.add("on");
      });
    });
  }

  function spy() {
    var links = document.querySelectorAll(".hdr-nav a");
    var pairs = [];
    for (var i = 0; i < links.length; i++) {
      var id = links[i].getAttribute("href");
      if (id && id.charAt(0) === "#") {
        var sec = document.querySelector(id);
        if (sec) pairs.push({ sec: sec, link: links[i] });
      }
    }
    if (!pairs.length || !("IntersectionObserver" in window)) return;
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        pairs.forEach(function (p) { p.link.classList.toggle("is-on", p.sec === en.target); });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    pairs.forEach(function (p) { so.observe(p.sec); });
  }

  /* =================================================================
     INÍCIO
     ================================================================= */
  root.classList.remove("no-js");
  root.classList.add("no-transition");

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  applyLang(LANGS[stored] ? stored : DEFAULT);

  scanPhotos(document);
  observe(document.querySelectorAll(".rv"));
  heroIn();
  spy();

  if (location.hash.indexOf("#p/") === 0) openProject(location.hash.slice(3));

  requestAnimationFrame(function () {
    requestAnimationFrame(function () { root.classList.remove("no-transition"); });
  });
})();
