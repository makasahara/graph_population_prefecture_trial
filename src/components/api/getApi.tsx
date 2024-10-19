import { getPrefectures, getPopulation } from "../../util/api";

const GetApi = () => {
  getPrefectures();
  getPopulation();
  return (
    <div>
      <h1>GetApi</h1>
    </div>
  );
};

export default GetApi;
