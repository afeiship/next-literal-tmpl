(function () {
  require('../src');

  describe('api.basic test', () => {
    test('single var should work fine', function () {
      var str = '${ GITHUB_API_TOKEN } hello world.';
      var ctx = {
        GITHUB_API_TOKEN: 'xxx-yyy-zzz',
        afei: 'zhengfei'
      };

      var res = nx.literalTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz hello world.');
    });

    test('multiple var should work fine', function () {
      var str = '${ GITHUB_API_TOKEN } - ${ afei }';
      var ctx = {
        GITHUB_API_TOKEN: 'xxx-yyy-zzz',
        afei: 'zhengfei'
      };

      var res = nx.literalTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz - zhengfei');
    });

    test('${{name}} no blank should work fine', () => {
      var str = '${GITHUB_API_TOKEN} - ${afei}';
      var ctx = {
        GITHUB_API_TOKEN: 'xxx-yyy-zzz',
        afei: 'zhengfei'
      };

      var res = nx.literalTmpl(str, ctx);
      expect(res).toBe('xxx-yyy-zzz - zhengfei');
    });
  });
})();
