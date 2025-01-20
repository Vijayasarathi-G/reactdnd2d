import { Provider } from 'react-redux';
import store from './redux/store'
import JobDashboard from './components/JobDashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <JobDashboard />
      </div>
    </Provider>
  );
}

export default App;
