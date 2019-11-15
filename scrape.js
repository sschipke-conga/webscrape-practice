var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://webscraper.io/test-sites')
  .click('a[href="/test-sites/e-commerce/allinone"]')
  .wait('h4')
  .evaluate(function () {
    var priceNodes = document.querySelectorAll('.price');
    var priceList = [].slice.call(priceNodes);
    return priceList.map(function (node) {
      return node.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });