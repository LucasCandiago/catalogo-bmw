import './../App.css';
import Header from './../components/header'
import Banner from './../components/banner'
import CarListOrderAlfa from './../components/carListOrderAlfa';

export default function AlfabeticOrder() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CarListOrderAlfa/>
    </div>
  );
}


