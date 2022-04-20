import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const ReactChartComponent = (props) => {

  console.log(props);

  const month = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  

  const chartData = props.data && props.chartData && props.user ? props.data.map(item => item.value) : [];
  const chartLabels = props.data && props.chartData && props.user ? props.data.map(item => month[item.date.month]) : [];

  const data = {
    labels: chartLabels,
    datasets: [{
      label: props.user ? props.user[0].name : 'График пустой',
      backgroundColor: props.userColor,
      borderColor: props.userColor,
      data: chartData,
    }]
  }

  return (
    <div>
      <ErrorBoundary>
        <Line data={data} />
      </ErrorBoundary>
    </div>
  )
}

export default ReactChartComponent;