import { FC } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

const App: FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <>
            <Navbar />
            <Header />
            <Banner position="top" />
            <Banner position="bottom" />
            <Footer />
        </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;