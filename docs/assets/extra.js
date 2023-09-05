window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

function iframeResize() {
  var heightSidebar = document.querySelector('.md-sidebar__scrollwrap').offsetHeight;
  var heightContent = document.querySelector('.md-content__inner').offsetHeight;
  var height = Math.max(heightSidebar, heightContent) + 100 + 50 + 116;
  parent.postMessage("resize::"+height,"*");
}
iframeResize();
setInterval(iframeResize, 1000);

var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://piwik.inria.fr/";
  _paq.push(['setTrackerUrl', u+'piwik.php']);
  _paq.push(['setSiteId', '126']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

