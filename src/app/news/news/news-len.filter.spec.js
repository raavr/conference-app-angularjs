import MaxLenModule from './news-len.filter';

describe('MaxLenFilter', () => {
  const MAX_LEN = 15;
  let maxLenFun;
  
  beforeEach(angular.mock.module(MaxLenModule));
  
  beforeEach(
      angular.mock.inject((maxLenFilter) => {
          maxLenFun = maxLenFilter;
      }));

  it('leaves "lorem ipsum" unchanged', () => {
    expect(maxLenFun('lorem ipsum', MAX_LEN)).toBe('lorem ipsum');
  });

  it('transforms "abcdefg hijklmnop" to "abcdefg hijklmn..."', () => {
    expect(maxLenFun('abcdefg hijklmnop', MAX_LEN)).toBe('abcdefg hijklmn...');
  });

  it('leaves "" unchanged', () => {
    expect(maxLenFun('', MAX_LEN)).toBe('');
  });

  it('transforms "a" to "..."', () => {
    let maxLen = 0;
    expect(maxLenFun('a', maxLen)).toBe('...');
  })

  it('transforms "                     " to "               ..."', () => {
    expect(maxLenFun('                     ', MAX_LEN)).toBe('               ...');
  });
});