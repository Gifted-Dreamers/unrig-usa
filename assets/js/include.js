/* Tiny include helper — fetches partials/header.html + partials/footer.html.
 * Same-origin only; partials are author-controlled static files in /partials/.
 * Usage: <div data-include="/partials/header.html"></div>
 */
(function () {
  var slots = document.querySelectorAll('[data-include]');
  slots.forEach(function (el) {
    var url = el.getAttribute('data-include');
    fetch(url, { cache: 'no-cache' })
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var parent = el.parentNode;

        // Capture script nodes BEFORE we move other nodes (so we can re-create
        // them as live <script> elements at the end). DOMParser-created script
        // tags are inert; they only run if recreated via document.createElement.
        var pendingScripts = Array.from(doc.querySelectorAll('script')).map(function (s) {
          return { src: s.src, text: s.textContent };
        });
        // Strip those scripts from the parsed doc so they don't get inserted as inert.
        Array.from(doc.querySelectorAll('script')).forEach(function (s) { s.remove(); });

        // Move <style> and <link> from head, and remaining body children, into a fragment.
        var frag = document.createDocumentFragment();
        Array.from(doc.head.querySelectorAll('style, link')).forEach(function (n) { frag.appendChild(n); });
        Array.from(doc.body.childNodes).forEach(function (n) { frag.appendChild(n); });

        // Replace placeholder in-place.
        parent.insertBefore(frag, el);
        parent.removeChild(el);

        // Now re-create each script as a live element so the browser executes it.
        pendingScripts.forEach(function (info) {
          var s = document.createElement('script');
          if (info.src) s.src = info.src;
          else s.textContent = info.text;
          document.body.appendChild(s);
        });
      })
      .catch(function (err) { console.error('Include failed:', url, err); });
  });
})();
