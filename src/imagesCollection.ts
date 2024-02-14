let images: string[] = [];

const populate = (arr: string[]) => {
  images = arr;
};

const get = () => images;
const isEmpty = () => images.length === 0;

export { get, populate, isEmpty };
