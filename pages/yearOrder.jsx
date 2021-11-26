import './../App.css';
import Header from './../components/header'
import Banner from './../components/banner'
import CarListOrderYear from './../components/carListOrderYear';

export default function YearOrder() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CarListOrderYear/>
    </div>
  );
}