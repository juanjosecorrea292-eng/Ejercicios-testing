const { maskEmail, reverseWords, extractHashtags } = require('../src/stringProcessor');

describe('StringProcessor', () => {
  test('maskEmail oculta correctamente', () => {
    expect(maskEmail('sergio@gmail.com')).toBe('s****o@gmail.com');
  });

  test('reverseWords invierte las palabras', () => {
    expect(reverseWords('hola mundo node')).toBe('node mundo hola');
  });

  test('extractHashtags extrae hashtags en un array', () => {
    expect(extractHashtags('Me gusta #node y #testing')).toEqual(['#node', '#testing']);
  });
});