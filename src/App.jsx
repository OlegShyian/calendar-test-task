import { commonRoutes, privateRoutes } from './constants';
import { useSelector } from 'react-redux';
import { Pages } from './routes';

function App() {
  const loggedIn = useSelector((store) => store.userReducer.loggedIn);

  return <Pages routes={loggedIn ? privateRoutes : commonRoutes} />;
}

export default App;
