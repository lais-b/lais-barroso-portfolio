/* Keep portfolio CV buttons aligned with the current career positioning. */
(function () {
  function patchCvLinks() {
    document.querySelectorAll('a[href*="curriculo-lais-barroso-pt.pdf"]').forEach(function (a) {
      a.href = "cv-pt.html";
      a.removeAttribute("download");
      a.target = "_blank";
      a.rel = "noopener";
    });
    document.querySelectorAll('a[href*="curriculo-lais-barroso-en.pdf"]').forEach(function (a) {
      a.href = "cv-en.html";
      a.removeAttribute("download");
      a.target = "_blank";
      a.rel = "noopener";
    });
  }
  window.addEventListener("load", patchCvLinks);
  document.addEventListener("click", function () { setTimeout(patchCvLinks, 0); });
})();
