import { FC, useEffect} from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import GridViewListView from '../src/components/Card/GridListView';
import rawData from './utils/data.json';
import { setData } from './store/votingSlice';


const App: FC = () => {

  const { data } = rawData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(data));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <>
            <Navbar />
            <Header />
            <Banner position="top" />
            <GridViewListView />
            <Banner position="bottom" />
            <Footer />
        </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;