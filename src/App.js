//css
import './App.css';
//components
import Header from './components/Header';
//images
import orangeMain from './assets/images/orange_blue_main.jpg'
import bananaYellow from './assets/images/banana_yellow.jpg'
import cupPink from './assets/images/cup_pink.jpg'
import papayaGreen from './assets/images/papaya_green.jpg'
import avocadoPink from './assets/images/avocado_pink.jpg'
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <section className='mainContainer'>
        <div className="box box1">
          <Header />
          <img src={orangeMain} alt="orange" />
        </div>
        <div className="otherBoxes">
          <div className="box boxSecondary textBox box2">
            <h2>Transform your brand</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, maxime quo. Eum voluptate, cumque soluta numquam cum error consequatur praesentium!</p>
            <a href="#" className="boxLink">Learn More</a>
          </div>
          <div className="box boxSecondary box3">
          </div>
          <div className="box boxSecondary box4">
          </div>
          <div className="box boxSecondary textBox box5">
            <h2>Stand out to the right audience</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et quasi repellendus omnis qui minus possimus illum, id praesentium tenetur.</p>
            <a href="#" className="boxLink">Learn More</a>
          </div>
          <div className="box boxSecondary box6">
          </div>
          <div className="box boxSecondary box7">
          </div>
        </div>
        <Testimonials />
        <Footer />
      </section>
    </div>
  );
}

export default App;
