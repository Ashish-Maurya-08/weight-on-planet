import './App.css';
import { useState } from 'react';
import $ from 'jquery'; 
import Solar from './img/Solar_System.jpg';
import Sun from './img/Sun.png';
import Earth from './img/Earth.png';
import Mercury from './img/Mercury.png';
import Venus from './img/Venus.png';
import Mars from './img/Mars.png';
import Jupiter from './img/Jupiter.png';
import Saturn from './img/Saturn.png';
import Uranus from './img/Uranus.png';
import Neptune from './img/Neptune.png';
 
function App() {
  const [final,setfinal]=useState('');

  const planets={
    Sun:27.01,
    Mercury:0.38,
    Venus:0.91,
    Earth:1,
    Mars:0.38,
    Jupiter:2.34,
    Saturn:1.06,
    Uranus:0.92,
    Neptune:1.19
  }

  const calculate=(e)=>{
    e.preventDefault();
    let inp=($('#input').val());
    if(inp===''){
      setfinal('Enter Some Weight First!')
    }
    else{
      let planet=e.target.title;
      setfinal("Weight on "+planet+" : "+inp*planets[planet])
    }
    
  }

  const sun={
    width: '10.5%',
    top:'12%',
    left: '14%'
  }
  const earth={
    width:'4.8%',
    top:'45.7%',
    left:'41.7%'
  };
  const mercury={
    width:'2.1%',
    top:'39.6%',
    left:'29.2%'
  };
  const venus={
    width:'3.9%',
    top:'41.5%',
    left:'34.4%'
  };
  const mars={
    width:'3%',
    top:'61.3%',
    left:'47.27%'
  };
  const jupiter={
    width:'7.2%',
    top:'54.8%',
    left:'52.9%'
  };
  const saturn={
    width:'6.3%',
    top:'49.8%',
    left:'63.1%'
  };
  const uranus={
    width:'5.2%',
    top:'66.8%',
    left:'71.7%'
  };
  const neptune={
    width:'5.5%',
    top:'70.3%',
    left:'81.2%'
  };




  return (
    <div className="App">
      <div className='inputbox'>
        <label for='weight'>Weight :</label> 
        <input type='number' name='weight' id='input'/>
      </div>
      <div className='container'>
      <img src={Solar}  alt='Planets' width="80%" id='solar' useMap='#image-map'/>
      <img src={Sun} alt='sun' title='Sun' onClick={calculate} className='overlay' style={sun} />
      <img src={Earth} alt='earth' title='Earth' onClick={calculate} className='overlay' style={earth} />
      <img src={Mercury} alt='mercury' title='Mercury' onClick={calculate} className='overlay' style={mercury} />
      <img src={Venus} alt='venus' title='Venus' onClick={calculate} className='overlay' style={venus} />
      <img src={Mars} alt='mars' title='Mars' onClick={calculate} className='overlay' style={mars} />
      <img src={Jupiter} alt='jupiter' title='Jupiter' onClick={calculate} className='overlay' style={jupiter} />
      <img src={Saturn} alt='saturn' title='Saturn' onClick={calculate} className='overlay' style={saturn} />
      <img src={Uranus} alt='uranus' title='Uranus' onClick={calculate} className='overlay' style={uranus} />
      <img src={Neptune} alt='neptune' title='Neptune' onClick={calculate} className='overlay' style={neptune} />
      </div>
      <div className='output'>
        {final}
      </div>
    </div>
  );
}

export default App;
