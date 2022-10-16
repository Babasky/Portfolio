import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ServicesExperience from './components/ServicesExperience';
import Projets from './components/Projets';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ServicesExperience/>
      <Projets/>
      <Footer/>
    </div>
  );
}

export default App;
