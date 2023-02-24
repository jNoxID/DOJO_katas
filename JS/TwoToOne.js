// 2 ARRAYS to UNIQUE CHARS in One STRING + in _Order... (!!!)

// Cette fonction classe par ordre alphabétique les caractères STRING unique depuis 2 ARRAY distincts... (!!!)

function longest(s1, s2) {

  const arrayS1 = [...s1];
  const arrayS2 = [...s2];

  const unifiedArrays = [...arrayS1, ...arrayS2];
  const unique = [...new Set(unifiedArrays)];
  const orderAlphabet = unique.sort();
  const joinInString = orderAlphabet.join('');
  return joinInString;

}
