import Card from './components/Card'
import './App.css';
import bg from './images/bg-pattern.svg';

function App() {
  const container = {
    margin: '0 auto',
    width: '80%',
    height:'100vh',
    backgroundColor:'hsl(230, 100%, 99%)',
    backgroundImage: `url(${bg})`, 
    backgroundRepeat: 'no-repeat',
    }

const headerStyle={
  'width':'35%',
  'padding-top':'5%',
  'padding-bottom':'5%',
  'margin-left':'33%',
}

  return (
    <div style={container}>
      <header style={headerStyle}>
        <h2>Simple, traffic-based pricing</h2>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </header>
      <Card/>
      <footer style={{'width':'40%', 'margin-left':'30%'}}>
        <div class="attribution" style= {{'margin-top':'20%'}}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Ivan Mamani</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
