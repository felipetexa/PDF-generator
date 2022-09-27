import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function PieChart({chartData}) {
  return (
    <Pie data={chartData} />
  )
}

export default PieChart