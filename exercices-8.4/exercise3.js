const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
//   Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
  
//   const expectedResult = 20;

  function containsA(array) {
    let total = 0;
    array.forEach((element) => {
        const splitLetters = element.split('');
        total += splitLetters.reduce((acc, curr) => (curr === 'a' || curr === 'A') ? acc += 1 : acc, 0);
    })
    return total;
  }
  
  console.log(containsA(names));