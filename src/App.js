import './App.css';
import NavBar from './modulos/navbar';
import ProductionChart from './modulos/grafico'


function App() {

  return (
    <div className="App">

      <NavBar/>
      <h1>Graficos</h1>
      <ProductionChart dia={'123'} produçao={199}/>

    </div>
  );
}

export default App;
