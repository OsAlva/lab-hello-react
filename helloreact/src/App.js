
import Superior from './components/Superior';
import Inferior from './components/Inferior';
import Inferior2 from './components/Inferior2';
import Inferior3 from './components/Inferior3';
import Inferior4 from './components/Inferior4';
import './App.css';
import './index.css';
import imagenTop1 from './images/menu-top-xs.png'
import imagenTop2 from './images/ironhack-logo-xs.png';
import icon1  from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="imagenTop2" src={imagenTop2} alt=""></img>
      <img className="imagenTop1" src={imagenTop1} alt=""></img>
      </header>
      <Superior />
      <footer className="App-footer">
      <div className='Inferior' >
      <img src={icon1} alt=""></img>
      <Inferior />
      </div>
      <div className='Inferior2' >
      <img src={icon2} alt=""></img>
      <Inferior2/>
      </div>
      <div className='Inferior3' >
      <img src={icon3} alt=""></img>
      <Inferior3/>
      </div>
      <div className='Inferior4' >
      <img src={icon4} alt=""></img>
      <Inferior4/>
      </div>
      </footer>
    </div>
  );
}

export default App;
