(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FORMAT_RE = /\${(.*?)}/g;
  var EMPTY_STR = '';

  nx.literalTmpl = function (inString, inContext) {
    var result = inString || EMPTY_STR;
    var replaceFn = function (_, match) {
      var path = match.trim();
      return nx.get(inContext, path) || EMPTY_STR;
    };
    return result.replace(FORMAT_RE, replaceFn);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.literalTmpl;
  }
})();
