// Cette fonction génére un nouveau ARRAY qui contient seulement des STRING de 4 caractères... (!!!)

// Function which generate a NEW_ARRAY for only 4 x CHARS about STRING passed like it's ARGUMENTS... (!!!)

function friend(friends) {
  const decompose = [...friends];
  const newArray = [];

  for (i = 0; i < decompose.length; i++) {
    if (decompose[i].length === 4) {
      newArray.push(decompose[i]);
    }
  }

  return newArray;
}