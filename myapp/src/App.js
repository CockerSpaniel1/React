import cup from './cup.png';
import imgbean from './arabica.png';
import './App.css';


const arabica = "阿拉比卡咖啡(Arabica coffee)";
const desc = "原產於東非伊索比亞南部的阿比西 尼亞高原，現今沿海尚有野生種。";
 
function App(props) {
  const special = props.special 
  const mystyle = {"color":"black","fontWeight":"bold", "backgroundColor":"lightblue"}
  
  return (  
    <div className="App">

      <header className="App-header">
        <img src={cup} className="App-logo" alt="logo" />
        
        <h1>Welcome to {props.subject}</h1>
        <p>本店招牌: <span style={mystyle}>{special}</span></p>
        <img src={imgbean} alt="arcabica" style={ {width:"10%", borderRadius:"50%", boxShadow:"10px"}} />


        <p> {arabica}<br/> {desc}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
