import { useState, useEffect } from 'react';

import DrawService from '../../services/DrawService';
import ChartComponent from '../ChartComponent/ChartComponent';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './app.scss';

const App = () => {

  const [data, setData] = useState([])
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [userColor, setUserColor] = useState(null);

  const res = DrawService().getData();

  useEffect(() => {
    res
      .then(data => {
        setData(data);
        setUsers([...new Set(data.map(item => item.name))]);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    onCalc();
  }, [user])

  const onChange = (e) => {
    const id = e.target.id;
    const userSelect = users[id];
    const dataUserSelect = data.filter(item => item.name === userSelect);
    setUser(dataUserSelect);
    const color = () => {
      if (id % 3 === 0) {
        setUserColor('red');
      } else if (id % 2 == 0) {
        setUserColor('green');
      } else {
        setUserColor('blue');
      }
    };
    color();
  }

  const onCalc = () => {
    if (!user) {
      setChartData(null);
      return;
    };
    const newArr = user.map(item => {
      const obj = {}
      obj.value = item.value;
      obj.date = Date.parse(item.date);
      return obj;
    });
    newArr.sort((a, b) => a.date - b.date);
    setChartData(newArr);
  }

  const renderUsers = () => {
    return users.map((item, i) => {
      return (
        <label key={i} className='app__label'>
          <input type="radio" id={i} name='radio' onChange={e => onChange(e)}></input>
          <span>{item}</span>
        </label>
      );
    });
  }

  return (
    <>
      <div className='container app__container'>
        <form className='app__form'>
          {renderUsers()}
          <button className='button' type='button' onClick={() => setUser(null)}>Сбросить</button>
        </form>
        <div className='app__draw'>
          <ErrorBoundary>
            <ChartComponent chartData={chartData} user={user} userColor={userColor}/>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export default App;
