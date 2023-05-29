import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { up } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.value;
  });

  const status = useSelector((state) => {
    return state.counter.status;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>
      <div>
        {count} | {status}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
