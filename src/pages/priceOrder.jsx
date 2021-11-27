import './../App.css';
import Header from './../components/header'
import Banner from './../components/banner'
import CarListOrderPrice from './../components/carListOrderPrice';

export default function priceOrder() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CarListOrderPrice/>
    </div>
  );
}
