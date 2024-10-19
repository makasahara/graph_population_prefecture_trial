import { getPrefectures } from "../../util/api";

const GetApi = () => {
  getPrefectures();
  return (
    <div>
      <h1>GetApi</h1>
    </div>
  );
};

export default GetApi;
