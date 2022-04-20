import { useEffect, useState } from 'react';

import ReactChartComponent from '../ReactChartComponent/ReactChartComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './ChartComponent.scss';

const ChartComponent = (props) => {

  const { chartData } = props;

  const [data, setData] = useState([]);

  useEffect(() => {
    onData();
  }, [chartData])

  const onData = () => {
    if (!chartData) return;
    const arr = chartData.map(item => {
      const dateStr = new Date(item.date);
      const year = dateStr.getFullYear();
      const month = dateStr.getMonth();
      const day = dateStr.getDate();
      return ({
        date: { ...{ year, month, day } },
        value: item.value,
      });
    });
    setData(arr);
  };

  const textRender = () => {
    if (!props.user) return null;
    return (
      data.map((item, i) => {
        return (
          <div className='chart-text' key={i}>
            <span>число: {item.date.day}, </span>
            <span>месяц: {item.date.month}, </span>
            <span>год: {item.date.year}, </span>
            <span>значение: {item.value}.</span>
          </div>
        )
      })
    )
  }

  return (
    <>
      <ErrorBoundary>
        <ReactChartComponent data={data} chartData={chartData} user={props.user} userColor={props.userColor}/>
      </ErrorBoundary>
      {textRender()}
    </>
  )
}

export default ChartComponent;