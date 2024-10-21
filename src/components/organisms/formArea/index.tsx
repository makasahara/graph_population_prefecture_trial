import { useQuery } from "react-query";
import { getPrefectures } from "../../../util/api";

type PrefectureType = {
  prefCode: number;
  prefName: string;
}

const FormArea = () => {
  const { data } = useQuery("Prefectures", getPrefectures, { staleTime: 0});
  return (
    <>
      { data.map((prefecture: PrefectureType) =>
        <div key={prefecture.prefCode}>
          <input
            type="checkbox"
            id={`prefecture-${prefecture.prefCode}`}
            value={prefecture.prefCode}
          />
          <label htmlFor={`prefecture-${prefecture.prefCode}`}>
            {prefecture.prefName}
          </label>
        </div>
      )}
    </>
  );
};

export default FormArea;
