'use strict';

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function(dictionary) {
  var res = this.template;

  // eslint-disable-next-line guard-for-in
  for (var key in dictionary) {
    var pattern = new RegExp('{{' + key + '}}', 'g');
    res = res.replace(pattern, dictionary[key]);
  }

  res = res.replace(/{{[^{}]*}}/g, '');

  return res;
};
