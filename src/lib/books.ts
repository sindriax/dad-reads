import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_BASE_URL is not defined in your environment variables."
  );
}
export interface Book {
  key: string;
  title: string;
  cover_i?: number;
  author_name?: string[];
}

export const getRandomBooks = async (limit: number = 20): Promise<Book[]> => {
  const randomPage = Math.floor(Math.random() * 5) + 1;
  const { data } = await axios.get(`${BASE_URL}/search.json`, {
    params: {
      q: "*",
      sort: "random",
      limit,
      page: randomPage,
    },
  });
  const docs: Book[] = data.docs;
  const shuffled = docs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

export const getBooksByCategory = async (
  category: string,
  limit: number = 20
): Promise<Book[]> => {
  const { data } = await axios.get(
    `${BASE_URL}/subjects/${category.toLowerCase()}.json`,
    {
      params: {
        limit,
      },
    }
  );
  return data.works;
};

// export const getPopularBooks = async (limit: number = 20): Promise<Book[]> => {
//   const { data } = await axios.get(`${BASE_URL}/search.json`, {
//     params: {
//       q: "*",
//       sort: "editions",
//       limit,
//     },
//   });
//   return data.docs;
// };
