const $ = require('jquery');
const ko = require('knockout');

function ProductViewModel() {
  var self = this;
  self.products = ko.observableArray([
    {
      name: "Test 1",
      desc: "A thing to test with",
    },
    {
      name: "Test 2",
      desc: "Yet another test thing",
    },
  ]);
}

$(function() {
  ko.applyBindings(new ProductViewModel());
});
