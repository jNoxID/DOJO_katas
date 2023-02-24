// Fonction qui renvoit la caractères centré d'une chaine STRING si le nombre de CHARS est Impaire...(!!!)
// Sinon, la Valeur retournée par la fonction est : la Combinaison de 2 Caractères au centre de la chaine... (!!!)

// Function which return center CHAR from a STRING, if NB_CHARS of this is Even... (!!!)
// Else, in the case that NB_CHARS of this STRING is ODD, this return there 2 CHARS in the Center like above... (!!!)

function getMiddle(s) {
  const inArray = [...s];
  const nbCharInString = inArray.length;

  if (nbCharInString % 2 === 0) {
    let positionInter = (nbCharInString / 2);
    let downCenter = positionInter - 1;
    let sliceStart = s.slice(downCenter, positionInter + 1);
    return console.log(sliceStart);
  } else {
    let positionInter = Math.floor(nbCharInString / 2);
    return console.log(s[positionInter]);
  }
}
