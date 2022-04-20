import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartDraw = (props) => {

  const { data } = props;

  const refChart = useRef(null);

  const chartData = data ? data.map(item => item.value) : [];
  const chartLabels = data ? data.map(item => item.month) : [];

  const myChart = () => {
    new Chart(
      refChart.current,
      {
        type: 'line',
        data: {
          labels: chartLabels,
          datasets: [{
            label: 'График',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: chartData,
          }]
        },
        options: {}
      }
    );
  }

  useEffect(() => {
    myChart();
  }, [refChart])

  return (
    <div>
      chart
      <canvas ref={refChart}></canvas>
    </div>
  )
}

export default ChartDraw;