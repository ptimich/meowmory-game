import { populate } from "../imagesCollection";
import cats10 from "./mockedCats";
import { defaultState } from "../gameEngine/defaultState";

interface CatProps {
  id: string;
  url: string;
}

export const fetchCats = async () => {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=10").then(
    async (response) => {
      if (!response.ok || response.status !== 200)
        throw new Error("Fetch error");
      const cats = (await response.json()) as CatProps[];
      return cats.map<CatProps>((cat) => ({ id: cat.id, url: cat.url }));
    },
  );
};

// 20 unique cats is fine for now
export const populateCatsCollection = async () => {
  try {
    const cat1 = await fetchCats();
    const cat2 = await fetchCats();
    const repo = [...cat1, ...cat2].reduce(
      (acc, cat) => {
        return { ...acc, [cat.id]: cat.url };
      },
      {} as Record<string, string>,
    );
    populate(Object.values(repo));
  } catch (err) {
    console.log("Could not fetch cats");
  }
};

export const populateFakeCatsCollection = () => {
  const catsUrls: string[] = cats10
    .slice(0, defaultState.settings.imagesCount)
    .map((c) => c.url);
  populate(catsUrls);
};
