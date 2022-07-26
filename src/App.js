
import {fetchRandomImages,setLoading} from "./Action/searchAction";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import Search from './Components/Search';
import Images from './Components/Images';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    dispatch(fetchRandomImages());
  }, []);
  return (
    <div className="App">
      <Search />
      <Images />
    </div>
  );
}
export default App;
