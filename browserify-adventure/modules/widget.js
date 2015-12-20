var domify = require('domify');

module.exports = function() {
  var htmlString = '<div>Hello <span class="name"></span>!</div>';
  var initialWidget = domify(htmlString);

  return {
    widget: initialWidget,
    setName: function(name) {
    var nameSpan = this.widget.getElementsByClassName('name')[0];
      nameSpan.innerHTML = name;
    },
    appendTo: function(target) {
      target.appendChild(this.widget);
    }
  };
};
