import nx from '@jswork/next';
const FORMAT_RE = /\${(.*?)}/g;
const EMPTY_STR = '';

nx.literalTmpl = function (inString, inContext) {
  if (!inContext) return inString;
  const result = inString || EMPTY_STR;
  const replaceFn = function (_, match) {
    const path = match.trim();
    return nx.get(inContext, path) || EMPTY_STR;
  };
  const res = result.replace(FORMAT_RE, replaceFn);
  const hasTpl = FORMAT_RE.test(res);
  return hasTpl ? nx.literalTmpl(res, inContext) : res;
};


if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.literalTmpl;
}

export default nx.literalTmpl;
