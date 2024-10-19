import axios from "axios";
import { resasApiBaseEndpoint } from "./define";

const getPrefectures = async () => {
  const data = await getData(generateUrl('api/v1/prefectures'));
  console.log(data);
}

const generateUrl = (pathParameters: string, queryParameters: string = '') => {
  return `${resasApiBaseEndpoint}${pathParameters}?${queryParameters}`;
}

const getData = async (url: string) => {

  try {
    const response = await axios.get(url, {
      headers: {
        'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY
      }
    });
    return response.data;
  } catch (error) {
		console.error(error);
  }

}

export { getPrefectures };