(function insecurePage() {
  console.log('insecure-page script started');

  function linkInput(sourceId) {
    console.log('linking content from %s to the DOM', sourceId);
    var input = document.getElementById(sourceId);
    var markup = input.value;
    console.log('linking markup\n' + markup);

    // use jQuery for simplicity, but this is NOT 100% secure against
    // script execution, see http://api.jquery.com/jquery.parsehtml/
    var runScripts = true;
    var html = $.parseHTML('<p>\n' + markup + '\n</p>\n', document, runScripts);
    $(input).after(html);
  }

  document.getElementById('linkGoodInput')
    .addEventListener('click', linkInput.bind(null, 'goodInput'));
  document.getElementById('linkBadInput')
    .addEventListener('click', linkInput.bind(null, 'badInput'));

  console.log('insecure-page script finished');
}());
