import { useEffect } from 'react';
import './App.sass';

import { ModuleCard } from './components/ModuleCard';

import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store/actions';
import { Cart } from './components/Cart';


const ModuleData = [
  {
    id: 0,
    name: 'Bike',
    coverage: {
      min: 0,
      max: 3000
    },
    risk: 30,
  },
  {
    id: 1,
    name: 'Jewelry',
    coverage: {
      min: 500,
      max: 10000
    },
    risk: 5,
  },
  {
    id: 2,
    name: 'Electronics',
    coverage: {
      min: 500,
      max: 6000
    },
    risk: 35,
  },
  {
    id: 4,
    name: 'Sports Equipment',
    coverage: {
      min: 0,
      max: 20000
    },
    risk: 30,
  },
]

function App() {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.data.data)


  useEffect(() => {
    dispatch(getData(ModuleData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello Test Task
        </h1>
      </header>
      <div className="App-container">
        {
          data.map(el => {
            return <ModuleCard key={el.id} el={el} />
          })
        }
      </div >
      <div className="App-container">
        <Cart />
      </div>
    </div>
  );
}

export default App;
