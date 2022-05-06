//css
import './App.css';
//components
import Header from './components/Header';

//images
import orangeMain from './assets/images/orange_blue_main.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <section className='mainContainer'>
        <div className="box box1">
          <img src={orangeMain} alt="orange" />
        </div>
      </section>
    </div>
  );
}

export default App;
