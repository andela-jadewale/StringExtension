'use strict';
String.prototype.hasVowels = function () {
  return /[aeiou]/gi.test(this);
};
