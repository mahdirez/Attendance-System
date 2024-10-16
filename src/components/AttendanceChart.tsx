import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "6 مهر", time: 3 },
  { day: "7 مهر", time: 8 },
  { day: "8 مهر", time: 5 },
  { day: "9 مهر", time: 6 },
  { day: "10 مهر", time: 4 },
];

const AttendanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="time" fill="#1F2937" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceChart;
