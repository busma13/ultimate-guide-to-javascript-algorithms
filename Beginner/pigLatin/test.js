const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('translates text beginning with consonant sound to pig latin', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

test('translates text beginning with consonant cluster to pig latin', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

test('translates text beginning with vowel sound to pig latin', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});



