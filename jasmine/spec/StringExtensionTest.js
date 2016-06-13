'use strict';
describe('Vowel', function () {
  it('Returns true if vowels are present', function () {
    expect('Jolaade'.hasVowels()).toBeTruthy();
    expect('Why'.hasVowels()).toBeFalsy();
    expect('tunde'.hasVowels()).toBeTruthy();
    expect('Abraham'.hasVowels()).toBe(true);
    expect('abraham'.hasVowels()).toBe(true);
    expect('ABRAHAM'.hasVowels()).toBe(true);
    expect('Abraham is a good boy'.hasVowels()).toBe(true);
  });

  it('Returns false if vowels are absent', function () {
    expect('cry'.hasVowels()).toBe(false);
    expect('CRY'.hasVowels()).toBe(false);
    expect('   '.hasVowels()).toBe(false);
    expect('Cry Cry Cry'.hasVowels()).toBe(false);
    expect(';--048=-9358'.hasVowels()).toBe(false);
  });
});

describe('Uppercase', function () {
  it('Converts lowercase alphabets to uppercase', function () {
    expect('jolaade'.toUpper()).toEqual('JOLAADE');
    expect('why'.toUpper()).toEqual('WHY');
    expect('tunde'.toUpper()).toEqual('TUNDE');
    expect('Abraham'.toUpper()).toBe('ABRAHAM');
    expect('abraham'.toUpper()).toBe('ABRAHAM');
    expect('aBrAhAm'.toUpper()).toBe('ABRAHAM');
  });
});

describe('Lower', function () {
  it('Converts uppercase alphabets to lowercase', function () {
    expect('JOLAADE'.toLower()).toEqual('jolaade');
    expect('WHY'.toLower()).toEqual('why');
    expect('TUNDE'.toLower()).toEqual('tunde');
    expect('somebody'.toLower()).toBe('somebody');
    expect('LOver of Java'.toLower()).toBe('lover of java');
  });
});

describe('UcFirst', function () {
  it('Converts first alphabet to uppercase', function () {
    expect('jolaade'.ucFirst()).toEqual('Jolaade');
    expect('why'.ucFirst()).toEqual('Why');
    expect('tuNde'.ucFirst()).toEqual('Tunde');
    expect(''.ucFirst()).toEqual('');
  });
});

describe('IsQuestion', function () {
  it('Returns true if a sentence is a question', function () {
    expect('are you okay ? '.isQuestion()).toBeTruthy();
    expect('What is the meaning ?'.isQuestion()).toBeTruthy();
    expect('This is not it !'.isQuestion()).toBeFalsy();
    expect('Are we good '.isQuestion()).toBe(false);
  });
});

describe('words', function () {
  it('Returns words as an array', function () {
    expect('jolaade , > is a @ & boy'.words())
      .toEqual(['jolaade', 'is', 'a', 'boy']);
    expect('What is it, let , us chill'.words())
      .toEqual(['What', 'is', 'it', 'let', 'us', 'chill']);
    expect('All these songs for you'.words())
      .toEqual(['All', 'these', 'songs', 'for', 'you']);
    expect('Are you alright?'.words()).toEqual(['Are', 'you', 'alright']);
    expect('Are you ?-*()!>%^@"\'= alright?'.words())
      .toEqual(['Are', 'you', 'alright']);
    expect('I am not your mate'.words())
      .toEqual(['I', 'am', 'not', 'your', 'mate']);
    expect('I will never give up on you'.words())
      .toEqual(['I', 'will', 'never', 'give', 'up', 'on', 'you']);
    expect(''.words()).toEqual([]);
  });
});

describe('wordCount', function () {
  it('Returns the number of words in the String', function () {
    expect('jolaade is a boy'.wordCount()).toEqual(4);
    expect('What is the meaning * lol'.wordCount()).toEqual(5);
    expect('This is not it ! here'.wordCount()).toEqual(5);
    expect('All these songs for you'.wordCount()).toBe(5);
    expect('Are you alright?'.wordCount()).toBe(3);
    expect('I am not your mate'.wordCount()).toBe(5);
    expect(''.wordCount()).toBe(0);
  });
});

describe('toCurrency', function () {
  it('Returns a currency representation of the String', function () {
    expect('11111.11'.toCurrency()).toEqual(11,111.11);
    expect('23456734567'.toCurrency()).toEqual(23,456,734,567);
    expect('11111.11'.toCurrency()).toBe(11,111.11);
    expect('100'.toCurrency()).toBe(100);
    expect('1000'.toCurrency()).toBe(parseFloat('1,000'));
    expect('1000000000'.toCurrency()).toBe(parseFloat('1,000,000,000'));
    expect('1.000000000'.toCurrency()).toBe(1);
    expect('1.230000'.toCurrency()).toBe(1.23);
    expect('1000.23'.toCurrency()).toBe(parseFloat('1,000.23'));
    expect('1000000.987'.toCurrency()).toBe(parseFloat('1,000,000.987'));
  });
});

describe('fromCurrency', function () {
  it('Returns a String representation of a currency', function () {
    expect('11,111.11'.fromCurrency()).toEqual(11111.11);
    expect('23,456,734,567'.fromCurrency()).toEqual(23456734567);
    expect('11,111.11'.fromCurrency()).toBe(11111.11);
    expect('100'.fromCurrency()).toBe(100);
    expect('100'.fromCurrency()).toBe(100);
    expect('1,000'.fromCurrency()).toBe(1000);
    expect('1,000,000,000'.fromCurrency()).toBe(1000000000);
  });
});

