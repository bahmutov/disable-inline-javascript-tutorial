(function insecurePage() {
  console.log('insecure-page script started');

  function linkGoodInput() {
    console.log('linking good content to the DOM');
    var input = document.getElementById('goodInput');
    var markup = input.value;
    console.log('linking markup\n' + markup);
    input.insertAdjacentHTML('afterend', '<p>\n' + markup + '\n</p>\n');
  }

  document.getElementById('linkGoodInput').addEventListener('click',
    linkGoodInput);

  console.log('insecure-page script finished');
}());
