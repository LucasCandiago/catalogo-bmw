import './App.css';
import Header from './components/header'
import Banner from './components/banner'
import CarList from './components/carList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CarList/>
    </div>
  );
}

export default App;
