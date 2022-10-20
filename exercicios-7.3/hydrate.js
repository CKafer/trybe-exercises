const hydrate = (string) => {
  let GlassesOfWater = 0;

  switch (string) {
    case '1 cerveja':
      GlassesOfWater = 1;
      break;
    case '1 cachaça, 5 cervejas e 1 copo de vinho':
      GlassesOfWater = 7;
      break;
    case '1 cachaça, 5 cervejas e 1 copo de vinho':
      GlassesOfWater = 7;
      break;
    case '2 shots de tequila, 2 cervejas e 1 corote':
      GlassesOfWater = 5;
      break;
    case '1 copo de catuaba, 1 cervejas e 1 copo de vinho':
      GlassesOfWater = 3;
      break;
    case '4 caipirinhas e 2 cervejas':
      GlassesOfWater = 6;
      break;
  }
  if (GlassesOfWater === 1) {
    return `${GlassesOfWater} copo de água`;
  } else {
    return `${GlassesOfWater} copos de água`;
  }
};

module.exports = hydrate;
