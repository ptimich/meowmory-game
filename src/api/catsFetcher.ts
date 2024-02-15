import { populate } from "../imagesCollection";
import cats10 from "./mockedCats";
import { defaultState } from "../gameEngine/defaultState";

interface CatProps {
  id: string;
  url: string;
}

export const fetchCats = async (): Promise<CatProps[]> => {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(async (response) => {
      if (!response.ok || response.status !== 200)
        throw new Error("Fetch error");
      const cats = (await response.json()) as CatProps[];
      return cats.map((cat) => ({ id: cat.id, url: cat.url }));
    })
    .catch(() => {
      console.log("Network error");
    });
};

// 20 unique cats is fine for now
export const populateCatsCollection = async () => {
  const cat1 = await fetchCats();
  const cat2 = await fetchCats();
  const repo = [...cat1, ...cat2].reduce((acc, cat) => {
    acc[cat.id] = cat.url;
    return acc;
  }, {});
  populate(Object.values(repo));
};

export const populateFakeCatsCollection = () => {
  const catsUrls: string[] = cats10
    .slice(0, defaultState.settings.imagesCount)
    .map((c) => c.url);
  populate(catsUrls);
};
