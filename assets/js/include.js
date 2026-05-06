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
        var frag = document.createDocumentFragment();
        // Move parsed body children (and head <style>) into the fragment.
        Array.from(doc.head.querySelectorAll('style, link')).forEach(function (n) { frag.appendChild(n); });
        Array.from(doc.body.childNodes).forEach(function (n) { frag.appendChild(n); });
        // Replace placeholder in-place.
        var parent = el.parentNode;
        parent.insertBefore(frag, el);
        parent.removeChild(el);
        // Re-execute scripts (DOMParser-created <script> nodes don't auto-run).
        document.querySelectorAll('script[data-pending-include]').forEach(function (s) { s.remove(); });
        Array.from(doc.querySelectorAll('script')).forEach(function (oldScript) {
          var s = document.createElement('script');
          if (oldScript.src) s.src = oldScript.src;
          else s.textContent = oldScript.textContent;
          document.body.appendChild(s);
        });
      })
      .catch(function (err) { console.error('Include failed:', url, err); });
  });
})();
