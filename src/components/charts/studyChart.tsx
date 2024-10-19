import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import studyDataList from './studyData';

const StudyChart = () => (
  <div className="container" style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={studyDataList}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="問題数" />
        <Line type="monotone" dataKey="問題数" stroke="#8884d8" />
        <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" />
        <Line type="monotone" dataKey="正解率" stroke="#ff0092" />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default StudyChart;