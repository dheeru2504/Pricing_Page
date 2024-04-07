import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Features from './components/Features';
import Herofooter from './components/Herofooter';
import Details from './components/Details';
import Faq from './components/Faq';


function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Pricing />
      <Details />
      <Features />
      <Faq />
      <Herofooter />
      <Footer />
    </>
  );
}

export default App;
