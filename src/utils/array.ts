function populateNewArray(length: number) {
  return [...Array<number>(length)].map((_, i) => i);
}

function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createRandomizedMap(imagesCount: number) {
  const array = [
    ...populateNewArray(imagesCount),
    ...populateNewArray(imagesCount),
  ];
  shuffle(array);
  return array;
}

export { createRandomizedMap };
