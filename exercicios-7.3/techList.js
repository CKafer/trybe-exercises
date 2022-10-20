const techList = (arrayList, name) => {
  if (arrayList.length === 0) {
    return 'Vazio!';
  } else {
    const sortedArrayList = arrayList.sort();
    const techList = [];

    for (let i = 0; i < sortedArrayList.length; i += 1) {
      techList.push({
        tech: sortedArrayList[i],
        name: name,
      });
    }

    return techList;
  }
};

module.exports = techList;
