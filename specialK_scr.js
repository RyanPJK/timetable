  //https://www.simoahava.com/gtm-tips/add-konami-code-to-your-site/
  var els, i, len, title;
  var konamiCode = '38,38,40,40,37,39,37,39,66,65';
  var keyPresses = [];
  var checkKonami = function(e) {
    keyPresses.push(e.keyCode);
    if (keyPresses.slice(keyPresses.length-10).join() === konamiCode) {
      runKonami();
    }
  };
  var runKonami = function() {
    els = document.getElementsByTagName('h2');
    for (i = 0, len = els.length; i < len; i++) {
      title = els[i].textContent || els[i].innerText;
      title = title.trim();
      els[i].innerHTML = title.split('').reverse().join('');
    }
  };
  document.addEventListener('keyup', checkKonami);