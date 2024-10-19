import { getPrefectures, getPopulation } from "../../util/api";

const GetApi = () => {
  getPrefectures();
  getPopulation(['13', '14', '15']);
  return (
    <div>
      <h1>GetApi</h1>
    </div>
  );
};

export default GetApi;
