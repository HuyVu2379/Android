import { Provider } from 'react-redux';
import BikeApp from './components/BikeApp'
import store from './Redux/store'
const App = () => (
  <Provider store={store}>
    <BikeApp />
  </Provider>
);

export default App;
